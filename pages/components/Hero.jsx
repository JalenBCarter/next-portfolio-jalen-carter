import React from 'react'
import Image from 'next/image'
import mtns from '../../public/images/bg-image.jpg'
// import {Dimensions} from 'react-native';


export const Hero = () => {
  return (
    <div className=''>
      <Image
        src={mtns}
        alt='Mountains'
        className={'heroImage'}
      />
      <div className="flex justify-center items-center">
        {/* <h1 className="heroText">Hi, I'm Jalen</h1> */}
        {/* <h3 className="font-weight-light">Web Programmer</h3> */}
      </div>
    </div>
  )
}

export default Hero;
