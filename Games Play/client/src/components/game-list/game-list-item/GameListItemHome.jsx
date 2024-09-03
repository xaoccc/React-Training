export default function GameListItem({
    _id,
    title,
    category,
    imageUrl,
}) {
    return (

        <div className="game">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <a href={`/games/${_id}`} className="btn details-btn">Details</a>
            </div>
        </div>

    );
}