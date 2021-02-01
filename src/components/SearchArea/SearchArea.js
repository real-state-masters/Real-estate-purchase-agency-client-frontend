import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import {ReactComponent as Houses} from '../../assets/houses.svg'
import {ReactComponent as Logo} from '../../assets/logo-dark.svg'
import './SearchArea.scss'

const SearchArea = () => {
    return (
        <section className="search-area">
            <h2 className="title">Find the perfect property for you!</h2>            
            <div className="search-box">
                <Houses />
                <Form inline>
                    <Logo />
                    <FormControl type="text" placeholder="Search by city or district" className="mr-sm-2 px-5" />
                    <Button className="btn" variant="primary">Search</Button>
                </Form>
            </div>
        </section>
    )
}

export default SearchArea
