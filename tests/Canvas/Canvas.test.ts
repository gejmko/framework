import {Canvas} from '../../src/Canvas/Canvas';
import {Border} from "../../src";

test('CanvasProvidesContext', () => {
    const canvas = new Canvas(100, 100);

    expect(canvas.getContext()).toBeInstanceOf(CanvasRenderingContext2D);
});

test('CanvasProvidesHtmlCanvas', () => {
    const canvas = new Canvas(100, 100);

    expect(canvas.getCanvas()).toBeInstanceOf(HTMLCanvasElement);
});

test('ChangeCanvasRatio', () => {
    const canvas = new Canvas(100, 100);

    expect(canvas.getRatio()).toBe(1);

    canvas.changeRatio(2);

    expect(canvas.getRatio()).toBe(2);
});

test('AdjustCanvasSize', () => {
    const canvas = new Canvas(100, 100);
    canvas.changeRatio(2);
    canvas.adjustSize();

    expect(canvas.getCanvas().width).toBe(200);
    expect(canvas.getCanvas().height).toBe(200);
    expect(canvas.getContext().setTransform).toBeCalledWith(
        2, 0, 0, 2, 0,0
    );
});

test('ChangeCanvasSize', () => {
    const canvas = new Canvas(100, 100);
    canvas.changeSize(500, 500);

    expect(canvas.getWidth()).toBe(500);
    expect(canvas.getHeight()).toBe(500);
    expect(canvas.getCanvas().width).toBe(500);
    expect(canvas.getCanvas().height).toBe(500);
});

test('ChangeCanvasBorder', () => {
    const canvas = new Canvas(100, 100);
    canvas.changeBorder(
        new Border(1, 'black', 'solid')
    );

    expect(canvas.getBorderStyle()).toBe(
        '1px solid black'
    );
});
