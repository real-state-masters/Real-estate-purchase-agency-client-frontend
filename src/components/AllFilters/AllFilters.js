import React from 'react'
import Input from '../Inputs/Input'
import './AllFilters.scss'
import {ReactComponent as Bedrooms} from '../../assets/bedrooms.svg'
import {ReactComponent as Bathrooms} from '../../assets/bathrooms.svg'
import ButtonOptions from '../Inputs/ButtonOptions'
import PriceSlider from '../Inputs/PriceSlider'

const AllFilters = () => {

    function handleSubmit(e){
        e.preventDefault();
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
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

            </form>
        </div>
    )
}

export default AllFilters
