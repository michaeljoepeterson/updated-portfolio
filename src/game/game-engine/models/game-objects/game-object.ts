import { Circle } from "../shapes/game-shapes/circle";
import { CustomShape } from "../shapes/game-shapes/custom-shape";
import { Rectanlge } from "../shapes/game-shapes/rectangle";
import { ShapType } from "../shapes/shape-types";
import { Shape } from "../shapes/shape";
import { defaultOptions, IGameObjectOptions } from "./options/game-object-options.interface";
import { IShapeOptions } from "./options/shape-options.interface";

/**
 * base game object
 * this renders a shape and rerenders that shape each render cycle
 */
export class GameObject{
    name: string;
    /**
     * the shape associated with the game object
     */
    shape: Shape;
    private _canvasContext: CanvasRenderingContext2D;
    get canvasContext(): CanvasRenderingContext2D{
        return this._canvasContext
    }
    set canvasContext(value: CanvasRenderingContext2D){
        this._canvasContext = value;
    }
    
    constructor(name: string, shapeType: ShapType, options: IGameObjectOptions = defaultOptions){
        this.name = name;
        this.shape = this.getShape(shapeType, options.shape);
    }

    init(canvasContext: CanvasRenderingContext2D){
        this.canvasContext = canvasContext;
    }

    getShape(shapeType: ShapType, shapeOptions: IShapeOptions): Shape{
        switch(shapeType){
            case ShapType.circle:
                return new Circle(shapeType, shapeOptions);
            case ShapType.rectangle:
                return new Rectanlge(shapeType, shapeOptions);
            case ShapType.custom:
                return new CustomShape(shapeType, shapeOptions);
        }
    }

    /**
     * public method for game engine to use when rendering game object
     */
    render(){
        this.shape.moveShape(this.canvasContext);
    }
}
