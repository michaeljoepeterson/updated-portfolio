/**
 * manager for handling player inputs
 */
export class InputManager{
    private canvas: HTMLCanvasElement;

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
}
