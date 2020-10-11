import {Updater} from "./Engine/Updater";
import {Renderer} from "./Engine/Renderer";

export class GameScope {
    context: CanvasRenderingContext2D;
    fps: number;
    width: number;
    height: number;
    updater: Updater;
    renderer: Renderer;

    constructor(
        context: CanvasRenderingContext2D,
        fps: number,
        width: number,
        height: number,
        updater: Updater,
        renderer: Renderer
    ) {
        this.context = context;
        this.fps = fps;
        this.width = width;
        this.height = height;
        this.updater = updater;
        this.renderer = renderer;
    }

    getContext(): CanvasRenderingContext2D {
        return this.context;
    }

    getFps(): number {
        return this.fps;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    update(): void {
        this.updater.fire();
    }

    render(): void {
        this.renderer.fire();
    }

    setCurrentFrameNumber(frameNumber: number): void {
        this.updater.setCurrentFrameNumber(frameNumber);
    }
}
