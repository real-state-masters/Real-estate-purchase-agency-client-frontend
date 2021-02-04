import React from 'react'
import Input from '../Inputs/Input'
import './AllFilters.scss'
import {ReactComponent as Bedrooms} from '../../assets/bedrooms.svg'
import {ReactComponent as Bathrooms} from '../../assets/bathrooms.svg'
import ButtonOptions from '../Inputs/ButtonOptions'
import PriceSlider from '../Inputs/PriceSlider'
import {Button} from 'react-bootstrap'
import PublicationDateFilter from '../Inputs/PublicationDateFilter'

const AllFilters = () => {

    function handleSubmit(e){
        e.preventDefault();
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container mt-3">
                <h6>Type of Home</h6>
                <div className="type-filter">
                    <div className="form-group mr-4">
                        <Input className="input-checkbox" id="flat/apartment" name="flat/apartment" type="checkbox" label="Flat/Apartment"/>
                        <Input name="house" id="house" className="input-checkbox" type="checkbox" label="House"/>
                    </div>
                    <div className="form-group">
                        <Input className="input-checkbox" id="duplex" name="duplex" type="checkbox" label="Duplex"/>
                        <Input name="penthouse" id="penthouse" className="input-checkbox" type="checkbox" label="Penthouse"/>
                    </div>
                </div>
                <h6>Bedrooms <Bedrooms className="ml-1"/></h6>
                <div className="form-section bedrooms-filter">
                    <ButtonOptions>0 (studio/flat)</ButtonOptions>
                    <ButtonOptions>1</ButtonOptions>
                    <ButtonOptions>2</ButtonOptions>
                    <ButtonOptions>3</ButtonOptions>
                    <ButtonOptions>4 or +</ButtonOptions>
                </div>
                <h6>Bathrooms <Bathrooms className="ml-1"/></h6>
                <div className="form-section bedrooms-filter">                    
                    <ButtonOptions>1</ButtonOptions>
                    <ButtonOptions>2</ButtonOptions>
                    <ButtonOptions>3 or +</ButtonOptions>
                </div>

                <h6>Equipment</h6>
                <div className="form-section equiment-filter">
                    <div className="form-group mr-4 ">
                        <Input className="input-checkbox" id="indifferent" name="indifferent" type="checkbox" label="Indifferent"/>
                        <Input name="fully-fitted-kitchen" id="fully-fitted-kitchen" className="input-checkbox" type="checkbox" label="Fully fitted kitchen"/>
                    </div> 
                    <div className="form-group">
                        <Input name="furnished" id="furnished" className="input-checkbox" type="checkbox" label="Furnished"/>
                    </div>              
                </div>

                <h6>Condition</h6>
                <div className="form-section equiment-filter">
                    <div className="form-group mr-4 ">
                        <Input className="input-checkbox" id="new-homes" name="new-homes" type="checkbox" label="New homes"/>
                        <Input name="needs-renovation" id="needs-renovation" className="input-checkbox" type="checkbox" label="Needs renovation"/>
                    </div> 
                    <div className="form-group">
                        <Input name="good-condition" id="good-condition" className="input-checkbox" type="checkbox" label="Good condition"/>
                    </div>              
                </div>
                <h6>Price Range</h6>
                <PriceSlider />

                <h6>Publication Date</h6>
                <PublicationDateFilter />


                <h6>More Filters</h6>
                <div className="form-section equiment-filter">
                    <div className="form-group mr-4 ">
                        <Input name="pets-allowed" id="pets-allowed" className="input-checkbox" type="checkbox" label="Pets Allowed"/>                        
                        <Input name="air-conditioning" id="air-conditioning" className="input-checkbox" type="checkbox" label="Air Conditioning"/>
                        <Input name="terrace" id="terrace" className="input-checkbox" type="checkbox" label="Terrace"/>
                    </div> 
                    <div className="form-group">
                        <Input name="lift" id="lift" className="input-checkbox" type="checkbox" label="Lift"/>
                        <Input name="swimming-pool" id="swimming-pool" className="input-checkbox" type="checkbox" label="Swimming Pool"/>
                    </div>    
                    <div className="form-group">
                        <Input name="garden" id="garden" className="input-checkbox" type="checkbox" label="Garden"/>
                    </div>                     
                </div>
                <div className="btn-center">
                    <Button className="btn" variant="primary">Show Results</Button>
                </div>
            </form>
        </div>
    )
}

export default AllFilters
