import React from 'react'
import Image from 'next/image'
// import hero from '../../public/images/hero.jpg'
// import {Dimensions} from 'react-native';


export const Hero = () => {
  return (
    <div className="">
      {/* <Image
        src={hero}
        alt='Mountains'
        className={'heroImage'}
      /> */}
      <div className="heroBackground flex flex-col items-center justify-center">
        <div className="heroText mx-[50px] text-center">
          <h1 className="text-white text-5xl">Hi, I'm <span className="text--400">Jalen</span></h1>
          <div className="border border-gray-300 my-3 w-[100%]"></div>
          <h1 id="about" className="text-white text-2xl">Web Developer</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero;
