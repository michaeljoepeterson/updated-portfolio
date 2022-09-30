import { GameObject } from "../../game-engine/models/game-objects/game-object";
import { ball } from "./game-objects/ball";
import { playerPaddle } from "./game-objects/player-paddle";

export const pongGameObjects: GameObject[] = [
    ball,
    playerPaddle
];
