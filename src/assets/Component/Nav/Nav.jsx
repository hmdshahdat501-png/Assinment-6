import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


const Nav = () => {
    return (
        <div className='flex justify-between items-center mt-6'>
            <div>
                <h2 className='text-4xl font-bold text-blue-700'>DigiTools</h2>
            </div>
            <ul className='flex gap-4 font-bold'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>
          <div className='flex items-center gap-4'>
             <div class="indicator">
  <span class="indicator-item badge">12</span>
  <button class="btn"><FaShoppingCart />
</button>
</div>
<p>Login</p>
<button className='btn bg-linear-to-r from-blue-700 to-purple-500 rounded-full text-white'>Get Started</button>
          </div>
        </div>
    );
};

export default Nav;