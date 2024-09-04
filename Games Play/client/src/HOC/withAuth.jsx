import { useContext } from "react";
import { SubmitHandlerContext } from "../contexts/submitHandlerContext";
import { GamesViewContext } from "../contexts/gamesViewContxt";


export default function withAuth(Component) {

    function EnhancedComponent(props) {
        // const auth = useContext(SubmitHandlerContext);
        const games = useContext(GamesViewContext);
        return (<Component {...props} {...games} />);
    }
    
    return EnhancedComponent;
}