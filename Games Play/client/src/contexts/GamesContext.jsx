import { createContext, useEffect, useState } from 'react';
import gameService from './services/gameService';

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result));
    }, []);

    return (
        <GamesContext.Provider value={{ games }}>
            {children}
        </GamesContext.Provider>
    );
};