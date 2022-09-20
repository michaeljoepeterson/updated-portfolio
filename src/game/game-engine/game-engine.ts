import { GameObject } from "../models/game-objects/game-object";

export class GameEngine{
    private canvasRef?: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;
    private gameObjects: GameObject[];

    constructor(canvasId: string, gameObjects: GameObject[] = []){
        try{
            this.canvasRef = document.getElementById(canvasId) as HTMLCanvasElement;
            this.canvasContext = this.canvasRef.getContext('2d');
            this.gameObjects = [...gameObjects];
            console.log(this.canvasRef);
            this.startGame();
        }
        catch(e){
            console.error(e);
        }
    }

    startGame(){
        this.initGameObjects();
        let test1 = 0;
        let test2 = 0;

        setInterval(() => {
            this.canvasContext.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height)
            this.render(test1, test2);
            test1 += 5;
            test2 += 5;
        }, 40);
    }

    private initGameObjects(){
        for(let gameObject of this.gameObjects){
            gameObject.init();
        }
    }

    //@ts-ignore
    private render(x, y){
        for(let gameObject of this.gameObjects){
            try{
                gameObject.renderObject();
            }
            catch(e){
                console.warn(`Error rendering gameObject ${gameObject.name}`, gameObject);
                console.error(e);
            }
        }
        this.canvasContext.beginPath();
        this.canvasContext.rect(x, y, 50, 50);
        this.canvasContext.fillStyle = "#FF0000";
        this.canvasContext.fill();
        this.canvasContext.closePath();
    }
};