import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
const Nodata = () => {
    return (
        <div className='text-center flex justify-center flex-col mt-8 bg-gray-300  rounded-lg'>
           
           <div className='mx-auto opacity-40 mt-16'>
             <FaCartShopping size={200} />
           </div>
            <h2 className='text-4xl opacity-40 '>No Data Heare</h2>

        </div>
    );
};

export default Nodata;