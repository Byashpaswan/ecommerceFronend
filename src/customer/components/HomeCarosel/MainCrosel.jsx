import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';

const MainCrosel = () => {
    const items =mainCaroselData.map((item)=> <img className='cursor-pointer -z-10'
    role='presentation' src={item.image} alt=""/>)

  return (
    <AliceCarousel
    mouseTracking
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
 />
  )
}

export default MainCrosel