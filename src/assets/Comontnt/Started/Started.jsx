import React from 'react';
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { IoRocketSharp } from "react-icons/io5";



const Started = () => {
    return (
        <div className='mx-auto container space-y-4 mt-32'>
            <h2 className='text-4xl font-bold text-center lg:6xl'>Get Started in 3 Steps</h2>
            <p className='text-center opacity-50'>Start using premium digital tools in minutes, not hours.</p>
            <div className='gap-8 justify-center mt-8 m-4 lg:flex m-0'>
                <div className='bg-gray-100 p-20 text-center space-y-4 rounded-xl border-3 border-gray-300 mb-8 lg:mb-0'>
                <div className='bg-gray-300 w-fit rounded-full p-4 mx-auto'> <RiAccountCircleFill size={80} color='blue' /></div>
                <h2 className='text-4xl font-bold text-center'>Create Account</h2>
                 <p className='opacity-50'>Sign up for free in seconds.  No credit card required to get started.</p>
                </div>
                <div className='bg-gray-100 p-20 text-center space-y-4 border-3 border-gray-300 rounded-xl mb-8 lg:mb-0'>
                <div className='bg-gray-300 w-fit rounded-full p-4  mx-auto'> <AiFillProduct size={80} color='blue'  /></div>
                <h2 className='text-4xl font-bold text-center'>Choose Products</h2>
                <p className='opacity-50'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='bg-gray-100 p-20 text-center space-y-4 border-3 border-gray-300 rounded-xl'>
                <div className='bg-gray-300 w-fit rounded-full p-4 mx-auto'><IoRocketSharp size={80} color='blue'  /></div>
                <h2 className='text-4xl font-bold text-center'>Start Creating</h2>
                <p className='opacity-50'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Started;