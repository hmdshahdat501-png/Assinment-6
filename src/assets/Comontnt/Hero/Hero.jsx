import React, { useState } from 'react';

const Hero = ({btnclick, setBtnclick }) => {
    
    return (
        <div className='mt-8'>
           <div className='flex justify-around bg-linear-to-bl from-violet-500 to-fuchsia-500 py-4 px-16 '>

            <div className=''>
                
                <h2 className='text-6xl font-bold text-white'>50K+</h2>
                <p className='text-xl text-white'>Active Users</p>
            </div>
            <div className='w-0.5 h-22 bg-white '></div>
            <div>
                <h2 className='text-6xl font-bold text-white'>200+</h2>
                <p className='text-xl text-white'>Premium Tools</p>
            </div>
             <div className='w-0.5 h-22 bg-white'></div>
            <div>
                <h2 className='text-6xl font-bold text-white'>4.9</h2>
                <p className='text-xl text-white'>Rating</p>
            </div>
           </div>
            <div className='mx-auto container text-center mt-20 space-y-4'>
                <h2 className='text-6xl font-bold'>Premium Digital Tools</h2>
                <p className='text-xl text-gray-400'>Choose from our curated collection of premium digital products designed
                   <br /> to boost your productivity and creativity.</p>
                <div className='flex gap-4 justify-center'>
                    <button onClick={()=> setBtnclick('products')} className={`btn rounded-full px-6 ${btnclick === 'products' ? ' bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white' : ''}`}>Products</button>
                    <button onClick={()=> setBtnclick('cart')} className={`btn rounded-full px-6 ${btnclick === 'cart' ? ' bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white' : ''}`}>Cart (2)</button>
                </div>
            </div>
        </div>
    );
};
  
export default Hero;