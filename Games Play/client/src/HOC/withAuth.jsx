import { useContext } from "react";
import { SubmitHandlerContext } from "../contexts/submitHandlerContext";


export default function withAuth(Component) {

    function EnhancedComponent(props) {
        const auth = useContext(SubmitHandlerContext);

        return (<Component {...props} {...auth} />);
    }
    
    return EnhancedComponent;
}