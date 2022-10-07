import { GameObject } from "../../models/game-objects/game-object";

export enum TriggerAction{
    move = "move"
}

export interface ITriggerOptions{
    /**
     * name used to track the trigger
     * optionally user can name the trigger
     */
    name?: string;
    target: GameObject;
    action: TriggerAction;
};
