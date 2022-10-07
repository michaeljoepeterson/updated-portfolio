import { VectorPosition } from "../models/physics/vector";
import { Trigger } from "./models/trigger";
import { ITriggerOptions, TriggerAction } from "./models/trigger-options";

/**
 * manager for handling player inputs
 */
export class InputManager{
    private canvas: HTMLCanvasElement;
    private triggers: Trigger[] = [];
    private mousePosition: VectorPosition;

    constructor(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        try{
            this.init();
        }
        catch(e){
            throw e;
        }
    }

    init(){
        this.addMouseListener();
    }

    addMouseListener(){
        this.canvas.addEventListener("mousemove", (event) => {
            console.log('mouse move', event);
            //@ts-ignore
            const bounds = event.target.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;
            this.mousePosition = [x, y];
            console.log(x, y);
        });
    }

    registerTrigger(triggerOptions: ITriggerOptions){
        try{
            this.triggers.push(new Trigger(triggerOptions));
        }
        catch(e){
            console.warn(e);
        }
    }

    removeTrigger(name: string){
        this.triggers = this.triggers.filter(trigger => trigger.name !== name);
    }

    /**
     * called every render to run registered triggers
     */
    runTriggers(){
        this.triggers.forEach(trigger => this.run(trigger));
    }

    run(trigger: Trigger){
        const {action} = trigger;
        switch(action){
            case TriggerAction.move:
                trigger.move(this.mousePosition[0], this.mousePosition[1]);
                break;
            default:
                console.warn("Please provide a trigger action")
                break;
        }
    }
}
