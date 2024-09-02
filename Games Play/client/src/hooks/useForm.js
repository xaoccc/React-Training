import { useState } from "react"

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    function onChange(e) {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    function onSubmit(e) {
        e.preventDefault();
        submitHandler(values);
    }

    return { values, onChange, onSubmit }
}