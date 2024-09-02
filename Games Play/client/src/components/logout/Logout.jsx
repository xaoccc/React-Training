import { useContext, useEffect } from "react";
import * as authService from '../../services/authService'
import { SubmitHandlerContext } from "../../contexts/submitHandlerContext";

 export default function Logout() {

    const { logoutHandler } = useContext(SubmitHandlerContext);

    useEffect(() => {
        authService.logout()
        .then(() => logoutHandler())
        .catch((error) => console.log(error))
    }, [])
    return null;
 }