import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700  font-semibold'>US </span></p>
      </div>


       <div className=' my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img src={assets.contact_image}  className='w-full  md:max-w-[360px]'/>

        <div className=' flex flex-col justify-center items-start gap-6'>

          <p className='font-bold text-lg text-gray-600'>OUR OFFICE </p>
          <p className='text-gray-500'> BEIRUT LEBANON  HAMRA <br/></p>
          <p className='text-gray-500'> Tel : 03303030330  <br/> Email : doctor@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'> careers at prescripto</p>
          <p  className='text-gray-500'>Learn more about our team and jobs openings </p>
          <button className='border border-black px-8 py-4 text-sm  hover:bg-primary hover:text-white hover:cursor-pointer'> Explore Jobs</button>
        </div>

       </div>







{/* 3:16:42 */}





      
    </div>
  )
}

export default Contact
