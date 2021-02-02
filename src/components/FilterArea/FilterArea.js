import React from 'react'
import FiltersMenu from '../FiltersMenu/FiltersMenu'
import HomeOfficeButton from '../HomeOfficeButton/HomeOfficeButton'
import './FilterArea.scss'
const FilterArea = () => {
    return (
        <div>
            <HomeOfficeButton />
            <FiltersMenu />
        </div>
    )
}

export default FilterArea
