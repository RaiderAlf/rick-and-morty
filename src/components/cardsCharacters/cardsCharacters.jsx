import React from 'react'
import Card from '../card/card'
import Styles from './cardsCharacters.module.css'
import NavBar from '../navBar/navBar'

const CardsCharacters = () => {

    const [character, setCharacter] = React.useState([]);

    const urlRick = 'https://rickandmortyapi.com/api/character/';

    const fetchCharacters = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setCharacter(data.results)})
            .catch(error => console.log(error)) 
    }

    
    React.useEffect(() => {
        fetchCharacters(urlRick)
    },[])
    
    return(
        <div>
            <NavBar />
            <div className={Styles.cards}>
                {
                    character.map(inf => <Card data={inf}/>)
                }
            </div>
        </div>
    )
}

export default CardsCharacters