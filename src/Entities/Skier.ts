/**
 * The skier is the entity controlled by the player in the game. The skier skis down the hill, can move at different
 * angles, and crashes into obstacles they run into. If caught by the rhino, the skier will get eaten and die.
 */

import { IMAGE_NAMES, DIAGONAL_SPEED_REDUCER, KEYS, ANIMATION_FRAME_SPEED_MS } from "../Constants";
import { Entity } from "./Entity";
import { Canvas } from "../Core/Canvas";
import { ImageManager } from "../Core/ImageManager";
import { intersectTwoRects, Rect } from "../Core/Utils";
import { ObstacleManager } from "./Obstacles/ObstacleManager";
import { Obstacle, OBSTACLE_TYPES } from "./Obstacles/Obstacle";
import { Animation } from "../Core/Animations/Animation";
import { AnimationManager } from "../Core/Animations/AnimationManager";

/**
 * The skier starts running at this speed. Saved in case speed needs to be reset at any point.
 */
const STARTING_SPEED: number = 10;

/**
 * The different states the skier can be in.
 */

enum STATES {
    STATE_SKIING = "skiing",
    STATE_CRASHED = "crashed",
    STATE_DEAD = "dead",
    STATE_JUMPING = "jumping",
}

/**
 * The different directions the skier can be facing.
 */
const DIRECTION_LEFT: number = 0;
const DIRECTION_LEFT_DOWN: number = 1;
const DIRECTION_DOWN: number = 2;
const DIRECTION_RIGHT_DOWN: number = 3;
const DIRECTION_RIGHT: number = 4;

/**
 * Mapping of the image to display for the skier based upon which direction they're facing.
 */
const DIRECTION_IMAGES: { [key: number]: IMAGE_NAMES } = {
    [DIRECTION_LEFT]: IMAGE_NAMES.SKIER_LEFT,
    [DIRECTION_LEFT_DOWN]: IMAGE_NAMES.SKIER_LEFTDOWN,
    [DIRECTION_DOWN]: IMAGE_NAMES.SKIER_DOWN,
    [DIRECTION_RIGHT_DOWN]: IMAGE_NAMES.SKIER_RIGHTDOWN,
    [DIRECTION_RIGHT]: IMAGE_NAMES.SKIER_RIGHT,
};

/**
 * Sequences of images that comprise the animation for the different skier when he is in the jumping state.
 */
const IMAGES_JUMPING: IMAGE_NAMES[] = [
    IMAGE_NAMES.SKIER_JUMP1,
    IMAGE_NAMES.SKIER_JUMP2,
    IMAGE_NAMES.SKIER_JUMP3,
    IMAGE_NAMES.SKIER_JUMP4,
];

export class Skier extends Entity {
    /**
     * The name of the current image being displayed for the skier.
     */
    imageName: IMAGE_NAMES = IMAGE_NAMES.SKIER_DOWN;

    /**
     * What state the skier is currently in.
     */
    state: STATES = STATES.STATE_SKIING;

    /**
     * What direction the skier is currently facing.
     */
    direction: number = DIRECTION_DOWN;

    /**
     * How fast the skier is currently moving in the game world.
     */
    speed: number = STARTING_SPEED;

    /**
     * Stored reference to the ObstacleManager
     */
    obstacleManager: ObstacleManager;

    /**
     * Manages the animations for the skier.
     */
    animationManager: AnimationManager;

    /**
     * Stored rederence to the obstacle that the skier has intersected with.
     * It is initialized to null, indicating there is no intersection initially.
     */
    intersectedObstacle: Obstacle | null = null;

    /**
     * Init the skier.
     */
    constructor(x: number, y: number, imageManager: ImageManager, obstacleManager: ObstacleManager, canvas: Canvas) {
        super(x, y, imageManager, canvas);

        this.obstacleManager = obstacleManager;

        this.animationManager = new AnimationManager();

        this.setupAnimations();
        this.setAnimation(this.state);
    }

    /**
     * Setup animations for the skier.
     */
    setupAnimations() {
        const animations = {
            [STATES.STATE_JUMPING]: new Animation(IMAGES_JUMPING, false, () => {
                this.setState(STATES.STATE_SKIING);
                this.setDirectionalImage();
            }),
        };
        this.animationManager.setupAnimations(animations);
    }

    /**
     * Set the state and then set a new current animation based upon that state.
     */
    setState(newState: STATES) {
        this.state = newState;
    }

    /**
     * Is the skier currently in the crashed state
     */
    isCrashed(): boolean {
        return this.state === STATES.STATE_CRASHED;
    }

    /**
     * Is the skier currently in the skiing state
     */
    isSkiing(): boolean {
        return this.state === STATES.STATE_SKIING;
    }

    /**
     * Is the skier currently in the jumping state
     */
    isJumping(): boolean {
        return this.state === STATES.STATE_JUMPING;
    }

