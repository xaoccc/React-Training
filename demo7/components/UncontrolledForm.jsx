export default function UncontrolledForm() {

    function submitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target)
        // using the names of the inputs we can get the data
        console.log(formData.get('username'))
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Uncontrolled Form</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" />
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
        </>

    )
}

