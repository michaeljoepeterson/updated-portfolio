import { GameObject } from "../../../models/game-objects/game-object";
import { ShapType } from "../../../models/shapes/shape-types";

export class Paddle extends GameObject{

    constructor(name: string){
        super(name, ShapType.rectangle);
    }

    protected render(): void {
        console.log('I am a paddle!', this.name);
    }
}
