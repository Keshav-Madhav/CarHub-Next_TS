"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

type Props = {}

const Hero = (props: Props) => {
    const handleScroll = () =>{

    }
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, book or rest a car - quickly and easily!
            </h1>
            <p className="hero__subtitle">
                Stremline your car rental experience with you effortless booking process.
            </p>

            <CustomButton 
                title="Explore cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="Hero" fill className='object-contain'/>
                <div className='hero__image-overlay'/>
            </div>
        </div>
    </div>
  )
}

export default Hero