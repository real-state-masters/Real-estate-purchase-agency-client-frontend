import React from 'react'
import './FiltersMenu.scss'

import {ReactComponent as Filters} from '../../assets/filter.svg'
import {ReactComponent as Map} from '../../assets/map.svg'
import {ReactComponent as DownArrow} from '../../assets/down-arrow.svg'
import { Link } from 'react-router-dom'

const FiltersMenu = () => {
    const [sortMenu, setSortMenu] = React.useState(false);

    // handle filter states 
    const [selectedSort, setSelectedSort] = React.useState('Lowest Price');
    function handleClick({target}){
        setSelectedSort(target.innerText);
        const options = [...document.querySelectorAll('.sortMenu li')];
        options.forEach((item) =>{
            if(item.innerText === target.innerText){
                item.classList.add('sortActive')
            } else{
                item.classList.remove('sortActive')
            }
        })
    }

    return (
        <div className="filters-menu">
        <div className="filters">
            <Filters />
            <span className="ml-1">filters</span>
        </div>
        <div className="map">
            <Map />
            <span className="ml-1">
                <Link to="/map">
                    map
                </Link>
            </span>
        </div>
        <div className="sort-by">
            <span className="sort">Sort by:</span>
            <span className="ml-1 sort-choice" onClick={() => setSortMenu(!sortMenu)}>{selectedSort}</span>
            <DownArrow  className={`down-arrow ml-1 ${sortMenu ? 'up' : 'down'}`} onClick={() => setSortMenu(!sortMenu)}/>
            <div className={`${sortMenu ? 'sortMenu' : 'hideMenu'}`}>
                <ul onClick={(e) => handleClick(e)}>
                    <li className="sortActive">Lowest Price</li>
                    <li>Highest Price</li>
                    <li>Oldest</li>
                    <li>Newest</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default FiltersMenu
