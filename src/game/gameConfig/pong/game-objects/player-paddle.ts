import { GameObject } from "../../../game-engine/models/game-objects/game-object";
import { ShapeOptions } from "../../../game-engine/models/game-objects/options/shape-options.interface";
import { ShapType } from "../../../game-engine/models/shapes/shape-types";

//todo make custom games possible
export const playerPaddle = new GameObject("playerPaddle", ShapType.rectangle, {
    shape: new ShapeOptions({
        xVelocity: 0,
        yVelocity: 0,
        width: 20,
        height: 100,
        fillColor: 'green'
    })
});