import React from 'react'
import './Header.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Burger} from '../../assets/burger.svg'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
    const logged = useSelector(state => state.login.logged)
    return (
        <header className="header">
            <Logo />
            {
            !logged
            ?
            <Link to="login">
                <Burger />
            </Link>
            :
            <Burger />
            }
        </header>
    )
}

export default Header
