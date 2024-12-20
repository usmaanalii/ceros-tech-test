import { IMAGE_NAMES } from "../../Constants";
import { Animation } from "./Animation";

export class AnimationManager {
    private animations: { [key: string]: Animation } = {};
    private currentAnimation: Animation | null = null;
    private currentFrame: number = 0;
    private lastFrameTime: number = 0;
    readonly onFrameChange?: (imageName: IMAGE_NAMES) => void;

    constructor(onFrameChange?: (imageName: IMAGE_NAMES) => void) {
        this.onFrameChange = onFrameChange;
    }

    setupAnimations(animations: { [key: string]: Animation }) {
        this.animations = animations;
    }

    setAnimation(state: string) {
        this.currentAnimation = this.animations[state] || null;
        this.currentFrame = 0;
        if (this.currentAnimation) {
            this.onFrameChange?.(this.currentAnimation.getImages()[0]);
        }
    }

    animate(gameTime: number, frameSpeed: number) {
        if (!this.currentAnimation) return;

        if (gameTime - this.lastFrameTime > frameSpeed) {
            this.nextFrame(gameTime);
        }
    }

    nextFrame(gameTime: number) {
        if (!this.currentAnimation) return;

        const images = this.currentAnimation.getImages();
        this.lastFrameTime = gameTime;
        this.currentFrame++;

        if (this.currentFrame >= images.length) {
            if (!this.currentAnimation.getLooping()) {
                this.finishAnimation();
                return;
            }
            this.currentFrame = 0;
        }

        const newImage = images[this.currentFrame];
        this.onFrameChange?.(newImage);
    }

    finishAnimation() {
        if (!this.currentAnimation) return;
        const callback = this.currentAnimation.getCallback();
        this.currentAnimation = null;
        this.currentFrame = 0;
        if (callback) callback();
    }
}
