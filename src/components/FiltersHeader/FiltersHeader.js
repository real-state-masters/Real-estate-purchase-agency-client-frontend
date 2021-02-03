import React from 'react'
import './FiltersHeader.scss'
import {ReactComponent as Close} from '../../assets/close.svg'

const FiltersHeader = () => {
    return (
        <header className="header-filters">
            <p>+</p>
            <h3>Filters</h3>
            <span>Reset</span>
        </header>
    )
}

export default FiltersHeader
