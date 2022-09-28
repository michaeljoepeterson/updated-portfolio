import { ShapType } from "../shape-types";
import { Shape } from "../shape";
import { IShapeOptions } from "../../game-objects/options/shape-options.interface";

export class Circle extends Shape{
    constructor(shapeType: ShapType, options: IShapeOptions){
        super(shapeType, options);
    }

    drawShape(canvasContext: CanvasRenderingContext2D): void {
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, 50, 0, 2 * Math.PI);
        canvasContext.stroke();
    }
}