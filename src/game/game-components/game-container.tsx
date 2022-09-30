import { useEffect, useState } from "react";
import { GameEngine } from "../game-engine/game-engine";
import { pongGameObjects } from "../gameConfig/pong";

export const GameContainer = ({
    gameId,
    topOffset = 10
}: {
    gameId: string;
    topOffset?: number;
}) => {
    const widthOffset = 35;
    const heightOffset = 55;
    const [game, setGame] = useState<GameEngine>();
    const [width, setWidth] = useState<number>(window.innerWidth - widthOffset);
    const [height, setHeight] = useState<number>(window.innerHeight - heightOffset);

    const createGame = () => {
        setGame(new GameEngine(gameId, pongGameObjects));
    }

    const updateCanvasSize = (event: any) => {
        try{
            const {innerWidth, innerHeight} = event.target;
            console.log(event);
            console.log(event.target.innerWidth, event.target.innerHeight);
            setWidth(innerWidth - widthOffset);
            setHeight(innerHeight - heightOffset);
        }
        catch(e){
            console.warn(e);
        }
    }

    useEffect(() => {
        if(!game){
            createGame();
        }

        window.addEventListener('resize', updateCanvasSize);

        return () => window.removeEventListener('resize', updateCanvasSize);
    }, []);

    return (
        <div 
            className="flex w-full justify-center"
            style={{
                position: "fixed",
                top: `${topOffset}px`
            }}
        >
            <canvas
                className="border-2 border-zinc-800"
                width={`${width}`}
                height={`${height}`}
                id={gameId}
            />
        </div>
    );
}

export default GameContainer;