import React from 'react'
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import * as parkData from '../../fake-data.json'
import {ReactComponent as DownArrow} from '../../assets/down-arrow.svg'
import './Map.scss'
import Property from '../Property/Property'









const Map = () => {


    const house =   {   
            id: 1,
            imgs: ['https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
                   'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                  ],
            address: '382 W King Edward Ave',
            district: 'Shaughnessy',
            region: 'BC',
            price: 457000,
            rooms: 2,
            bathrooms: 1,
            dimension: 67,
            tel: 999000111
    }
    
    
    const [houseSelected, setHouseSelected] = React.useState(false);


    const [selectedPark, setSelectedark] = React.useState(null);

    const [viewport, setViewport] = React.useState({
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 10,
        width: '100vw',
        height: '83vh',
    })



    // Handle color change in little spots in the map
    React.useEffect(() =>{
        if(!houseSelected){
            let selected = [...document.querySelectorAll('.marker-btn-active')]
            selected.forEach((item) =>{
                item.classList.remove('marker-btn-active');
            })
        }
    }, [houseSelected])

    function handleMarker({target}){
        if(!target.classList.contains('marker-btn-active') && houseSelected){
            let selected = [...document.querySelectorAll('.marker-btn-active')]
            selected.forEach((item) =>{
                item.classList.remove('marker-btn-active');
            })
            target.classList.add('marker-btn-active')

            // ***fetch new property logic will come here


        } else if(houseSelected && target.classList.contains('marker-btn-active')){
            setHouseSelected(false);
        } else{

            target.classList.add('marker-btn-active')
        }
    }

    return (
        <div>      
            <div className="map-container">           
            
                <ReactMapGL {...viewport} 
                mapboxApiAccessToken={"pk.eyJ1IjoiaGVucmlxdWVjb25kZSIsImEiOiJja2txd3p1djAwOHlvMm5xaDFoNTFsenY3In0.BamaTEbw0vd21Eik0k2LQA"}
                mapStyle="mapbox://styles/henriqueconde/ckkqxhait2f0t17s1iq40nd1c"
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
                >
                    {parkData.features.map((park) => (
                        <Marker key={park.properties.PARK_ID} latitude={park.geometry.coordinates[1]} longitude={park.geometry.coordinates[0]}>
                            <div>
                                <div className="marker-btn" onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedark(park);
                                    setHouseSelected(true);
                                    console.log(houseSelected);
                                    handleMarker(e)
                                    
                                }}></div>
                            </div>
                        </Marker>
                    ))}

                </ReactMapGL>
                <div className="property-map-display">
                    <div className="property-list-link">
                        {
                        houseSelected 
                        ? 
                        <>
                        <p onClick={() => setHouseSelected(false)}>Selected Property</p>
                        <DownArrow />
                        </>
                        : 
                        <>
                        <p>Property List</p>
                        <DownArrow className="arrow"/>
                        </>
                        }
                        
                    </div>
                        <Property active={houseSelected ? 'property-active' : ''} house={house}/>
                </div>
            </div>      
        </div>
    )
}

export default Map
