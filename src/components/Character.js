import React from 'react'

const Character = ({item}) => {
    return ( 
        <div className="box">
            <img src={item.image} alt={`Image of ${item.name}`}/>
            <div className="character">
                <h3 className="name">{item.name}</h3>
                <span>
                    <p className="specie">{item.species}</p>
                    <p className={`status ${item.status}`}>{item.status}</p>
                </span>
            </div>
        </div>
     );
}
 
export default Character;