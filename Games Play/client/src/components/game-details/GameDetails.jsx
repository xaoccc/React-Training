import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import  useForm  from "../../hooks/useForm";

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import { path } from '../../paths';
import { useContext } from "react";
import { SubmitHandlerContext } from "../../contexts/submitHandlerContext";

export default function GameDetails() {
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    const navigate = useNavigate();

    const userData = useContext(SubmitHandlerContext);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame);

        commentService.getAll(gameId)
            .then(setComments);
    }, [gameId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            gameId,
            userData.username,
            values.comment
        );

        setComments(state => [...state, newComment]);
    }

    const deleteGameHandler = async () => {
        await gameService.deleteGame(gameId);
        navigate(path.home);
    }

    const initialValues = useMemo(() => ({ comment: '' }), []);

    const { values, onChange, onSubmit } = useForm(addCommentHandler, initialValues);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, username, text }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {(game._ownerId === userData.id) &&    
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <a href="#" className="button" onClick={deleteGameHandler} >Delete</a>
                </div>
                }
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}
