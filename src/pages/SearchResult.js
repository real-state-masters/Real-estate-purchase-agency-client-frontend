import React from 'react'
import FilterArea from '../components/FilterArea/FilterArea'
import HeaderSearch from '../components/HeaderSearch/HeaderSearch'
import Properties from '../components/Properties/Properties'
import {fetchResultsByLocation} from '../store/ResultsByLocation'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'

const SearchResult = () => {
    const state = useSelector(state => state)
    const {loading, error, data} = useSelector(state => state.resultsByLocation)
    const dispatch = useDispatch();

    const [houses, setHouses] = React.useState('');

    const location = useParams();

    React.useEffect(() =>{
       const fetchResByLocation = async () =>{
           const res = await dispatch(fetchResultsByLocation(location.location));
           if(state.login.logged){
                setHouses(res.payload.data);
            } else{
                setHouses(res.payload.data.data);
            }
        }
       fetchResByLocation();
    }, [dispatch, location, state.login.logged])

    return (
        <>
           <HeaderSearch />  
           <FilterArea />
           {loading && <p>Carregando...</p>}        
           {houses && <Properties houses={houses}/>}
        </>
    )
}

export default SearchResult
