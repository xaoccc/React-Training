import MovieList from "./movielist"
import moviesdata from "./moviesdata"

export default function Main() {
    return (
        <main>
            <MovieList movies={moviesdata} headingText="Movie List"  />
        </main>
    )
}