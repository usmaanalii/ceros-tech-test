/**
 * An obstacle that appears on the mountain. Randomly created as one of the types defined in the OBSTACLE_TYPES array.
 */

import { IMAGE_NAMES } from "../../Constants";
import { Canvas } from "../../Core/Canvas";
import { ImageManager } from "../../Core/ImageManager";
import { randomInt } from "../../Core/Utils";
import { Entity } from "../Entity";

interface ObstacleType {
    imageName: IMAGE_NAMES;
    canBeJumpedOver?: boolean;
    canBeSkiiedOver?: boolean;
}

/**
 * The different types of obstacles that can be placed in the game.
 */
export const OBSTACLE_TYPES: { [key: string]: ObstacleType } = {
    [IMAGE_NAMES.TREE]: { imageName: IMAGE_NAMES.TREE },
    [IMAGE_NAMES.TREE_CLUSTER]: { imageName: IMAGE_NAMES.TREE_CLUSTER },
    [IMAGE_NAMES.ROCK1]: { imageName: IMAGE_NAMES.ROCK1, canBeJumpedOver: true },
    [IMAGE_NAMES.ROCK2]: { imageName: IMAGE_NAMES.ROCK2, canBeJumpedOver: true },
    [IMAGE_NAMES.JUMP_RAMP]: { imageName: IMAGE_NAMES.JUMP_RAMP, canBeSkiiedOver: true },
};

export class Obstacle extends Entity {
    /**
     * The name of the current image being displayed for the obstacle.
     */
    imageName: IMAGE_NAMES;

    /**
     * Initialize an obstacle and make it a random type.
     */
    constructor(x: number, y: number, imageManager: ImageManager, canvas: Canvas) {
        super(x, y, imageManager, canvas);

        const obstacleKeys = Object.keys(OBSTACLE_TYPES);
        const typeIdx = randomInt(0, obstacleKeys.length - 1);
        const obstacleType = OBSTACLE_TYPES[obstacleKeys[typeIdx]];
        this.imageName = obstacleType.imageName;
    }

    /**
     * Obstacles can't be destroyed
     */
    die() {}
}
