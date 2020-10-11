import {Factory as CanvasFactory} from "../Canvas/Factory";
import {Canvas} from "../Canvas/Canvas";
import {Border} from "..";

export class Viewport {
    containerElementId: string;
    canvas: Canvas;

    constructor(containerElementId: string) {
        this.containerElementId = containerElementId;
    }

    init(): Viewport {
        const container = document.getElementById(this.containerElementId);

        this.canvas = CanvasFactory.make();

        // @ts-ignore
        container.insertBefore(this.canvas.getCanvas(), container.firstChild);

        return this;
    }

    changeSize(width: number, height: number): void {
        this.canvas.changeSize(width, height);
    }

    changeBorder(border: Border): void {
        this.canvas.changeBorder(border);
    }

    getWidth(): number {
        return this.canvas.getWidth();
    }

    getHeight(): number {
        return this.canvas.getHeight();
    }

    getContext(): CanvasRenderingContext2D {
        return this.canvas.getContext();
    }
}
