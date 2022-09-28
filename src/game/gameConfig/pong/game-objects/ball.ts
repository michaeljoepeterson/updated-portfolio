import { GameObject } from "../../../models/game-objects/game-object";
import { ShapeOptions } from "../../../models/game-objects/options/shape-options.interface";
import { ShapType } from "../../../models/shapes/shape-types";

export const ball = new GameObject('pong-ball', ShapType.circle, {
    shape: new ShapeOptions({
        xVelocity: 5,
        yVelocity: 5
    })
});