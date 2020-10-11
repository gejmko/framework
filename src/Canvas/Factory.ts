// @ts-ignore
import {Pixel} from "../Helper/Pixel";
import {Canvas} from "./Canvas";

export class Factory {
    static make(): any {
        const canvas = new Canvas(200, 200);

        const ratio = Pixel.calculatePixelRatio(canvas.getContext());
        canvas.changeRatio(ratio);
        canvas.adjustSize();

        return canvas;
    }
}
