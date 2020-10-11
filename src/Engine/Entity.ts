export interface Entity {
    update(): void;
    render(): void;
    setContext(context: CanvasRenderingContext2D): void;
    setCurrentFrameNumber(currentFrameNumber: number): void;
}
