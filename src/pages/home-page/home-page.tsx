import GameContainer from "../../game/game-components/game-container";

export const HomePage = () => {
    return (
        <div>
            <div>
                Home page
            </div>
            <GameContainer gameId="game"/>
            <div style={{
                height: "900px"
            }}>
                more stuff
            </div>
        </div>
    )
}

export default HomePage;