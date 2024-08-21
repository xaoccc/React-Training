import { useState } from "react"

export default function Timer(props) {
    let [time, setTime] = useState(props.counter);

    setTimeout(() => {
        setTime(time+1);
    }, 1000)

    return (
        <h1>Time Elapsed: {time}</h1>
    )    
}