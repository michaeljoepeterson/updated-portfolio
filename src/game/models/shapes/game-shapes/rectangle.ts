import { ShapType } from "../shape-types";
import { Shape } from "../shape";

export class Rectanlge extends Shape{

    constructor(shapeType: ShapType){
        super(shapeType);
    }

    drawShape(canvasContext: CanvasRenderingContext2D): void {
        console.log('draw rect', canvasContext);
    }    
}