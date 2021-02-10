import React from 'react'
import HeaderSearch from '../components/HeaderSearch/HeaderSearch'
import Property from '../components/Property/Property'
import PropertyDescription from '../components/PropertyDescription/PropertyDescription'
import './SingleProperty.scss'
import {useSelector, useDispatch} from 'react-redux'
import {fetchProperty} from '../store/curProperty'
import { useParams } from 'react-router-dom'


const SingleProperty = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    var {loading, error, data} = useSelector(state => state.curProperty);
    // const [house, setHouse] = React.useState(false);
    
    const id = useParams();


    React.useEffect(() =>{
        const fetchRes = async () => {
            dispatch(fetchProperty(id))
        }
        fetchRes();
     }, [dispatch, id])



         return (
             <>  
                 
                 <HeaderSearch />
                 {loading && <p>Carregando...</p>}
                 
                 {
                data
                 && 
                 <>
                     <div className="single-property-info-container">
                     <Property house={data.data.data}/>
                     </div>
                     <PropertyDescription description={data.data.data.description} house={data.data.data}/>
                 </>
                 } 
                 {
                     error
                     &&
                     <p>Could not find property</p>
                 }
             </>
         )

}

export default SingleProperty
