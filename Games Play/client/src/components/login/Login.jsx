import useForm from "../../hooks/useForm";
import { SubmitHandlerContext } from "../../contexts/submitHandlerContext";
import { useContext } from "react";

export default function Login() {
    

    // Destructuring assignment of the results from using our custom hook useForm
    // values is an object with keys - the names of the inputs and values - the values of the inputs
    // But the custom hook must have initial entry parameters for values: {email: '', password: ''}
    const loginFormKeys = {
        email: 'email',
        password: 'password'
    }
    const { loginSubmitHandler }  = useContext(SubmitHandlerContext);
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {[loginFormKeys.email]: '', [loginFormKeys.password]: ''});
    

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    
                    <input type="email" id="email" placeholder="Sokka@gmail.com" name={loginFormKeys.email} value={values[loginFormKeys.email]}  onChange={onChange}  />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name={loginFormKeys.password} value={values[loginFormKeys.password]} onChange={onChange} />
                    <input type="submit" className="btn submit" value="Login"  />
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
