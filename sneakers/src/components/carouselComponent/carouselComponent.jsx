import './carouselStyles.scss';
import React from 'react'
import frogBanner from '../../assets/images/frogBanner.png';

const CarouselComponent = () => {

  return (
    <div className='carousel'>
      <img src={frogBanner} alt='frogBanner' />
    </div>

  )
}

export default CarouselComponent