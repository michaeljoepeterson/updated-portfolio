import { direction, MovementOptions } from "../../physics/movement-helper";

export type IShapeOptions = MovementOptions & {
    x?: number;
    y?: number;
    lineColor?: string;
    fillColor?: string;
}

export class ShapeOptions implements IShapeOptions{
    x?: number = 0;
    y?: number = 0;
    xDirection?: direction = 1;
    yDirection?: direction = 1;

    constructor(config?: IShapeOptions){
        if(config){
            Object.assign(this, config);
        }
    }
}
