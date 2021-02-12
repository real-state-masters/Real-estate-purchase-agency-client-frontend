import React from 'react'
import './HomeOfficeButton.scss'

const HomeOfficeButton = () => {

    let [home, setHome] = React.useState(true)
    let [office, setOffice] = React.useState(false)

    function handleClick({target}){
        if(target.innerText === 'Home'){
            setHome(true)
            setOffice(false)
        } else{
            setHome(false)
            setOffice(true)
        }
    }


    return (
        <div className="home-office-btn">
                <p className={`home ${home ?'active' : ''}`} onClick={(e) => handleClick(e)}>
                    Home
                </p>
                <p className={`home ${office ?'active' : ''}`} onClick={(e) => handleClick(e)}>
                    Office
                </p>
            </div>
    )
}

export default HomeOfficeButton
