import {Entity} from "./Entity";

export class Updater {
    entities: Entity[];
    currentFrameNumber: number;

    constructor(entities: Entity[]) {
        this.entities = entities;
    }

    fire() {
        this.entities.forEach( (entity: Entity) => {
            entity.setCurrentFrameNumber(this.currentFrameNumber);
            entity.update();
        });
    }

    setCurrentFrameNumber(frameNumber: number): void {
        this.currentFrameNumber = frameNumber;
    }
}
