import { Circle } from "../shapes/game-shapes/circle";
import { CustomShape } from "../shapes/game-shapes/custom-shapre";
import { Rectanlge } from "../shapes/game-shapes/rectangle";
import { ShapType } from "../shapes/shape-types";
import { Shape } from "../shapes/shape";

export abstract class GameObject{
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
    
    constructor(name: string, shapeType?: ShapType){
        this.name = name;
        this.shape = this.getShape(shapeType);
    }

    init(canvasContext: CanvasRenderingContext2D){
        console.log('init object', this.name);
        this.canvasContext = canvasContext;
    }

    getShape(shapeType: ShapType): Shape{
        switch(shapeType){
            case ShapType.circle:
                return new Circle(shapeType);
            case ShapType.rectangle:
                return new Rectanlge(shapeType);
            case ShapType.custom:
                return new CustomShape(shapeType);
        }
    }

    /**
     * public method for game engine to use when rendering game object
     */
    renderObject(){
        this.render();
    }

    /**
     * method to be implemented by inheriting object
     */
    protected abstract render(): void;
}
