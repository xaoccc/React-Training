import { useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { path } from '../../paths';

import * as gameService from '../../services/gameService';
import useForm from '../../hooks/useForm';

export default function GameEdit() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame);
    }, [gameId]);
    


    const editGameSubmitHandler = async (values, id) => {
        id = values._id;
        try {
            await gameService.edit(id, values);
            navigate(path.games);
        } catch (err) {
            console.log(err);
        }
    }
    const {values, onChange, onSubmit} = useForm(editGameSubmitHandler, game);
    
    
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onChange}  />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={onChange}  />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value={values.maxLevel} onChange={onChange} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={onChange}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    );
}