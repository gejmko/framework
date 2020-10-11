import {Viewport} from "./Viewport/Viewport";
import {Loop} from "./Engine/Loop";
import {GameScope} from "./GameScope";
import {Updater} from "./Engine/Updater";
import {Renderer} from "./Engine/Renderer";
import {Entity} from "./Engine/Entity";

export class Game {
    viewport: Viewport;
    loop: Loop;
    context: CanvasRenderingContext2D;
    fps: 24;
    entities: Entity[] = [];

    constructor(viewport: Viewport) {
        this.viewport = viewport;

        this.context = this.viewport.getContext();
        this.loop = new Loop(new GameScope(
            this.context,
            this.fps,
            this.viewport.getWidth(),
            this.viewport.getHeight(),
            new Updater(this.entities),
            new Renderer(this.entities),
        ));

    }

    start() {
        this.loop.start();
    }

    addEntity(entity:  Entity) {
        entity.setContext(this.context);
        this.entities.push(entity);
    }
}
