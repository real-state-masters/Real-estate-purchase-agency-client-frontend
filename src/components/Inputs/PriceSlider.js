import React from 'react'
import './PriceSlider.scss'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });


const PriceSlider = () => {
    const [rightRange, setRightRange] = React.useState(900000);
    const [leftRange, setLeftRange] = React.useState(100000);
    

    function handleLeftThumb({target}){
        if(target.value <= rightRange){
        setLeftRange(target.value);       
        let perc = ((target.value - target.min) / (target.max - target.min))* 100;
        let leftThumb = document.querySelector('.left');
        let range = document.querySelector('.range');
        leftThumb.style.left = perc + "%";
        range.style.left = perc + "%";
        }
    }

    function handleRightThumb({target}){
        if(target.value >= leftRange){
            setRightRange(target.value);
            let perc = ((target.value - target.min) / (target.max - target.min))* 100;
            let leftThumb = document.querySelector('.right'); 
            let range = document.querySelector('.range');      
            leftThumb.style.right = (100 - perc) + "%";
            range.style.right = (100 - perc) + "%";
        }
        
    }

    return (
        <>
        <div className="price-display">
            <p className="min">{formatter.format(leftRange)}</p>
            <span>-</span>
            <p className="max">{formatter.format(rightRange)}</p>
        </div> 
        <div className="middle form-section">
            <div className="multi-range-slider mb-4">
                <input type="range" id="input-left" min="0" max="1000000" value={leftRange} onChange={handleLeftThumb}/>
                <input type="range" id="input-right" min="0" max="1000000" value={rightRange} onChange={handleRightThumb}/>
                <div className="slider ">
                    <div className="track"></div>
                    <div className="range"></div>
                    <div className="thumb left"></div>
                    <div className="thumb right"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PriceSlider
