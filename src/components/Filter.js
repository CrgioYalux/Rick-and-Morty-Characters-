import React from 'react'

const Filter = ({handleFilter}) => {
    return ( 
        <div className="filter__container">
            <div 
                className="opt opt--alive"
                onClick={() => handleFilter("Alive")}
            ></div>
            <div 
                className="opt opt--dead"
                onClick={() => handleFilter("Dead")}
            ></div>
            <div 
                className="opt opt--unknown"
                onClick={() => handleFilter("unknown")}
            ></div>
            <div 
                className="opt opt--all"
                onClick={() => handleFilter("All")}
            >all</div>
        </div>
     );
}
 
export default Filter;