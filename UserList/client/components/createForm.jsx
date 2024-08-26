import { useState, useEffect } from "react";

export default function CreateForm({hideUserForm, userData}) {

    const [input, setInput] = useState({
        firstName: (userData) ? userData.firstName : '',
        lastName: (userData) ? userData.lastName : '',
        email: (userData) ? userData.email : '',
        phoneNumber: (userData) ? userData.phoneNumber : '',
        imageUrl: (userData) ? userData.imageUrl : '',
        city: (userData) ? userData.address.city : '',
        country: (userData) ? userData.address.country : '',
        street: (userData) ? userData.address.street : '',
        streetNumber: (userData) ? userData.address.streetNumber : '',
    });

    const [submit, setSubmit] = useState(false);

    function submitForm(e) {
        // e.preventDefault();
        setSubmit(true);
    }

    useEffect(() => {

        const data = Object.fromEntries(new FormData(document.querySelector('.user-container form')))
            const entryData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                imageUrl: data.imageUrl,                    
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                address: {
                    city: data.city,
                    country: data.country,
                    street: data.street,
                    streetNumber: data.streetNumber,
                }
            }
        // Check if there is user data and make a post or put request 
        if (submit && !userData) {               
            fetch('http://localhost:3030/jsonstore/users', {
                method: 'POST',
                body: JSON.stringify(entryData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                hideUserForm();                
            })
            .catch((error) => console.log(error))
        } else if (userData) {
            fetch(`http://localhost:3030/jsonstore/users/${userData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...entryData, _id: userData._id}),
            })
            // .then(() => {
            //     hideUserForm();                
            // })
            .catch((error) => console.log(error))
        }       

    }, [submit])   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };
    
    return (
        <div className="overlay">
            <div className="backdrop" onClick={hideUserForm}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Add/Edit User</h2>
                        <button className="btn close" onClick={hideUserForm}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={submitForm}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="firstName" name="firstName" type="text" value={input.firstName} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="lastName" name="lastName" type="text" value={input.lastName} onChange={handleInputChange} required />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="email" name="email" type="text" value={input.email} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber" name="phoneNumber" type="text" value={input.phoneNumber} onChange={handleInputChange} required />
                                </div>
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input id="imageUrl" name="imageUrl" type="text" value={input.imageUrl} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="country" name="country" type="text" value={input.country} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input id="city" name="city" type="text" value={input.city} onChange={handleInputChange} required />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="street" name="street" type="text" value={input.street} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input id="streetNumber" name="streetNumber" type="text" value={input.streetNumber} onChange={handleInputChange} required />
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit" >Save</button>
                            <button id="action-cancel" className="btn" type="button" onClick={hideUserForm}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}