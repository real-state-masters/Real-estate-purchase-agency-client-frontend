import React from 'react'
import Property from '../Property/Property'
import './Properties.scss'
import {useSelector, useDispatch} from 'react-redux'
import {fetchResults} from '../../store/searchResults'




const Properties = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const [houses, setHouses] = React.useState([]);

    React.useEffect(() =>{
        const fetchRes = async () => {
         const res = await dispatch(fetchResults())
         setHouses(res.payload.data);
        }
        fetchRes();
     }, [dispatch])
 
     console.log(houses)
    return (
        <>
        {state.results.loading && 'carregando...'}
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
