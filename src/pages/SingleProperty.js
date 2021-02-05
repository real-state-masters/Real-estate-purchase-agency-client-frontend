import React from 'react'
import HeaderSearch from '../components/HeaderSearch/HeaderSearch'
import Property from '../components/Property/Property'
import PropertyDescription from '../components/PropertyDescription/PropertyDescription'
import './SingleProperty.scss'
const SingleProperty = () => {
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
        tel: 999000111,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                      laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                      laboris nisi ut aliquip ex ea commodo consequat.
                      laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                      laboris nisi ut aliquip ex ea commodo consequat.`,
        features: ['67m2', 'T2', '1 bathroom', 'Good condition', 'Built in 2017']
}



    return (
        <>
            <HeaderSearch />
            <div className="single-property-info-container">
                <Property house={house}/>
            </div>
            <PropertyDescription description={house.description} features={house.features}/>
        </>
    )
}

export default SingleProperty
