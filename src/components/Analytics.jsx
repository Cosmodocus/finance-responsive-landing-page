import React from 'react'
import Laptop from '../assets/laptop.jpg'


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-8'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit animi omnis incidunt sunt fugit? Molestiae officiis beatae vero sit ipsum, eligendi laborum esse delectus obcaecati perferendis amet facilis rerum.</p>
                <button className='bg-[#000300] w-[200px] rounded-md py-3 mx-auto md:mx-0 my-6 hover:bg-[hsl(161,100%,34%)] text-[#00df9a] font-medium'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics