import { GameObject } from "../../../models/game-objects/game-object";
import { ShapeOptions } from "../../../models/game-objects/options/shape-options.interface";
import { ShapType } from "../../../models/shapes/shape-types";
//todo make custom games possible
export const playerPaddle = new GameObject("playerPaddle", ShapType.rectangle, {
    shape: new ShapeOptions({
        xVelocity: 1,
        yVelocity: 0
    })
});