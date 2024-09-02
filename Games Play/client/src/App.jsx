import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { SubmitHandlerContext } from './contexts/submitHandlerContext';
import * as authService from '../src/services/authService'
import { path } from './paths';

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    async function loginSubmitHandler(values) {
        const result = await authService.login(values);
        setAuth(result);
        navigate(path.games);
    }

    async function registerSubmitHandler(values) {
        const result = await authService.register(values);
        if (result) {
            setAuth(result);
            navigate(path.games);
        }
        
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        username: auth.username,
        email: auth.email,
        // !!auth.username is the same as (auth.username) ? true : false
        isAuthenticated: !!auth.username
    }

    return (
        <SubmitHandlerContext.Provider value={values}>
            <div id="box">
                <Header />

                <Routes>
                    <Route path={path.home} element={<Home />} />
                    <Route path={path.games} element={<GameList />} />
                    <Route path={path.create} element={<GameCreate />} />
                    <Route path={path.login} element={<Login />} />
                    <Route path={path.register} element={<Register />} />
                    <Route path={path.details} element={<GameDetails /> } />
                </Routes>
            </div>
        </SubmitHandlerContext.Provider>
    )
}

export default App
