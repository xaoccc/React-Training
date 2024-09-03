import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SubmitHandlerContext } from './contexts/submitHandlerContext';
import { GamesViewContext } from './contexts/gamesViewContxt';
import * as authService from '../src/services/authService';
import * as gameService from '../src/services/gameService';
import { path } from './paths';

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';
import Logout from './components/logout/logout';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        // Clear the access token from the localStorage on logout
        localStorage.removeItem('accessToken');
        return {};
    });

    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result));
    }, []);


    async function loginSubmitHandler(values) {
        const result = await authService.login(values);
        setAuth(result);
        navigate(path.games);
        localStorage.setItem('accessToken', result.accessToken);
    }

    async function registerSubmitHandler(values) {
        const result = await authService.register(values);
        if (result) {
            setAuth(result);
            navigate(path.games);            
        }        
    }

    function logoutHandler() {
        setAuth({});
        navigate(path.home); 
        localStorage.removeItem('accessToken');
    } 

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        // !!auth.username is the same as (auth.username) ? true : false
        isAuthenticated: !!auth.email
    }

    return (
        <SubmitHandlerContext.Provider value={values}>
            <GamesViewContext.Provider value={games}>
            <div id="box">
                <Header />

                <Routes>
                    <Route path={path.home} element={<Home />} />
                    <Route path={path.games} element={<GameList />} />
                    <Route path={path.create} element={<GameCreate />} />
                    <Route path={path.login} element={<Login />} />
                    <Route path={path.register} element={<Register />} />
                    <Route path={path.details} element={<GameDetails /> } />
                    <Route path={path.logout} element={<Logout /> } />
                </Routes>
            </div>
            </GamesViewContext.Provider>
        </SubmitHandlerContext.Provider>
    )
}

export default App