    /**
     * Is the skier currently in the dead state
     */
    isDead(): boolean {
        return this.state === STATES.STATE_DEAD;
    }

    /**
     * Set the current direction the skier is facing if the skier is skiing, and update the image accordingly.
     * If the skier is jumping, then don't change the direction as they're in the air.
     */
    setDirection(direction: number) {
        if (!this.isJumping()) {
            this.direction = direction;
        }

        if (this.isSkiing()) {
            this.setDirectionalImage();
        }
    }

    /**
     * Move the skier, and handle any interactions with obstacles.
     * The skier only moves in the skiing or jumping state.
     */
    update(gameTime: number) {
        if (this.isSkiing() || this.isJumping()) {
            this.move();

            const intersectedObstacle = this.getIntersectedObstacle();
            if (intersectedObstacle) {
                this.setIntersectedObstacle(intersectedObstacle);
            }

            this.handleObstacleIntersection(this.intersectedObstacle);
        }

        this.animate(gameTime);
    }

    /**
     * Move the skier based upon the direction they're currently facing. This handles frame update movement.
     */
    move() {
        switch (this.direction) {
            case DIRECTION_LEFT_DOWN:
                this.moveSkierLeftDown();
                break;
            case DIRECTION_DOWN:
                this.moveSkierDown();
                break;
            case DIRECTION_RIGHT_DOWN:
                this.moveSkierRightDown();
                break;
            case DIRECTION_LEFT:
            case DIRECTION_RIGHT:
                // Specifically calling out that we don't move the skier each frame if they're facing completely horizontal.
                break;
        }
    }

    /**
     * Set the skier's image based upon the direction they're facing.
     */
    setDirectionalImage() {
        this.imageName = DIRECTION_IMAGES[this.direction];
    }

    /**
     * Draw the skier if they aren't dead
     */
    draw() {
        if (this.isDead()) {
            return;
        }

        super.draw();
    }

    /**
     * Move the skier left. Since completely horizontal movement isn't frame based, just move incrementally based upon
     * the starting speed.
     */
    moveSkierLeft() {
        this.position.x -= STARTING_SPEED;
    }

    /**
     * Move the skier diagonally left in equal amounts down and to the left. Use the current speed, reduced by the scale
     * of a right triangle hypotenuse to ensure consistent traveling speed at an angle.
     */
    moveSkierLeftDown() {
        this.position.x -= this.speed / DIAGONAL_SPEED_REDUCER;
        this.position.y += this.speed / DIAGONAL_SPEED_REDUCER;
    }

    /**
     * Move the skier down at the speed they're traveling.
     */
    moveSkierDown() {
        this.position.y += this.speed;
    }

    /**
     * Move the skier diagonally right in equal amounts down and to the right. Use the current speed, reduced by the scale
     * of a right triangle hypotenuse to ensure consistent traveling speed at an angle.
     */
    moveSkierRightDown() {
        this.position.x += this.speed / DIAGONAL_SPEED_REDUCER;
        this.position.y += this.speed / DIAGONAL_SPEED_REDUCER;
    }

    /**
     * Move the skier right. Since completely horizontal movement isn't frame based, just move incrementally based upon
     * the starting speed.
     */
    moveSkierRight() {
        this.position.x += STARTING_SPEED;
    }

    /**
     * Move the skier up. Since moving up isn't frame based, just move incrementally based upon
     * the starting speed.
     */
    moveSkierUp() {
        this.position.y -= STARTING_SPEED;
    }

    /**
     * Handle keyboard input. If the skier is dead, don't handle any input.
     */
    handleInput(inputKey: string) {
        if (this.isDead()) {
            return false;
        }

        let handled: boolean = true;

        switch (inputKey) {
            case KEYS.LEFT:
                this.turnLeft();
                break;
            case KEYS.RIGHT:
                this.turnRight();
                break;
            case KEYS.UP:
                this.turnUp();
                break;
            case KEYS.DOWN:
                this.turnDown();
                break;
            case KEYS.SPACE:
                if (this.isSkiing()) this.jump();
                break;
            default:
                handled = false;
        }

        return handled;
    }

    /**
     * Turn the skier left. If they're already completely facing left, move them left. Otherwise, change their direction
     * one step left. If they're in the crashed state, then first recover them from the crash.
     */
    turnLeft() {
        if (this.isCrashed()) {
            this.recoverFromCrash(DIRECTION_LEFT);
        }

        if (this.direction === DIRECTION_LEFT) {
            this.moveSkierLeft();
        } else {
            this.setDirection(this.direction - 1);
        }
    }

    /**
     * Turn the skier right. If they're already completely facing right, move them right. Otherwise, change their direction
     * one step right. If they're in the crashed state, then first recover them from the crash.
     */
    turnRight() {
        if (this.isCrashed()) {
            this.recoverFromCrash(DIRECTION_RIGHT);
        }

        if (this.direction === DIRECTION_RIGHT) {
            this.moveSkierRight();
        } else {
            this.setDirection(this.direction + 1);
        }
    }

