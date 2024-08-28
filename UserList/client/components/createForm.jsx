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

    const [validInput, setValidInput] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        imageUrl: false,
        city: false,
        country: false,
        street: false,
        streetNumber: false,
    });

    const [submit, setSubmit] = useState(false);  
    const [firstNameError, setFirstNameError] = useState(false); 
    const [lastNameError, setLastNameError] = useState(false); 
    const [countryError, setCountryError] = useState(false); 
    const [cityError, setCityError] = useState(false); 
    const [streetError, setStreetError] = useState(false); 
    const [streetNumberError, setStreetNumberError] = useState(false); 
    const [phoneNumberError, setPhoneNumberError] = useState(false); 
    const [imageUrlError, setImageUrlError] = useState(false); 
    const [emailError, setEmailError] = useState(false); 

    function submitForm(e) {  
        e.preventDefault(); 
        if (!Object.values(validInput).some(value => value === false)) {     
            setSubmit(true);
        }      
    }

    function validateName(e, state) {
        const name = e.currentTarget.value;
        const pattern = /[0-9.*+?^${}()|[\]\\]/g
        if (name.match(pattern)) {
            state(true); 
            setValidInput({...validInput, [e.currentTarget.id]: false});    
        } else {
            state(false);
            setValidInput({...validInput, [e.currentTarget.id]: true});
        }         
    }

    function validateImgUrl(e) {
        const name = e.currentTarget.value;
        const pattern = /^(http)[s]{0,1}(:\/\/)[\w\d.\/\-._~:?#\[\]@!$&'()*+,;=]+$/g
        if (!name.match(pattern)) {
            setImageUrlError(true); 
            setValidInput({...validInput, [e.currentTarget.id]: false});    
        } else {
            setImageUrlError(false);
            setValidInput({...validInput, [e.currentTarget.id]: true});
        }         
    }

    function validateEmail(e) {
        const name = e.currentTarget.value;
        const pattern = /^[\w\d.\-_]+@[\w\d.\-_]+$/g
        if (!name.match(pattern)) {
            setEmailError(true); 
            setValidInput({...validInput, [e.currentTarget.id]: false});    
        } else {
            setEmailError(false);
            setValidInput({...validInput, [e.currentTarget.id]: true});
        }         
    }

    function validateNumber(e, state) {
        const number = e.currentTarget.value;
        if (+number == number) {
            state(false);
            setValidInput({...validInput, [e.currentTarget.id]: true});              
        } else {
            state(true); 
            setValidInput({...validInput, [e.currentTarget.id]: false}); 
        }         
    }

    function validateFirstName(e) {
        validateName(e, setFirstNameError)       
    }

    function validateLastName(e) {
        validateName(e, setLastNameError)       
    }

    function validateCountry(e) {
        validateName(e, setCountryError)       
    }

    function validateCity(e) {
        validateName(e, setCityError)       
    }

    function validateStreet(e) {
        validateName(e, setStreetError)       
    }

    function validateStreetNumber(e) {
        validateNumber(e, setStreetNumberError)
    }

    function validatePhoneNumber(e) {
        validateNumber(e, setPhoneNumberError)
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
        } else if (submit && userData) {

            fetch(`http://localhost:3030/jsonstore/users/${userData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...entryData, _id: userData._id}),
            })
            .then(() => {                
                hideUserForm();               
            })
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
                                    <input id="firstName" name="firstName" type="text" value={input.firstName} onBlur={validateFirstName} onChange={handleInputChange} required />                                    
                                </div>
                                {(firstNameError) ? <p className="error">First name is not valid</p> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="lastName" name="lastName" type="text" value={input.lastName} onBlur={validateLastName} onChange={handleInputChange} required />
                                </div>
                                {(lastNameError) ? <p className="error">Last name is not valid</p> : null}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="email" name="email" type="text" placeholder="john@gmail.com" value={input.email} onBlur={validateEmail} onChange={handleInputChange} required />
                                </div>
                                {(emailError) ? <p className="error">Email is not valid</p> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber" name="phoneNumber" type="text" value={input.phoneNumber} onBlur={validatePhoneNumber} onChange={handleInputChange} required />
                                </div>
                                {(phoneNumberError) ? <p className="error">Phone number must contain only digits!</p> : null}
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input id="imageUrl" name="imageUrl" type="text" value={input.imageUrl} onBlur={validateImgUrl} onChange={handleInputChange} required />
                            </div>
                            {(imageUrlError) ? <p className="error">The URL must start with 'http'</p> : null}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="country" name="country" type="text" value={input.country} onBlur={validateCountry} onChange={handleInputChange} required />
                                </div>
                                {(countryError) ? <p className="error">Country name is not valid</p> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input id="city" name="city" type="text" value={input.city} onBlur={validateCity} onChange={handleInputChange} required />
                                </div>
                                {(cityError) ? <p className="error">City name is not valid</p> : null}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="street" name="street" type="text" value={input.street} onBlur={validateStreet} onChange={handleInputChange} required />
                                </div>
                                {(streetError) ? <p className="error">Street name is not valid</p> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input id="streetNumber" name="streetNumber" type="text" value={input.streetNumber} onBlur={validateStreetNumber} onChange={handleInputChange} required />
                                </div>
                                {(streetNumberError) ? <p className="error">Street number is not valid</p> : null}
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