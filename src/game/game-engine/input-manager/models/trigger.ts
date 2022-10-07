import { GameObject } from "../../models/game-objects/game-object";
import { ITriggerOptions, TriggerAction } from "./trigger-options";

/**
 * base simple trigger to respond to inputs
 */
export class Trigger implements ITriggerOptions{
    name: string;
    target: GameObject;
    action: TriggerAction;

    constructor(options: ITriggerOptions){
        const {name, target, action} = options;
        this.name = name ? name : this.randomName();
        this.target = target;
        this.action = action;
    }

    randomName(): string{
        let name = '';
        const numChars = 10;
        for(let i = 0; i < numChars; i++){
            const char = String.fromCharCode(65+Math.floor(Math.random() * 26));
            name += char;
        }
        const dateNum = new Date().valueOf();
        name += String(dateNum);
        return name;
    }

    /**
     * run the trigger on frame update
     */
    run(){
        switch(this.action){
            case TriggerAction.move:
                
                break;
            default:
                console.warn("Please provide a trigger action")
                break;
        }
    }

    move(x: number, y: number){
        this.target.changePosition(x, y);
    }
}