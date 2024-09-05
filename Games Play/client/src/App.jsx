import { Routes, Route } from 'react-router-dom';
import { SubmitHandlerContext } from './contexts/submitHandlerContext';
import * as authService from '../src/services/authService';
import { path } from './paths';


import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import GameEdit from './components/game-edit/GameEdit';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';
import Logout from './components/logout/logout';
import { useNavigate } from 'react-router-dom';
import usePersistedState from './hooks/usePersistedState';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

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
        localStorage.removeItem('auth');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        id: auth._id,
        // !!auth.username is the same as (auth.username) ? true : false
        isAuthenticated: !!auth.email
    }

    return (
        <SubmitHandlerContext.Provider value={values}>

            <div id="box">
                <Header />
                <Routes>
                    <Route path={path.home} element={<Home />} />
                    <Route path={path.games} element={<GameList />} />
                    <Route path={path.create} element={<GameCreate />} />
                    <Route path={path.edit} element={<GameEdit />} />
                    <Route path={path.login} element={<Login />} />
                    <Route path={path.register} element={<Register />} />
                    <Route path={path.details} element={<GameDetails />} />
                    <Route path={path.logout} element={<Logout />} />
                </Routes>
            </div>

        </SubmitHandlerContext.Provider>
    )
}

export default App
