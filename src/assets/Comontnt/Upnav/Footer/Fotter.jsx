import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Fotter = () => {
    return (
        <div className='bg-black'>
        <div className='mx-auto container py-20'>
        <div className='flex justify-between text-white'>
            <div>
                <h2 className='text-4xl font-bold'>DigiTools</h2>
                <p className='font-normal mt-4'>Premium digital tools for creators,<br /> professionals, and businesses. Work <br />smarter with our suite of powerful tools.</p>
            </div>
            <div>
                <h2 className='text-xl mb-2'>Product</h2>
                <ul className='space-y-3'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl mb-2'>Company</h2>
                <ul className='space-y-3'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl mb-2'>Resources</h2>
                <ul className='space-y-3'>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl mb-2'>Social Links</h2>
                <div className='flex gap-6'>
               <span className='bg-gray-500 p-2 rounded-full'> <FaSquareInstagram size={40} /></span>
               <span className='bg-gray-500 p-2 rounded-full'> <FaFacebookSquare size={40} /></span>
                <samp className='bg-gray-500 p-2 rounded-full'><SiGmail size={40} /></samp>

                </div>
            </div>
        </div>
        <div className='text-white  mt-20'>
            <hr />
            <div className='flex justify-between mt-10'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <ul className='flex gap-4'><li>Privacy Policy</li> <li> Terms of Service  </li> <li> Cookies</li></ul>              
            </div>
        </div>
        </div>
        </div>
    );
};

export default Fotter;