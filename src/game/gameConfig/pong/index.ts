import { GameObject } from "../../models/game-objects/game-object";
import { ball } from "./game-objects/ball";
import { Paddle } from "./game-objects/paddle";

export const pongGameObjects: GameObject[] = [
    ball,
    new Paddle('Player Paddle'),
    new Paddle('AI Paddle')
];
