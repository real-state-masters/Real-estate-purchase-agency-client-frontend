import React from 'react'
import './PropertyDescrippption.scss'

const PropertyDescription = ({description}) => {
    let shortDescription = description.description.split(' ').filter((item, index) => item !== "" && index < 105).join(' ');
    let restDescription = description.description.split(' ').filter((item, index) => item !== "" && index > 105).join(' ');

    const [activeDesc, setActiveDesc] = React.useState(false)

    return (
        <>
            <div className="content-container">
                <p className="description">
                    <span>{shortDescription}</span>
                    <div className={ `${activeDesc ? 'sanfona-container-active' : 'sanfona-container'}`}>
                        <div className={ `${activeDesc ? 'showDesc' : 'hiddenDesc'}`}>{restDescription}</div> 
                        <p className="seeDesc" onClick={() => setActiveDesc(!activeDesc)}>See full description</p>
                    </div>
                </p>

            </div>

        </>
    )
}

export default PropertyDescription
