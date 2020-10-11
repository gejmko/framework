import {GameScope} from "../GameScope";

export class Loop {
    private main: (frame) => any;
    private stopLoop: number;
    private scope: GameScope;
    private fps: number;
    private currentFrame: number = 1;

    constructor(scope: GameScope) {
        this.scope = scope;
    }

    start() {
        const fps = 60;
        const fpsInterval = 1000 / fps;
        let before = window.performance.now();
        const cycles = {
            new: {
                frameCount: 0, // Frames since the start of the cycle
                startTime: before, // The starting timestamp
                sinceStart: 0 // time elapsed since the startTime
            },
            old: {
                frameCount: 0,
                startTime: before,
                sineStart: 0
            }
        };
        const resetInterval = 5;
        let resetState = 'new';

        this.fps = 0;

        this.main = ( frame ) => {
            this.stopLoop = window.requestAnimationFrame( this.main );

            this.scope.getContext().clearRect(0, 0, this.scope.getWidth(), this.scope.getHeight());

            this.scope.getContext().font = '16px Arial';
            this.scope.getContext().fillStyle = '#000';
            this.scope.getContext().fillText('Test text.', 50, 150);

            this.scope.getContext().fillStyle = '#ff0';
            this.scope.getContext().fillText('FPS: ' + this.scope.getFps(), 50, 50)

            const now = frame;
            const elapsed = now - before;
            let activeCycle;
            let targetResetInterval;

            if (elapsed > fpsInterval) {
                before = now - (elapsed % fpsInterval);

                // tslint:disable-next-line:forin
                for (const calc in cycles) {
                    ++cycles[calc].frameCount;
                    cycles[calc].sinceStart = now - cycles[calc].startTime;
                }

                activeCycle = cycles[resetState];
                this.fps = Math.round(1000 / (activeCycle.sinceStart / activeCycle.frameCount) * 100) / 100;

                targetResetInterval = (cycles.new.frameCount === cycles.old.frameCount
                    ? resetInterval * fps
                    : (resetInterval * 2) * fps);


                if (activeCycle.frameCount > targetResetInterval) {
                    cycles[resetState].frameCount = 0;
                    cycles[resetState].startTime = now;
                    cycles[resetState].sinceStart = 0;

                    resetState = (resetState === 'new' ? 'old' : 'new');
                }

                this.scope.setCurrentFrameNumber(this.currentFrame);
                this.scope.update();
                this.scope.render();

                if (this.currentFrame % fps === 0) {
                    this.currentFrame = 1;
                } else {
                    this.currentFrame++;
                }
            }
        };

        // @ts-ignore
        this.main();

        return this;
    }
}
