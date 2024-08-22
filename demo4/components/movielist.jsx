
import Movie from "./movie"
import moviesdata from "./moviesdata"
export default function MovieList(props) {
    
    return (
        <section>
            <h2>{props.headingText}</h2>
            <ul className="movies-list">
                { moviesdata.map((el, i) => <Movie key={i} data={props.movies[i]} />) }
            </ul>
        </section>
    )
}