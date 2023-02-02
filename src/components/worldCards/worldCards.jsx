import React from "react";
import NavBar from "../navBar/navBar";
import CardWorld from "../cardWorld/cardWorld";
import Styles from './worldCards.module.css'

const WorldCards = () => {
    const [worlds, setWorlds] = React.useState([]);

    const initialUrl = 'https://rickandmortyapi.com/api/location'

    const fetchWorlds = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setWorlds(data.results))
    }

    React.useEffect(() => {
        fetchWorlds(initialUrl)
    },[])

    return(
        <div>
            <NavBar />
            <div className={Styles.divCards}>
            {
                worlds.map((world, index) => <CardWorld key={index} data={world}/>)
            }
            </div>
        </div>
    )
}

export default WorldCards