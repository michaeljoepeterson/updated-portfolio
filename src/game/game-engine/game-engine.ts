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
        let test1 = 0;
        let test2 = 0;

        setInterval(() => {
            this.canvasContext.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height)
            this.render(test1, test2);
            test1 += 5;
            test2 += 5;
        }, 40);
    }
    //@ts-ignore
    private render(x, y){
        this.canvasContext.beginPath();
        this.canvasContext.rect(x, y, 50, 50);
        this.canvasContext.fillStyle = "#FF0000";
        this.canvasContext.fill();
        this.canvasContext.closePath();
    }
};