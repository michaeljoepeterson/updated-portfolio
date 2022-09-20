import { ShapType } from "../shape-types";
import { Shape } from "../shape.interface";

export class Rectanlge extends Shape{

    constructor(shapeType: ShapType){
        super(shapeType);
    }

    drawShape(canvasContext: CanvasRenderingContext2D, x: number, y: number): void {
        console.log('draw rect', canvasContext, x, y);
    }    
}