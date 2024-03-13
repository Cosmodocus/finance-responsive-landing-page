import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold '>Grow with Data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'>Fast, flexible financing for</p>
                <ReactTyped
                 className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#00df9a] md:pl-4'
                 strings={['BTB','SASS', 'BTC']} typeSpeed={100} 
                 backSpeed={120} 
                 loop 
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analutics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md py-3 mx-auto my-6 hover:bg-[hsl(161,100%,34%)] text-black font-medium'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero