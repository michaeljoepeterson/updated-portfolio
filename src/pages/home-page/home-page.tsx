import { config } from "../../config";
import GameContainer from "../../game/game-components/game-container";

export const HomePage = () => {
    const {navHeight} = config;

    return (
        <div>
            <div>
                Home page
            </div>
            <GameContainer 
                gameId="game"
                topOffset={navHeight}
            />
            <div style={{
                height: "2500px"
            }}>
                more stuff
            </div>
            <div>
                end stuff
            </div>
        </div>
    )
}

export default HomePage;