import { ShapType } from "../shape-types";
import { Shape } from "../shape";
import { IShapeOptions } from "../../game-objects/options/shape-options.interface";

export interface IRectangleOptions{
    width?: number;
    height?: number;
}

export class Rectanlge extends Shape{

    constructor(shapeType: ShapType, options: IShapeOptions){
        super(shapeType, options);
    }

    drawShape(canvasContext: CanvasRenderingContext2D): void {
        const [x, y] = this.vector.position;
        canvasContext.beginPath();
        canvasContext.rect(x, y, this.options.width, this.options.height);
        canvasContext.fillStyle = "#FF0000";
        canvasContext.fill();
        canvasContext.closePath();
    }    
}