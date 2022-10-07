import { ITriggerOptions, TriggerAction } from "../../game-engine/input-manager/models/trigger-options";
import { GameObject } from "../../game-engine/models/game-objects/game-object";
import { ball } from "./game-objects/ball";
import { playerPaddle } from "./game-objects/player-paddle";

export const pongGameObjects: GameObject[] = [
    ball,
    playerPaddle
];

export const pongTriggers: ITriggerOptions[] = [
    {
        name: 'player_paddle',
        target: pongGameObjects[1],
        action: TriggerAction.move
    }
];