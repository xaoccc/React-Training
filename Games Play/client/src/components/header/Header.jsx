import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import { SubmitHandlerContext } from './contexts/submitHandlerContext';
import { path } from '../../paths';
import { SubmitHandlerContext } from '../../contexts/submitHandlerContext';

export default function Header() {

    const {
        username,
        isAuthenticated
    } = useContext(SubmitHandlerContext);

    return (
        <header>
            <h1><Link className="home" to={path.home}>GamesPlay</Link></h1>
            <nav>                
                { isAuthenticated &&
                    <div id="user">
                        <span>Welcome, {username}!</span>
                        <Link to={path.games}>All games</Link>
                        <Link to={path.create}>Create Game</Link>
                        <Link to={path.logout}>Logout</Link>
                    </div>
                }
                
                { !isAuthenticated &&
                    <div id="guest">
                        <Link to={path.games}>All games</Link>
                        <Link to={path.login}>Login</Link>
                        <Link to={path.register}>Register</Link>
                    </div>
                }

            </nav>
        </header>
    );
}
