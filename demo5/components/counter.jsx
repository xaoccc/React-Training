import { useState } from "react"

export default function Item(props) {
    const [count, setCount] = useState(props.count);

    function increaseCount() {
        setCount(count => count + 1);
    }
    function decreaseCount() {
        setCount(count => count - 1);
    }
    function resetCount() {
        setCount(0)
    }

    return (
        <li>
            <img src={props.item['img']} alt={props.item['Title']} />
            <p>{props.item['Title']}</p>
            <p>Quantity <span className='qty'>{count}</span></p>
            <div className="buttons">
                <button onClick={ increaseCount }>+</button>
                <button onClick={ resetCount }>Clear</button>
                <button onClick={ (count > 0) ? decreaseCount : null }>-</button>
            </div>            
        </li>
    )
}