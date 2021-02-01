import React from 'react'
import Header from '../components/Header/Header'
import MixTitle from '../components/MixTitle/MixTitle'
import Properties from '../components/Properties/Properties'
import SearchArea from '../components/SearchArea/SearchArea'

const Home = () => {
    return (
        <>
           <Header />
           <SearchArea />
           <MixTitle bold="Newest properties" light="in the last 24h"/>
           <Properties />
        </>
    )
}

export default Home
