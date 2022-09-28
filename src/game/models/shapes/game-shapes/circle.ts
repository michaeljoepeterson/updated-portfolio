import { ShapType } from "../shape-types";
import { Shape } from "../shape";
import { IShapeOptions } from "../../game-objects/options/shape-options.interface";

export class Circle extends Shape{
    constructor(shapeType: ShapType, options: IShapeOptions){
        super(shapeType, options);
    }

    drawShape(canvasContext: CanvasRenderingContext2D): void {
        console.log('draw circle', canvasContext);
        canvasContext.beginPath();
        canvasContext.arc(0, 0, 50, 0, 2 * Math.PI);
        canvasContext.stroke();
    }
}