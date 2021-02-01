import React from 'react'
import './MixTitle.scss'

const MixTitle = ({bold, light}) => {
    return (
        <div className="content-container">
            <h1> <span className="text bold-text">{bold}</span> <span className="text light-text">{light}</span></h1>
        </div>
    )
}

export default MixTitle
