import React from 'react'
import Property from '../Property/Property'
import './Properties.scss'


const houses = [
    {   
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
    },
    {
        id: 2,
        imgs: ['https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
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
    },
    {
        id: 3,
        imgs: ['https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'],
        address: '382 W King Edward Ave',
        district: 'Shaughnessy',
        region: 'BC',
        price: 457000,
        rooms: 2,
        bathrooms: 1,
        dimension: 67,
        tel: 999000111
    },
    {
        id: 4,
        imgs: ['https://images.unsplash.com/photo-1560026301-88340cf16be7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'],
        address: '382 W King Edward Ave',
        district: 'Shaughnessy',
        region: 'BC',
        price: 457000,
        rooms: 2,
        bathrooms: 1,
        dimension: 67,
        tel: 999000111
    },

]

const Properties = () => {
    return (
        <div className="content-container">
            <div className="property-container">
                {houses.map((house) => (
                    <Property key={house.id} house={house}/>
                ))}
           
            </div>
        </div>
    )
}

export default Properties