    /**
     * Turn the skier up which basically means if they're facing left or right, then move them up a bit in the game world.
     * If they're in the crashed state, do nothing as you can't move up if you're crashed.
     */
    turnUp() {
        if (this.isCrashed()) {
            return;
        }

        if (this.direction === DIRECTION_LEFT || this.direction === DIRECTION_RIGHT) {
            this.moveSkierUp();
        }
    }

    /**
     * Turn the skier to face straight down. If they're crashed don't do anything to require them to move left or right
     * to escape an obstacle before skiing down again.
     */
    turnDown() {
        if (this.isCrashed()) {
            return;
        }

        this.setDirection(DIRECTION_DOWN);
    }

    jump() {
        this.setState(STATES.STATE_JUMPING);
        this.setAnimation(STATES.STATE_JUMPING);
        this.move();
    }

    /**
     * The skier has a bit different bounds calculating than a normal entity to make the collision with obstacles more
     * natural. We want te skier to end up in the obstacle rather than right above it when crashed, so move the bottom
     * boundary up.
     */
    getBounds(): Rect | null {
        const image = this.imageManager.getImage(this.imageName);
        if (!image) {
            return null;
        }

        return new Rect(
            this.position.x - image.width / 2,
            this.position.y - image.height / 2,
            this.position.x + image.width / 2,
            this.position.y - image.height / 4
        );
    }

    /**
     * Go through all the obstacles in the game and see if the skier comes into contact with any of them.
     * If so, return the intersected obstacle, otherwise return null.
     */
    getIntersectedObstacle(): Obstacle | null {
        const skierBounds = this.getBounds();
        if (!skierBounds) {
            return null;
        }

        const collisionObstacle = this.obstacleManager.getObstacles().find((obstacle: Obstacle): Obstacle | null => {
            const obstacleBounds = obstacle.getBounds();
            if (!obstacleBounds) {
                return null;
            }

            const didCollide = intersectTwoRects(skierBounds, obstacleBounds);

            return didCollide ? obstacle : null;
        });

        if (!collisionObstacle) {
            return null;
        }

        return collisionObstacle;
    }

    /**
     * Set the obstacle that the skier has intersected with,
     * or set the intersected obstacle to null if they haven't intersected with any obstacles.
     */
    setIntersectedObstacle(obstacle: Obstacle | null) {
        this.intersectedObstacle = obstacle;
    }

    /**
     * Crash the skier. Set the state to crashed, set the speed to zero cause you can't move when crashed and update the
     * image.
     */
    crash() {
        this.setState(STATES.STATE_CRASHED);
        this.speed = 0;
        this.imageName = IMAGE_NAMES.SKIER_CRASH;
    }

    /**
     * Change the skier back to the skiing state, get them moving again at the starting speed and set them facing
     * whichever direction they're recovering to.
     */
    recoverFromCrash(newDirection: number) {
        this.setState(STATES.STATE_SKIING);
        this.speed = STARTING_SPEED;
        this.setDirection(newDirection);
    }

    /**
     * Animate the skier. This is done by calling the animation manager to animate the skier.
     * Here we pass in the current game time and the frame speed for the animation, and a callback to set the image
     * based upon the current frame of the animation.
     */
    animate(gameTime: number) {
        this.animationManager.animate(gameTime, ANIMATION_FRAME_SPEED_MS, (imageName) => (this.imageName = imageName));
    }

    /**
     * Set the current animation for the skier based upon the state they're in.
     */
    setAnimation(state: STATES) {
        this.setState(state);
        this.animationManager.setAnimation(state);
    }

    /**
     * Handle the intersection with an obstacle.
     * If the skier has intersected with an obstacle, then check the type of
     * obstacle and handle the intersection accordingly.
     */
    handleObstacleIntersection(obstacle: Obstacle | null) {
        const collidedImageName = OBSTACLE_TYPES.find((type) => type.imageName === obstacle?.imageName)?.imageName;

        switch (collidedImageName) {
            case IMAGE_NAMES.JUMP_RAMP:
                if (this.isSkiing()) {
                    this.jump();
                }
                break;
            case IMAGE_NAMES.TREE:
            case IMAGE_NAMES.TREE_CLUSTER:
                this.crash();
                break;
            case IMAGE_NAMES.ROCK1:
            case IMAGE_NAMES.ROCK2:
                if (this.isSkiing()) {
                    this.crash();
                }
                break;
            default:
                break;
        }

        this.setIntersectedObstacle(null);
    }

    /**
     * Kill the skier by putting them into the "dead" state and stopping their movement.
     */
    die() {
        this.setState(STATES.STATE_DEAD);
        this.speed = 0;
    }
}
