import React from 'react'
import MixTitle from '../../components/MixTitle/MixTitle'
import {ReactComponent as Back} from '../../assets/back.svg'
import './HeaderSearch.scss'
const HeaderSearch = () => {
    return (
        <>
        <div className="header-search-container">
            <Back />
            <MixTitle bold="47 results" light="in Vancouver, CA"/>
            <span>| Home</span>
        </div>
        </>
    )
}

export default HeaderSearch
