import React from 'react';
import bnner from '/banner.png'
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";


const Banner = () => {
    return (
        <div className=' justify-between gap-4 mt-12 container mx-auto lg:flex'>
            <div className='mt-12 space-y-4'>
                <p className='bg-purple-200 w-fit p-2 rounded-full text-purple-600 px-3 sm: mx-auto lg:mx-0'> New: AI-Powered Tools Available</p>
                <h2 className='text-4xl font-bold text-center lg:text-left lg:text-8xl'>Supercharge Your <br /> <span className='text-blue-700'>Digital Workflow</span></h2>
                <p className='text-center lg:text-left'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>
<div className='flex gap-3 justify-center lg:justify-start'>
    <button className='btn bg-linear-to-r from-purple-500 to-blue-500 rounded-full text-white'>Explore Products</button>
    <button className='btn btn-outline btn-primary rounded-full'> <CiPlay1 />
Watch Demo </button>
</div>
            </div>
            <div className='shadow-lg p-7 lg:p-0'>
        <img src={bnner} alt="" />
            </div>
        </div>
    );
};

export default Banner;