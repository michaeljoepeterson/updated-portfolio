import { InputManager } from "./input-manager/input-manager";
import { ITriggerOptions } from "./input-manager/models/trigger-options";
import { GameObject } from "./models/game-objects/game-object";

export class GameEngine{
    private canvasRef?: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;
    private gameObjects: GameObject[];
    private input: InputManager;

    constructor(
        canvasId: string, 
        gameObjects: GameObject[] = [], 
        triggerOptions: ITriggerOptions[] = []
    ){
        try{
            this.canvasRef = document.getElementById(canvasId) as HTMLCanvasElement;
            this.input = new InputManager(this.canvasRef);
            this.canvasContext = this.canvasRef.getContext('2d');
            this.gameObjects = [...gameObjects];
            this.registerTriggers(triggerOptions);
            this.startGame();
        }
        catch(e){
            console.error(e);
        }
    }

    startGame(){
        this.initGameObjects();

        setInterval(() => {
            this.canvasContext.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height)
            this.render();
        }, 1000 / 45);
    }

    private registerTriggers(options: ITriggerOptions[]){
        options.forEach(option => this.input.registerTrigger(option));
    }

    private initGameObjects(){
        for(let gameObject of this.gameObjects){
            gameObject.init(this.canvasContext);
        }
    }

    //@ts-ignore
    private render(){
        for(let gameObject of this.gameObjects){
            try{
                this.input.runTriggers();
                gameObject.render();
            }
            catch(e){
                console.warn(`Error rendering gameObject ${gameObject.name}`, gameObject);
                console.error(e);
            }
        }
    }
};