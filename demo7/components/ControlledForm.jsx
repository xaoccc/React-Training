import { useState } from "react";

export default function ControlledForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    function submitHandler(e) {
        console.log(username, password, age);
    }
    function resetHandler(e) {
        setUsername('');
        setPassword('');
        setAge('');
    }

    function userNameChangeHandler(e) {
        setUsername(e.target.value);
    }

    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }

    function ageChangeHandler(e) {
        // We can convert the type of the value, so it is like this in the state (for validation)
        setAge(Number(e.target.value));
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Controlled Form</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={userNameChangeHandler} onBlur={() => console.log(username)} value={username} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={passwordChangeHandler} onBlur={() => console.log(password)} value={password} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" onChange={ageChangeHandler} onBlur={() => (age > 18) ? console.log(age) : null} value={age} />
                </div>
                <div>
                    <button type="button" onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetHandler}>Reset</button>
                </div>
            </form>
        </>

    )
}