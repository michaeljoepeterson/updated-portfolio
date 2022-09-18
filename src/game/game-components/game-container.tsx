import { useEffect, useState } from "react";
import { GameEngine } from "../game-engine/game-engine";

export const GameContainer = ({
    gameId,
    width = 1900,
    height = 875,
    topOffset = 10
}: {
    gameId: string;
    height?: number;
    width?: number;
    topOffset?: number;
}) => {
    const [game, setGame] = useState<GameEngine>();

    const createGame = () => {
        setGame(new GameEngine(gameId));
        //figure out 100% screen size canvas
    }

    useEffect(() => {
        if(!game){
            createGame();
        }
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