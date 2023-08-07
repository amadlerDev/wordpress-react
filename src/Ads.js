import React from 'react'
import adMain from './assets/ad.jpg'

export default function Ads() {


    return (
        <div class="frame-container">
            {/* <img className='imgAd' src={adMain} alt='ad' /> */}
            <iframe className='imgAd' height='100%' src="https://www.youtube.com/embed/BpeJY_GsdVU"></iframe>
        </div>
    );
}