import { GameObject } from "../../../models/game-objects/game-object";
import { ShapType } from "../../../models/shapes/shape-types";

class Ball extends GameObject{

    constructor(name: string){
        super(name, ShapType.circle);
    }

    protected render() {
        console.log('I am a ball');
    }
}

export const ball = new Ball('pong-ball');