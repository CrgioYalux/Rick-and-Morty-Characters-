import React from 'react'

const Header = (props) => {
    return ( <header>
                <div className="container">
                    <div className="content">
                        <h1 className="title">{props.title}</h1>
                        <p className="text">This project ilustrates the characters from the Rick and Morty series</p>
                    </div>
                </div>
            </header>
         );
}
 
export default Header;