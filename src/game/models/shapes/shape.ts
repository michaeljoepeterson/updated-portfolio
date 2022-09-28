import { IShapeOptions } from "../game-objects/options/shape-options.interface";
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

    constructor(type: ShapType, options: IShapeOptions){
        this.type = type;
        this.x = options.x;
        this.y = options.y;
        this.movement.setDirection(options.xDirection, options.yDirection);
        this.movement.setVelocity(options.xVelocity, options.yVelocity);
    }
    //todo implement updates for movement
    moveShape(canvasContext: CanvasRenderingContext2D){
        try{
            const [x, y] = this.movement.updatePosition(this.x, this.y);
            this.x = x;
            this.y = y;
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
