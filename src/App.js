import React, {Fragment, useState} from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import Filter from './components/Filter'
import './main.sass'

const App = () => {
    const [filter = "All", setFilter] = useState()

    const handleFilter = (filter) => {
        setFilter(filter)
    }

    return ( 
        <Fragment>
            <div className="app">
                <Header title="Rick and Morty API"/>
                <Filter handleFilter={handleFilter}/>
                <Characters filter={filter}/>
            </div>
        </Fragment>
     );
}
 
export default App;