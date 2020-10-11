import {Entity} from "./Entity";

export class AbstractEntity implements Entity{
    context: CanvasRenderingContext2D;
    currentFrameNumber: number;

    setContext(context: CanvasRenderingContext2D): void {
        this.context = context;
    }

    setCurrentFrameNumber(currentFrameNumber: number): void {
        this.currentFrameNumber = currentFrameNumber;
    }

    render(): void {}
    update(): void {}
}
