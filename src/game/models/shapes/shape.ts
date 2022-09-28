import { IShapeOptions } from "../game-objects/options/shape-options.interface";
import { Vector } from "../physics/vector";
import { ShapType } from "./shape-types";

/**
 * class to handle drawing shapes and handling data for shapes
 */
export abstract class Shape{
    type: ShapType;
    protected vector: Vector;

    constructor(type: ShapType, options: IShapeOptions){
        this.type = type;
        this.vector = new Vector(options.x, options.y)
        this.vector.setDirection(options.xDirection, options.yDirection);
        this.vector.setVelocity(options.xVelocity, options.yVelocity);
    }
    //todo implement updates for vector
    moveShape(canvasContext: CanvasRenderingContext2D){
        try{
            this.vector.updatePosition();
            this.drawShape(canvasContext);
        }
        catch(e){
            console.warn(e);
        }
    }

    /**
     * method to draw the specific type of shape on the canvas
     * @param canvasContext
     */
    abstract drawShape(canvasContext: CanvasRenderingContext2D): void;
}
