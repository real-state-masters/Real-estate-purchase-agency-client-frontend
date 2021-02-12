import React from 'react'
import './PropertyDescrippption.scss'
import {ReactComponent as Arrow} from '../../assets/down-arrow.svg'
import {Button} from 'react-bootstrap'

const PropertyDescription = ({description, house}) => {
    let shortDescription = description.split(' ').filter((item, index) => item !== "" && index < 105).join(' ');
    let restDescription = description.split(' ').filter((item, index) => item !== "" && index > 105).join(' ');

    const [activeDesc, setActiveDesc] = React.useState(false)

    return (
        <>
            <div className="content-container">
                <div className="description">
                    <span>{shortDescription}</span>
                    <div className={ `${activeDesc ? 'sanfona-container-active' : 'sanfona-container'}`}>
                        <div className={ `${activeDesc ? 'showDesc' : 'hiddenDesc'}`}>{restDescription}</div> 
                        <p className="seeDesc" onClick={() => setActiveDesc(!activeDesc)}>See full description</p>
                        <div className="main-features-container">
                            <h6>Main Features</h6>
                            <ul>                                
                                <li className="mb-2"><Arrow /> {house.num_rooms} rooms</li>
                            </ul>
                        </div>
                        <div className="btn-container">
                            <Button className="btn" variant="primary">Purchase</Button>
                        </div>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default PropertyDescription
