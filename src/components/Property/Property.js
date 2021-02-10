import React from 'react'
import './Property.scss'
import {ReactComponent as Bedrooms} from '../../assets/bedrooms.svg'
import {ReactComponent as Bathrooms} from '../../assets/bathrooms.svg'
import {ReactComponent as SquareFeets} from '../../assets/squareFeets.svg'
import {ReactComponent as Email} from '../../assets/email.svg'
import {ReactComponent as HeartEmpty} from '../../assets/heart-empty.svg'
import {ReactComponent as HeartRed} from '../../assets/heart-red.svg'
import {ReactComponent as Trash} from '../../assets/trash.svg'
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg'
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg'
import {ReactComponent as Camera} from '../../assets/camera.svg'
import {Link, useParams} from 'react-router-dom'



  const Property = ({house, active}) => {

    const params = useParams();
    

    //display/hide arrows
    const [arrows, setArrows] = React.useState(false)
    let opacity = "0";
    arrows ? opacity = 1 : opacity = 0

    //image slider settings
    let [current, setCurrent] = React.useState(0);
    let photo;
    if(house.images !== null){
        photo = house.images[current]
    }

   
    // Adjust phone number format
    // let tel = Array.from(String(house.contact), Number)
    // tel.forEach(function(item, index) {
    //     if(index === 2 || index === 5){
    //         tel.splice(index, 1, item + ' ')
    //     } 
    // })
    // tel = tel.join('')

    // Adjust currency format
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

    // Favorite
    const [favorite, setFavorite] = React.useState(false)
    
    // Trash hide property
    const[trash, setTrash] = React.useState(false)
    function handleTrash(){
        setTrash(true);
    }

    return (
        <>
        {
        !trash
        &&
        <div className={`${active} property`} onMouseEnter={e => {
            setArrows(true);
        }}
        onMouseLeave={e => {
            setArrows(false)
        }}>
            <div className="img-container">               
                    
                  
                    <div className="arrows-container" style={{ opacity: opacity }}>
                        {
                            current > 0 && <LeftArrow onClick={() => setCurrent(current = current - 1)}/>
                        }
    
                        {
                            current < house.images.length - 1 && <RightArrow onClick={() => setCurrent(current = current + 1)}/>
                        }
                    </div>
                    <div className="camera-container">
                        <Camera />
                        <span>{current + 1}/{house.images.length}</span>
                    </div>
                    <img className="img" src={photo} alt=""/>                    
                    {/* <img className="img" src="https://images.unsplash.com/photo-1527169809256-51bcc03eef15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt=""/> */}
                             
            </div>
            <div className="address content-container">
            {
            !params.id 
            ? 
            <Link to={`/property/${house._id}`}>
                <h3>{house.location.address}</h3>
            </Link>
            :
            <h3>{house.location.address}</h3>
            }

                {/* <h4>{house.district}, {house.region}</h4> */}
            </div>
            <div className="property-info">
                <div className="price">
                    <span>{formatter.format(house.price)}</span>               
                 </div>
                <div className="features">
                    <div className="feature px-1 bedrooms">
                        <Bedrooms />
                        <span className="px-1">{house.num_rooms}</span>
                    </div>
                    <div className="feature px-1 bathrooms">
                        <Bathrooms />
                        <span className="px-1">{house.mum_bathrooms}</span>
                    </div>
                    <div className="feature px-1 dimension">
                        <SquareFeets />
                        <span className="px-1">{house.area}m2</span>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="property-info-2">
                <div className="tel-mail">
                    <div className="pr-2 dimension">
                        <Email />
                        <span className="px-1">{house.contact}</span>
                    </div>
                    {/* <div className="px-2 dimension">
                        <Phone />
                        <span className="px-1">Contact</span>
                    </div> */}
                </div>
                
                <div>
                    {
                        favorite 
                        ?
                        <HeartRed className="heart" onClick={() => setFavorite(false)}/>
                        :
                        <HeartEmpty className="heart" onClick={() => setFavorite(true)}/>

                    }
                    
                     <Trash onClick={() => handleTrash()}/>
                </div>
            </div>    
        </div>
        }
        </>
    )
}

export default Property
