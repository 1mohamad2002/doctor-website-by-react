import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  my-10 mt-40 text-sm'>
        {/*  -------------------left ------------------------------ */}
            <div>
                <img  className='mb-5 w-40'src={assets.logo}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Qui est cupiditate facilis quibusdam 
                    reprehenderit officia necessitatibus quisquam animi. At perspiciatis fugit rem sunt!</p>

            </div>
        {/*  -------------------center ------------------------------ */}
            <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-500'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>


            </ul>


            </div>
        {/*  -------------------right ------------------------------ */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className=' flex flex-col gap-2 text-gray-500'>
                    <li>+321223213 21312</li>

                    <li>asdasdas@gmail.com</li>
                </ul>

            </div>
      </div>
      <div>
        {/* -------------   copyright text  */}
        <hr />

        <p  className='py-5 text-sm text-center'>Copyright © 2024 GreatStack - All Right Reserved</p>


      </div>


    </div>
  )
}

export default Footer
