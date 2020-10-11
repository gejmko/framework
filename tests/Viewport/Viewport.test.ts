import {Viewport} from '../../src/Viewport/Viewport';
import {Border} from "../../src/Style/Border";

test('ViewportInitialization', () => {
    const viewport = new Viewport('game-id');

    document.body.innerHTML =
        '<div id="container">' +
        '<div id="game-id"></div>' +
        '</div>';

    expect(viewport.init()).toBeInstanceOf(Viewport);
});

test('ViewportChangeSize', () => {
    const viewport = new Viewport('game-id');
    viewport.init();
    viewport.changeSize(100, 200);

    expect(viewport.getWidth()).toBe(100);
    expect(viewport.getHeight()).toBe(200);
});

test('ViewportChangeBorder', () => {
    const viewport = new Viewport('game-id');
    viewport.init();

    expect(viewport.changeBorder(new Border(2, 'black', 'solid'))).toBeUndefined();
});
