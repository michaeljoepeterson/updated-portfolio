import { ShapType } from "../shape-types";
import { Shape } from "../shape.interface";

export class CustomShape extends Shape{
    constructor(shapeType: ShapType){
        super(shapeType);
    }

    drawShape(canvasContext: CanvasRenderingContext2D, x: number, y: number): void {
        console.log('draw circle', canvasContext, x, y);
    }
}