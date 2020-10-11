import {Animation} from "./Animation";

export class Sprite extends Animation {
    spritePath: string;
    scale: number = 1;
    width: number = 16;
    height: number = 18;
    scaledWidth: number;
    scaledHeight: number;
    spriteLoaded: boolean = false;
    sprite: HTMLImageElement;
    spriteOffsetX: number = 0;
    spriteOffsetY: number = 0;
    step: number = 1;
    spriteSteps: number;
    positionX: number;
    positionY: number;
    startStep: number;

    constructor(
        spritePath: string,
        scale: number,
        width: number,
        height: number,
        spriteSteps: number,
        positionX: number,
        positionY: number,
        step: number
    ) {
        super();

        this.spritePath = spritePath;
        this.scale = scale;
        this.width = width;
        this.height = height;
        this.scaledWidth = this.width * this.scale;
        this.scaledHeight = this.height * this.scale;
        this.spriteSteps = spriteSteps;
        this.positionX = positionX;
        this.positionY = positionY;
        this.step = step;
        this.startStep = step;

        this.loadSprite();
    }

    loadSprite() {
        this.sprite = new Image();
        this.sprite.src = this.spritePath;
        this.sprite.onload = () => {
            this.spriteLoaded = true;
        };
    }

    render(): void {
        if (!this.spriteLoaded) {
            return;
        }

        this.context.drawImage(
            this.sprite,
            this.spriteOffsetX,
            this.spriteOffsetY,
            this.width,
            this.height,
            this.positionX,
            this.positionY,
            this.scaledWidth,
            this.scaledHeight
        );
    }

    update(): void {
        if (!this.spriteLoaded) {
            return;
        }

        // if (this.currentFrameNumber % 20 !== 0) {
        //     return;
        // }
        // this.positionY += 4;

        if (this.step === this.spriteSteps - 1) {
            this.step = this.startStep;
        } else {
            this.step++;
        }

        this.spriteOffsetX = this.width * this.step;
    }
}
