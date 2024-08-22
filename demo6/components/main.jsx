import { useState, useEffect } from "react"
import styles from "../public/css/Main.module.css"
import StarWars from "./starwars";

export default function Main() {
    const [numbers, setNumbers] = useState([1,2,3,4,5]);
    // const [count, setCount] = useState(0);
    // const [isManualUpdate, setIsManualUpdate] = useState(false);

    useEffect(() => {
        console.log('Update');
    }, [numbers]);

    // useEffect(() => {
    //     if (!isManualUpdate) {
    //         setTimeout(() => setCount(count => count + 1), 1000);
    //     } else {
    //         setIsManualUpdate(false);
    //     }        
    // }, [count])

    function actionTime() {
        setNumbers(oldState => oldState.slice(0, oldState.length - 1));
        
    }
    // function counter() {
    //     setCount(count => count + 1);
    //     setIsManualUpdate(true);
    // }


    return (
        <main>            
            <section>
            {/* <div>{count}</div> */}
                <ul>
                    { numbers.map((el, i) => <li className={styles.listItem} key={i}>{el * 3}</li>) }
                </ul>
                <button onClick={actionTime}>Do something</button>
                {/* <button onClick={counter}>+</button> */}
            </section>
            <StarWars />
        </main>
    )
}