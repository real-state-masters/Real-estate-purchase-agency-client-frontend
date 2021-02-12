import React from 'react'
import Property from '../Property/Property'
import './Properties.scss'
import {useSelector, useDispatch} from 'react-redux'
import {fetchResults} from '../../store/searchResults'




const Properties = ({houses}) => {

    return (
        <>
        <div className="content-container">
            <div className="property-container">
                {houses.map((house) => (
                    <Property key={house._id} house={house}/>
                ))}
           
            </div>
        </div> 
        </>
    )
}

export default Properties
