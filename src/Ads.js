import React from 'react'
import adMain from './assets/ad.jpg'

export default function Ads() {
    return (
        <div className='left'>
            <img className='imgAd' src={adMain} alt='ad' />
        </div>
    );
}