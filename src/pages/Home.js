import React from 'react'
import Header from '../components/Header/Header'
import MixTitle from '../components/MixTitle/MixTitle'
import Properties from '../components/Properties/Properties'
import SearchArea from '../components/SearchArea/SearchArea'
import {useSelector, useDispatch} from 'react-redux'
import {fetchResults} from '../store/searchResults'

const Home = () => {
    
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const [houses, setHouses] = React.useState([]);



    React.useEffect(() =>{
        const fetchRes = async () => {
         const res = await dispatch(fetchResults())
         console.log(res)
         if(state.login.logged){
             setHouses(res.payload.data);
         } else{
            setHouses(res.payload.data.data);
         }
        }
        fetchRes();
     }, [dispatch, state.login.logged])


    return (
        <>            
           <Header />
           <SearchArea />
           <MixTitle bold="Newest properties" light="in the last 24h"/>
            {state.results.loading && <p>Carregando...</p>}
            {houses && <Properties houses={houses} />}

        </>
    )
}

export default Home
