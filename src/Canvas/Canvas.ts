import {Border} from "../Style/Border";

export class Canvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;
    ratio: number = 1;
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.width = width;
        this.height = height;
    }

    adjustSize(): void {
        this.canvas.width = Math.round(this.width * this.ratio);
        this.canvas.height = Math.round(this.height * this.ratio);
        this.canvas.style.width = this.width +'px';
        this.canvas.style.height = this.height +'px';

        // @ts-ignore
        this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
    }

    getContext(): CanvasRenderingContext2D {
        return this.context as CanvasRenderingContext2D;
    }

    changeRatio(ratio: number): void {
        this.ratio = ratio;
    }

    getRatio(): number {
        return this.ratio;
    }

    getCanvas(): HTMLCanvasElement {
        return this.canvas as HTMLCanvasElement;
    }

    changeBorder(border: Border): void {
        this.canvas.style.border = border.stylize();
    }

    changeSize(width: number, height: number): void {
        this.width = width;
        this.height = height;

        this.adjustSize();
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    getBorderStyle(): string {
        return this.canvas.style.border;
    }
}
