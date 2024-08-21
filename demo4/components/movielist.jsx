
import Movie from "./movie"

export default function MovieList(props) {
    
    return (
        <section>
            <h2>{props.headingText}</h2>
            <ul className="movies-list">
                <Movie data={props.movies[0]} />
                <Movie data={props.movies[1]} />
                <Movie data={props.movies[2]} />
                <Movie data={props.movies[3]} />
                <Movie data={props.movies[4]} />
                <Movie data={props.movies[5]} />
                <Movie data={props.movies[6]} />
                <Movie data={props.movies[7]} />
                <Movie data={props.movies[8]} />
                <Movie data={props.movies[9]} />
                <Movie data={props.movies[10]} />
            </ul>
        </section>
    )
}