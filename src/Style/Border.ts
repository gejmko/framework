import {Style} from "./Style";

export class Border implements Style {
    borderSize: number;
    borderColor: string;
    borderStyle: string;

    constructor(size: number, color: string, style: string) {
        this.borderSize = size;
        this.borderColor = color;
        this.borderStyle = style;
    }

    stylize(): string {
        return `${this.getSize()}px ${this.getStyle()} ${this.getColor()}`;
    }

    getSize(): number {
        return this.borderSize;
    }

    getStyle(): string {
        return this.borderStyle;
    }

    getColor(): string {
        return this.borderColor;
    }
}
