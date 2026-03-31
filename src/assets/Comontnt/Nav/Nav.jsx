import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


const Nav = ({addprodect}) => {
    return (
        <div className='lg:flex justify-between mt-6 items-center container mx-auto'> 
            <h2 className='sm: text-4xl text-center lg:text-5xl font-bold text-blue-700'>DigiTolls</h2>
            <ul className='sm:hidden  md: hidden lg:flex gap-4 font-bold text-xl'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>
            <div className='flex items-center gap-4  sm: justify-center mt-8'>
                <div class="indicator">
  <span class="indicator-item badge badge-secondary">{addprodect.length}</span>
  <button class="btn"><FaShoppingCart />
</button>
</div>
<div className='flex items-center gap-4'>
      <p>Login</p>
            <button className='btn rounded-full  bg-linear-to-r from-purple-500 to-blue-500 text-white'>Get Started</button>
</div>
            </div>
          
        </div>
    );
};

export default Nav;