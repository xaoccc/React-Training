import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(props.count);

    function increaseCount() {
        setCount(count => count + 1)
    }
    function decreaseCount() {
        setCount(count => count - 1)
    }
    function resetCount() {
        setCount(0)
    }

    return (
        <div>
            <p>Counter <span>{count}</span></p>
            <div className="buttons">
                <button onClick={ increaseCount }>+</button>
                <button onClick={ resetCount }>Clear</button>
                <button onClick={ decreaseCount }>-</button>
            </div>
            
        </div>
    )
}