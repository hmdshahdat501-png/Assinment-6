import React, { useState } from 'react';

const Cart = ({datas}) => {
    const [addcard, setAddcard] = useState('buynow')
    return (
        <div className='bg-white border-2 border-gray-200 p-4 rounded-lg space-y-4' >
            <div className='flex justify-between'>
                 <div className='p-4 bg-gray-100 w-35 rounded-full '><img src={datas.image} alt="" /></div>
                 <div className='bg-red-300 w-fit h-fit px-4 py-2 font-bold text-red-600 rounded-full'>{datas.tag}</div>
            </div>
        <h2 className='text-3xl font-bold'>{datas.name}</h2>
        <p className='text-xl text-gray-400'>{datas.description}</p>
        <h2 className='text-4xl font-bold'>${datas.price} <samp className='text-xl text-gray-400'>/{datas.period}</samp></h2>
       <ul className="mt-4 space-y-1">
        {datas.features.map((feature) => (
          <li
            className="text-gray-800 flex items-center gap-2 before:content-['✔']"
          >
            {feature}
          </li>
        ))}
      </ul>
      <button onClick={() => setAddcard('addtocard ')} className={`btn w-full rounded-full text-xl p-8 ${addcard === 'buynow' ? 'bg-red-500' : 'bg-green-500'}`}>{addcard === 'buynow' ? 'Buy Now' : 'Add To Card'}</button>
        </div>
    );
};

export default Cart;