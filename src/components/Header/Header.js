import React from 'react'
import './Header.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Burger} from '../../assets/burger.svg'

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Burger />
        </header>
    )
}

export default Header
