import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/Men/mens_kurta'
//import { kurta } from '../../../Data/Men/kurta'
import { mensShoesPage1 } from '../../../Data/shoes'
import { lehngacholiPage2 } from '../../../Data/Saree/lenghaCholiPage2'
import { sareePage1 } from '../../../Data/Saree/page1'
import { kurtaPage1 } from '../../../Data/Kurta/kurta'

const HomePage = () => {
  return (
    <div>
        <MainCrosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's kurta"}/>
        <HomeSectionCarosel data={mensShoesPage1} sectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={kurtaPage1} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={sareePage1} sectionName={"Women's Saree"}/>
        <HomeSectionCarosel data={lehngacholiPage2} sectionName={"Women's Dress"}/>
        
        </div>
    </div>
  )
}

export default HomePage