import {Entity} from "./Entity";

export class Renderer {
    entities: Entity[];

    constructor(entities: Entity[]) {
        this.entities = entities;
    }

    fire() {
        this.entities.forEach( (entity: Entity) => {
            entity.render();
        });
    }
}
