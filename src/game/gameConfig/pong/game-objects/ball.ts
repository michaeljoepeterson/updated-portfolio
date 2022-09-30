import { GameObject } from "../../../game-engine/models/game-objects/game-object";
import { ShapeOptions } from "../../../game-engine/models/game-objects/options/shape-options.interface";
import { ShapType } from "../../../game-engine/models/shapes/shape-types";


export const ball = new GameObject('pong-ball', ShapType.circle, {
    shape: new ShapeOptions({
        xVelocity: 2,
        yVelocity: 2,
        radius: 10,
        fillColor: 'red'
    })
});