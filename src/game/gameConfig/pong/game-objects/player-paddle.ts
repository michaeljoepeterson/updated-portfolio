import { GameObject } from "../../../models/game-objects/game-object";
import { ShapType } from "../../../models/shapes/shape-types";
//todo make custom games possible
export const playerPaddle = new GameObject("playerPaddle", ShapType.rectangle);