import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import {ReactComponent as Houses} from '../../assets/houses.svg'
import {ReactComponent as Logo} from '../../assets/logo-dark.svg'
import './SearchArea.scss'

const SearchArea = () => {
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
                    <FormControl type="text" placeholder="Search by City or District" className="mr-sm-2 px-5" />
                    <Button className="btn" variant="primary">Search</Button>
                </Form>
            </div>
        </section>
        <div className="search-separator"></div>
        
        </>
    )
}

export default SearchArea
