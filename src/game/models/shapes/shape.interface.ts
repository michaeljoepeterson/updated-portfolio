import { ShapType } from "./shape-types";

/**
 * class to handle drawing shapes and handling data for shapes
 */
export abstract class Shape{
    type: ShapType;

    constructor(type: ShapType){
        this.type = type; 
    }

    abstract drawShape(canvasContext: CanvasRenderingContext2D, x: number, y: number): void;
}
