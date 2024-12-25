/**
 * The rhino chases after a target and eats the target when they come in contact with one another. Also has a few
 * different animations that it cycles between depending upon the rhino's state.
 */

import { ANIMATION_FRAME_SPEED_MS, IMAGE_NAMES } from "../Constants";
import { Entity } from "./Entity";
import { Animation } from "../Core/Animations/Animation";
import { Canvas } from "../Core/Canvas";
import { ImageManager } from "../Core/ImageManager";
import { intersectTwoRects, getDirectionVector } from "../Core/Utils";
import { AnimationManager } from "../Core/Animations/AnimationManager";

/**
 * The rhino starts running at this speed. Saved in case speed needs to be reset at any point.
 */
const STARTING_SPEED: number = 10.5;

/**
 * The different states the rhino can be in.
 */
enum STATES {
    STATE_RUNNING = "running",
    STATE_EATING = "eating",
    STATE_CELEBRATING = "celebrating",
}

/**
 * Sequences of images that comprise the animations for the different states of the rhino.
 */
const IMAGES_RUNNING: IMAGE_NAMES[] = [IMAGE_NAMES.RHINO_RUN1, IMAGE_NAMES.RHINO_RUN2];
const IMAGES_EATING: IMAGE_NAMES[] = [
    IMAGE_NAMES.RHINO_EAT1,
    IMAGE_NAMES.RHINO_EAT2,
    IMAGE_NAMES.RHINO_EAT3,
    IMAGE_NAMES.RHINO_EAT4,
];
const IMAGES_CELEBRATING: IMAGE_NAMES[] = [IMAGE_NAMES.RHINO_CELEBRATE1, IMAGE_NAMES.RHINO_CELEBRATE2];

export class Rhino extends Entity {
    /**
     * The name of the current image being displayed for the rhino.
     */
    imageName: IMAGE_NAMES = IMAGE_NAMES.RHINO;

    /**
     * What state the rhino is currently in.
     */
    state: STATES = STATES.STATE_RUNNING;

    /**
     * How fast the rhino is currently moving in the game world.
     */
    speed: number = STARTING_SPEED;

    animationManager: AnimationManager;

    /**
     * Initialize the rhino, get the animations setup and set the starting animation which will be based upon the
     * starting state.
     */
    constructor(x: number, y: number, imageManager: ImageManager, canvas: Canvas) {
        super(x, y, imageManager, canvas);
        this.animationManager = new AnimationManager();
        this.setupAnimations();
        this.setAnimation(this.state);
    }

    /**
     * Create and store the animations.
     */
    setupAnimations() {
        const animations = {
            [STATES.STATE_RUNNING]: new Animation(IMAGES_RUNNING, true),
            [STATES.STATE_EATING]: new Animation(IMAGES_EATING, false),
            [STATES.STATE_CELEBRATING]: new Animation(IMAGES_CELEBRATING, true),
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
     * Is the rhino currently in the running state.
     */
    isRunning(): boolean {
        return this.state === STATES.STATE_RUNNING;
    }

    /**
     * Update the rhino by moving it, seeing if it caught its target and then update the animation if needed. Currently
     * it only moves if it's running.
     */
    update(gameTime: number, target: Entity) {
        if (this.isRunning()) {
            this.move(target);
            this.checkIfCaughtTarget(target);
        }

        this.animate(gameTime);
    }

    /**
     * Move the rhino if it's in the running state. The rhino moves by going directly towards its target, disregarding
     * any obstacles.
     */
    move(target: Entity) {
        if (!this.isRunning()) {
            return;
        }

        const targetPosition = target.getPosition();
        const moveDirection = getDirectionVector(this.position.x, this.position.y, targetPosition.x, targetPosition.y);

        this.position.x += moveDirection.x * this.speed;
        this.position.y += moveDirection.y * this.speed;
    }

    /**
     * Does the rhino collide with its target. If so, trigger the target as caught.
     */
    checkIfCaughtTarget(target: Entity) {
        const rhinoBounds = this.getBounds();
        const targetBounds = target.getBounds();
        if (!rhinoBounds || !targetBounds) {
            return;
        }

        if (intersectTwoRects(rhinoBounds, targetBounds)) {
            this.caughtTarget(target);
        }
    }

    /**
     * The target was caught, so trigger its death and set the rhino to the eating state.
     */
    caughtTarget(target: Entity) {
        target.die();

        this.setState(STATES.STATE_EATING);
    }

    /**
     * The rhino has won, trigger the celebration state.
     */
    celebrate() {
        this.setState(STATES.STATE_CELEBRATING);
    }

    /**
     * Animate the rhino. This is done by calling the animation manager to animate the skier.
     * Here we pass in the current game time and the frame speed for the animation, and a callback to set the image
     * based upon the current frame of the animation.
     */
    animate(gameTime: number) {
        this.animationManager.animate(gameTime, ANIMATION_FRAME_SPEED_MS, (imageName) => (this.imageName = imageName));
    }

    /**
     * Set the current animation for the rhino based upon the state they're in.
     */
    setAnimation(state: STATES) {
        this.setState(state);
        this.animationManager.setAnimation(state);
    }

    /**
     * Nothing can kill the rhino...yet!
     */
    die() {}
}
