import { useState, useEffect } from 'react';

export function useForm(initialValues, onSubmitHandler, hideModal) {
    const [formValues, setFormValues] = useState(initialValues)

    function onChangeHandler(e) {
        setFormValues(state => ({...state, [e.target.name]: e.target.value }))
    };

    function createToDo(e) {
        e.preventDefault();
        onSubmitHandler(formValues);
        hideModal();
    }

    return {formValues, onChangeHandler, createToDo}
}