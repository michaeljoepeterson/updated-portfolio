import { ShapType } from "../shape-types";
import { Shape } from "../shape";
import { IShapeOptions } from "../../game-objects/options/shape-options.interface";

export class CustomShape extends Shape{
    constructor(shapeType: ShapType, options: IShapeOptions){
        super(shapeType, options);
    }

    drawShape(canvasContext: CanvasRenderingContext2D): void {
        console.log('draw circle', canvasContext);
    }
}