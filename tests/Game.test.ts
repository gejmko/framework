import {Game} from "../src/Game";
import {Viewport} from "../src/Viewport/Viewport";

test('Game is starting', () => {
    document.body.innerHTML =
        '<div id="container">' +
        '<div id="game-id"></div>' +
        '</div>';

    const viewPort = new Viewport('game-id');
    viewPort.init();
    const game = new Game(viewPort);

    expect(game.start()).toBeUndefined();
});
