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
            <button className={Styles.btnIzq} onClick={() => alert('dont you cry no more')}><i class="fi fi-sr-angle-double-left"></i></button>
            <div className={Styles.cards}>
                {
                    character.map(inf => <Card data={inf}/>)
                }
            </div>
            <button className={Styles.btnDer}><i class="fi fi-sr-angle-double-right"></i></button>
        </div>
    )
}

export default CardsCharacters