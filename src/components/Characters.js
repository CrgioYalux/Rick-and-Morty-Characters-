import React, {useState, useEffect} from 'react'
import Character from './Character'

const Characters = ({filter}) => {
    // states
    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacter(data.results))
        .catch(reject => console.log(reject))
    }, [])

    return ( 
        <div className="container">
            <div className="characters">
                {
                    character.map(item => {
                        if(filter === item.status){
                            return <Character item={item} key={item.id} />
                        }
                        else if(filter === "All"){
                            return <Character item={item} key={item.id} />
                        }
                    }
                    )
                }
            </div>
        </div>
     );
}
 
export default Characters;