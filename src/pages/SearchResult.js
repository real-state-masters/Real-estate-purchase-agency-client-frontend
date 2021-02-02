import React from 'react'
import FilterArea from '../components/FilterArea/FilterArea'
import HeaderSearch from '../components/HeaderSearch/HeaderSearch'
import Properties from '../components/Properties/Properties'


const SearchResult = () => {
    return (
        <>
           <HeaderSearch />  
           <FilterArea />        
           <Properties />
        </>
    )
}

export default SearchResult
