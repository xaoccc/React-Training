import { useEffect, useState } from "react"
import styles from '../public/css/SW.module.css'

export default function StarWars(props) {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
        .then((res) => res.json())
        .then((res) => {
            setPlanets(res.results);          
        })
        .catch((error) => console.log(error));
    }, [])

    function CreateEntry(...data) {
        console.log(data);
        return (
            <li className="planet" key={data[11]}>
                <p className="planetName">Name: {data[0]}</p>
                <p className="population">Population: {data[8]}</p>
                <p className="diameter">Diameter: {data[3]}</p>
            </li>
        )
    }

    return (
        <section>
            <h1>Star Wars Planets</h1>
            <ul className={styles.planetsList}>
                   { planets.map((planet) => CreateEntry(...Object.values(planet))) }            
            </ul>
        </section>      
        
    )
}