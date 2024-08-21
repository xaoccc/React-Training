export default function Movie(props) {
    return (
        <li>
            <article>
                <h2>{props.data.Title}</h2>
                <img className="movie-cover" src={props.data.Images[0]} />
                <p>Genre: {props.data.Genre}</p>
                <p>Year: {props.data.Year}</p>
                <button>More Info</button>
            </article>
        </li>
    )
}