import React from 'react'
import FilterArea from '../components/FilterArea/FilterArea'
import HeaderSearch from '../components/HeaderSearch/HeaderSearch'
import Properties from '../components/Properties/Properties'
import {fetchResultsByLocation} from '../store/ResultsByLocation'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'

const SearchResult = () => {

    const {loading, error, data} = useSelector(state => state.resultsByLocation)
    const dispatch = useDispatch();

    const location = useParams();
    console.log(location.location);

    React.useEffect(() =>{
       const fetchResByLocation = async () =>{
           dispatch(fetchResultsByLocation(location.location));
       }
       fetchResByLocation();
    }, [dispatch, location])

    return (
        <>
           <HeaderSearch />  
           <FilterArea />        
           <Properties />
        </>
    )
}

export default SearchResult
