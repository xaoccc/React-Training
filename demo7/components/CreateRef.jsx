import { useRef } from "react"
import ControlledFormPipe from "./ControlledFormPipe"

export default function UseRef() {

    const formRef = useRef();

    return (
        <>
        <ControlledFormPipe formRef={formRef}  />
        <button type="button" onClick={() => formRef.current.requestSubmit()}>Submit</button>
        </>
    )
}