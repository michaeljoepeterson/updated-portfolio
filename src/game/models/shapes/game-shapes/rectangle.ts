import { ShapType } from "../shape-types";
import { Shape } from "../shape";
import { IShapeOptions } from "../../game-objects/options/shape-options.interface";

export class Rectanlge extends Shape{

    constructor(shapeType: ShapType, options: IShapeOptions){
        super(shapeType, options);
    }

    drawShape(canvasContext: CanvasRenderingContext2D): void {
        //console.log('draw rect', canvasContext);
        canvasContext.beginPath();
        canvasContext.rect(this.x, this.y, 50, 50);
        canvasContext.fillStyle = "#FF0000";
        canvasContext.fill();
        canvasContext.closePath();
    }    
}