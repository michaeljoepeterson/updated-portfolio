import { MovementHelper } from "../physics/movement-helper";
import { ShapType } from "./shape-types";

/**
 * class to handle drawing shapes and handling data for shapes
 */
export abstract class Shape{
    type: ShapType;
    x: number;
    y: number;
    private movement: MovementHelper = new MovementHelper();

    constructor(type: ShapType, x: number = 0, y: number = 0){
        this.type = type;
        this.x = x;
        this.y = y;
    }

    moveShape(){

    }

    abstract drawShape(canvasContext: CanvasRenderingContext2D): void;
}
