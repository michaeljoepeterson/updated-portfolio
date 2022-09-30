import { GameObject } from "./models/game-objects/game-object";

export class GameEngine{
    private canvasRef?: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;
    private gameObjects: GameObject[];

    constructor(canvasId: string, gameObjects: GameObject[] = []){
        try{
            this.canvasRef = document.getElementById(canvasId) as HTMLCanvasElement;
            this.canvasContext = this.canvasRef.getContext('2d');
            this.gameObjects = [...gameObjects];
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

    private initGameObjects(){
        for(let gameObject of this.gameObjects){
            gameObject.init(this.canvasContext);
        }
    }

    //@ts-ignore
    private render(){
        for(let gameObject of this.gameObjects){
            try{
                gameObject.render();
            }
            catch(e){
                console.warn(`Error rendering gameObject ${gameObject.name}`, gameObject);
                console.error(e);
            }
        }
    }
};