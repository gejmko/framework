Gejmko — The TypeScript Micro 2D Game Engine
=============

[![Gejmko-main Actions Status](https://github.com/gejmko/framework/workflows/test/badge.svg)](https://github.com/gejmko/framework/actions)


The aim of this project is to provide a fast, micro and lightweight 2D framework for creating browser based games.
It's fast and really simple.


### Setup ###

Gejmko can be installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm).


#### NPM Install

```sh
npm install gejmko
```
There is no default export. The correct way to import Gejmko is:

```js
import * as Gejmko from 'gejmko'
```

### Contribute ###

Want to be part of the Gejmko project? Perfect! All are welcome! 
Whether you find a bug, have a great feature request feel free to get in touch.

Make sure to read the [Contributing Guide](.github/CONTRIBUTING.md)
before submitting changes.

### Current features ###

- Canvas renderer
- Sprites
- Styles

### Basic Usage Example ###

```js
import * as Gejmko from '@gejmko/framework';

const viewport = new Gejmko.Viewport('game-id-element');
viewport.init();
viewport.changeSize(300, 300);
viewport.changeBorder(new Gejmko.Border(1, 'black', 'solid'));

const game = new Gejmko.Game(viewport);
game.start();

class Circle extends Gejmko.AbstractEntity {
  x = 100;
  y = 75;

  render(): void {
    this.context.beginPath();
    this.context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    this.context.stroke();
  }

  update(): void {
    if (this.x - 50 >= 305) {
      this.x = -55;
      return;
    }

    this.x += 1;
  }
}

class MarioSprite extends Gejmko.Sprite {
  constructor() {
    super('assets/mario-sprite.png', 2, 16, 18, 3, 0, 0, 1);
  }

  update(): void {
    if (this.currentFrameNumber % 20 !== 0) {
      return;
    }

    super.update();
  }
}

game.addEntity(new MarioSprite());
game.addEntity(new Circle());

```

### How to build ###

Build the source, run:

```sh
npm run build
```

### License ###

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
