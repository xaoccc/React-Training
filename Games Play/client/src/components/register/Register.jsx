import useForm from "../../hooks/useForm";
import { SubmitHandlerContext } from "../../contexts/submitHandlerContext";
import { useContext } from "react";
import { path } from "../../paths";


export default function Register() {
    const registerFormKeys = {
        email: 'email',
        password: 'password'
    }
    const { registerSubmitHandler }  = useContext(SubmitHandlerContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {[registerFormKeys.email]: '', [registerFormKeys.password]: ''});

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="maria@email.com" name={registerFormKeys.email} value={values[registerFormKeys.email]}  onChange={onChange} />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" id="register-password" name={registerFormKeys.password} value={values[registerFormKeys.password]} onChange={onChange} />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href={path.login}>here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
