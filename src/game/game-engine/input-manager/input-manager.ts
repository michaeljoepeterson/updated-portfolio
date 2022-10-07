import { Trigger } from "./models/trigger";
import { ITriggerOptions } from "./models/trigger-options";

/**
 * manager for handling player inputs
 */
export class InputManager{
    private canvas: HTMLCanvasElement;
    private triggers: Trigger[] = [];

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
            var bounds = event.target.getBoundingClientRect();
            var x = event.clientX - bounds.left;
            var y = event.clientY - bounds.top;
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
        this.triggers.forEach(trigger => trigger.run());
    }
}
