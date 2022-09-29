import { ShapType } from "../shape-types";
import { Shape } from "../shape";
import { IShapeOptions } from "../../game-objects/options/shape-options.interface";

export interface ICircleOptions{
    radius?: number;
}

export class Circle extends Shape{
    constructor(shapeType: ShapType, options: IShapeOptions){
        super(shapeType, options);
    }

    drawShape(canvasContext: CanvasRenderingContext2D): void {
        const [x, y] = this.vector.position;
        canvasContext.beginPath();
        canvasContext.arc(x, y, this.options.radius, 0, 2 * Math.PI);
        canvasContext.fillStyle = this.options.fillColor;
        canvasContext.fill();
        canvasContext.stroke();
        canvasContext.closePath();
    }
}