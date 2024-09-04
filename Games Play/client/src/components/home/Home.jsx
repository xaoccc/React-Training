import { useContext } from "react";
import { GamesViewContext } from "../../contexts/gamesViewContxt";
import GameListItemHome from "../game-list/game-list-item/GameListItemHome";
import withAuth from "../../HOC/withAuth";

function Home() {

    const games = useContext(GamesViewContext);    

    return (
        
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">

                { (games) ?<>
                <h1>Latest Games</h1>

                {games.map(game => (
                    <GameListItemHome key={game._id} {...game} />
                ))}
                </> : null }

                {(!games) ? <p className="no-articles">No games yet</p> : null }
            </div>
        </section>
    );
}

// Using the HOC:
export default withAuth(Home);
