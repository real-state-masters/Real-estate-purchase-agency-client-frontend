import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import {ReactComponent as Houses} from '../../assets/houses.svg'
import {ReactComponent as Logo} from '../../assets/logo-dark.svg'
import './SearchArea.scss'
import {connect, useSelector} from 'react-redux'
import {add, sub} from '../../store/counter'
import { Link } from 'react-router-dom'


const SearchArea = ({counter, dispatch}) => {
    console.log(counter);

    const [location, setLocation] = React.useState('');

    return (
        <>
        <section className="search-area">
            <div className="content-container">
                <h2 className="title">Find the perfect property!</h2>            
            </div>
            <div className="search-box">
                <Houses />
                <Form inline>
                    <Logo />
                    <FormControl type="text" value={location} onChange={({target}) => setLocation(target.value)}placeholder="Search by City or District" className="mr-sm-2 px-5" />
                    
                    <p>{location}</p>
                    <Link to={`/properties/${location}`}>
                        <Button className="btn" variant="primary">Search</Button>
                    </Link>
                </Form>
            </div>
        </section>
        <div className="search-separator"></div>
        
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}




export default connect(mapStateToProps)(SearchArea);
