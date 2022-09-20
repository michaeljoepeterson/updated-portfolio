import { Circle } from "../shapes/game-shapes/circle";
import { CustomShape } from "../shapes/game-shapes/custom-shapre";
import { Rectanlge } from "../shapes/game-shapes/rectangle";
import { ShapType } from "../shapes/shape-types";
import { Shape } from "../shapes/shape.interface";

export abstract class GameObject{
    name: string;
    /**
     * the shape associated with the game object
     */
    shape: Shape;
    
    constructor(name: string, shapeType?: ShapType){
        this.name = name;
        this.shape = this.getShape(shapeType);
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

    init(){
        console.log('init object', this.name);
    }

    /**
     * method to be implemented by inheriting object
     */
    protected abstract render(): void;
}
