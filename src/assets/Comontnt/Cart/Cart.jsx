import React, { useState } from 'react';
import { toast } from 'react-toastify';
const Cart = ({datas, addprodect, setaddprodect}) => {
    const handlebtn = () =>{
        setAddcard('addtocard ')
        setaddprodect([...addprodect, datas])
        toast.success('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored"
});
    }
    const [addcard, setAddcard] = useState('buynow')
    return (
        <div className='bg-white border-2 border-gray-200 p-4 rounded-lg space-y-4 mt-16 m-4' >
            <div className='flex justify-between'>
                 <div className='p-4 bg-gray-100 w-35 rounded-full '><img src={datas.image} alt="" /></div>
                 <div className= {`w-fit h-fit px-4 py-2 font-bold rounded-full uppercase ${datas.tag === 'popular' ? 'bg-yellow-200 text-yellow-500' : datas.tag === 'best seller' ? 'bg-purple-200 text-purple-500' : 'bg-green-200 text-green-500' }`}>{datas.tag}</div>
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
      <button onClick={handlebtn} className={`btn w-full rounded-full text-xl p-8 text-white hover:scale-110 ${addcard === 'buynow' ? 'bg-red-500' : 'bg-green-500'}`}>{addcard === 'buynow' ? 'Buy Now' : 'Add To Card'}</button>
        </div>
    );
};

export default Cart;