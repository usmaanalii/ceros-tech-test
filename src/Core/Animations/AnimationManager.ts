import { IMAGE_NAMES } from "../../Constants";
import { Animation } from "./Animation";

export class AnimationManager {
    /**
     * Stores all of the animations available for the different states of the entity using it.
     */
    animations: { [key: string]: Animation } = {};

    /**
     * The animation that the entity is currently using. Typically matches the state the entity is in.
     */
    currentAnimation: Animation | null = null;

    /**
     * The current frame of the current animation the entity is on.
     */
    currentAnimationFrame: number = 0;

    /**
     * The time in ms of the last frame change. Used to provide a consistent framerate.
     */
    currentAnimationFrameTime: number = 0;

    /**
     * Create and store the animations.
     */
    setupAnimations(animations: { [key: string]: Animation }) {
        this.animations = animations;
    }

    /**
     * Set the current animation and reset to the beginning of the animation
     */
    setAnimation(state: string) {
        this.currentAnimation = this.animations[state] || null;

        if (!this.currentAnimation) {
            return;
        }

        this.currentAnimationFrame = 0;
    }

    /**
     * Advance to the next frame in the current animation if enough time has elapsed since the previous frame, and call the callback with the new image.
     */
    animate(gameTime: number, animationFrameSpeed: number, onFrameChangeCallback: (imageName: IMAGE_NAMES) => void) {
        if (!this.currentAnimation) return;

        if (gameTime - this.currentAnimationFrameTime > animationFrameSpeed) {
            this.nextAnimationFrame(gameTime, onFrameChangeCallback);
        }
    }

    /**
     * Increase the current animation frame and update the image based upon the sequence of images for the animation.
     * If the animation isn't looping, then finish the animation instead.
     */
    nextAnimationFrame(gameTime: number, onFrameChangeCallback: (imageName: IMAGE_NAMES) => void) {
        if (!this.currentAnimation) return;

        const animationImages = this.currentAnimation.getImages();

        this.currentAnimationFrameTime = gameTime;
        this.currentAnimationFrame++;

        if (this.currentAnimationFrame >= animationImages.length) {
            if (!this.currentAnimation.getLooping()) {
                this.finishAnimation();
                return;
            }
            this.currentAnimationFrame = 0;
        }

        const newImage = animationImages[this.currentAnimationFrame];

        onFrameChangeCallback(newImage);
    }

    /**
     * The current animation wasn't looping, so finish it by clearing out the current animation and firing the callback.
     */
    finishAnimation() {
        if (!this.currentAnimation) return;

        const animationCallback = this.currentAnimation.getCallback();

        this.currentAnimation = null;

        if (animationCallback) animationCallback();
    }
}
