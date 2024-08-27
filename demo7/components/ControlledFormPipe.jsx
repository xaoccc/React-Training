import { useState } from "react";

export default function ControlledFormPipe() {

    const initialState = {
        username: '',
        password: '',
        age: '',
        gender: '', 
        hobbies: {
            swimming: false,
            eating: false,
            drinking: false
        }  
    }

    const [formValue, setFormValue] = useState(initialState);

    function submitHandler() {
        console.log(formValue);
    }

    function valueChangeHandler(e) {
        const val = e.target.value;
        setFormValue(state => ({
            ...state,
            // If the value is numeric, convert it to number, else use the value as it is
            [e.target.name]: (+val == val) ? +val : val           

        }));
    }   
    function checkBoxChangeHandler(e) {
        const val = e.target.checked;
        setFormValue(state => ({
            ...state,
            hobbies: {
                ...state.hobbies,
                [e.target.name]: val  
            } 
        }));
    }   

    function resetHandler() {
        setFormValue(initialState);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Controlled Form</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id="username" onChange={valueChangeHandler}  value={formValue.username} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={valueChangeHandler} value={formValue.password} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" onChange={valueChangeHandler} value={formValue.age} />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select  name="gender" id="gender" onChange={valueChangeHandler}  value={formValue.gender}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" onChange={checkBoxChangeHandler} checked={formValue.hobbies.swimming} />
                    <label htmlFor="eating">Eating</label>
                    <input type="checkbox" name="eating" id="eating" onChange={checkBoxChangeHandler} checked={formValue.hobbies.eating} />
                    <label htmlFor="drinking">Drinking</label>
                    <input type="checkbox" name="drinking" id="drinking" onChange={checkBoxChangeHandler} checked={formValue.hobbies.drinking} />

                </div>
                <div>
                    <button type="button" onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetHandler}>Reset</button>
                </div>
            </form>
        </>

    )
}