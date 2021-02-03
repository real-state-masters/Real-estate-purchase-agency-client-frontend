import React from 'react'
import './ButtonOptions.scss'

const ButtonOptions = ({children}) => {
    const [active, setActive] = React.useState(false);


    return (
        <button  className={`${active && 'selected'} button-options`} onClick={() => setActive(!active)}>
            {children}
        </button>
    )
}

export default ButtonOptions
