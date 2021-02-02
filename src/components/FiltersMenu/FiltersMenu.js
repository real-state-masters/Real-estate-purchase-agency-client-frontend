import React from 'react'
import './FiltersMenu.scss'

import {ReactComponent as Filters} from '../../assets/filter.svg'
import {ReactComponent as Map} from '../../assets/map.svg'
import {ReactComponent as DownArrow} from '../../assets/down-arrow.svg'

const FiltersMenu = () => {
    return (
        <div className="filters-menu">
        <div className="filters">
            <Filters />
            <span className="ml-1">filters</span>
        </div>
        <div className="map">
            <Map />
            <span className="ml-1">map</span>
        </div>
        <div className="sort-by">
            <span className="sort">Sort by:</span>
            <span className="ml-1 sort-choice">Lowest Price</span>
            <DownArrow  className="ml-1"/>
        </div>
    </div>
    )
}

export default FiltersMenu
