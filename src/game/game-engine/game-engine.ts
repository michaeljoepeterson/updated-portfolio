export class GameEngine{
    private canvasRef?: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;

    constructor(canvasId: string){
        try{
            this.canvasRef = document.getElementById(canvasId) as HTMLCanvasElement;
            this.canvasContext = this.canvasRef.getContext('2d');
            console.log(this.canvasRef);
            this.startGame();
        }
        catch(e){
            console.error(e);
        }
    }

    startGame(){
        setInterval(() => {
            console.log('rendering');
            this.render();
        }, 100);
    }

    private render(){
        this.canvasContext.beginPath();
        this.canvasContext.rect(0, 0, 50, 50);
        this.canvasContext.fillStyle = "#FF0000";
        this.canvasContext.fill();
        this.canvasContext.closePath();
        console.log('render');
    }
};