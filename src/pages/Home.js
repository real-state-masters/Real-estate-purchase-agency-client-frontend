import React from 'react'
import Header from '../components/Header/Header'
import MixTitle from '../components/MixTitle/MixTitle'
import Properties from '../components/Properties/Properties'
import SearchArea from '../components/SearchArea/SearchArea'
import {useSelector, useDispatch} from 'react-redux'
import {fetchResults} from '../store/searchResults'

const Home = () => {
    
    // const [currentPage, setCurrentPage] = React.useState(1)
    // const [postsPerPage, setPostsPerPage] = React.useState(10)

    
    
    // // Get current posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

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
