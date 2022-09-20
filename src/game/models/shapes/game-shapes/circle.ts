import { ShapType } from "../shape-types";
import { Shape } from "../shape";

export class Circle extends Shape{
    constructor(shapeType: ShapType){
        super(shapeType);
    }

    drawShape(canvasContext: CanvasRenderingContext2D): void {
        console.log('draw circle', canvasContext);
    }
}