import React from 'react'
import logo3 from "../assets/Featured1.webp"
import logo4 from "../assets/Featured2.webp"
import logo5 from '../assets/Featured3.webp'
import logo6 from "../assets/Featured4.webp"
import Image from 'next/image'

const Slides = () => {
  return (
    <div className='flex gap-x-10 h-12 px-12'>
        <Image
        src={logo3}
        alt='start'
        width={90}
        height={90}/>
        <Image
        src={logo4}
        alt='start'
        width={90}
        height={90}/>
        <Image
        src={logo5}
        alt='start'
        width={90}
        height={90}/>
        <Image
        src={logo6}
        alt='start'
        width={90}
        height={90}/>
      
    </div>
  )
}

export default Slides
