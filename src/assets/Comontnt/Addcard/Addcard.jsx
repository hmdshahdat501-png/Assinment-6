import React from 'react';
import Nodata from '../Nodata/Nodata';
import { toast } from 'react-toastify';



const Addcard = ({ addprodect, setaddprodect }) => {
  
const deleltdata = (id) =>{
    const updectdat = addprodect.filter( scard => scard.id !== id )
    setaddprodect(updectdat)
   toast.warn('🦄 Delelt Card Suecssfull', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
};

const totalPrice = addprodect.reduce((total, item) => {
    return total + item.price
}, 0)
const cahakout = () => {
    setaddprodect ([])
     toast.success('🦄 Chakout All Prodect', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
}

    return (
        <div className='mx-auto max-w-6xl'>
            <h2 className='text-4xl  font-bold text-center lg:text-start mt-4'>Your Card</h2>
           {
            addprodect.length === 0 ? <Nodata></Nodata> : addprodect.map((datas, index) => (
                <div key={index} className='flex justify-between items-center bg-gray-200  p-4 m-4 rounded-lg lg:mt-4'>
                  <div className='flex gap-6 items-center'>
                     <img className='w-15 bg-white rounded-full p-1 lg:w-30' src = {datas.image} alt="" />
                   <div className='space-y-2'>
                    <h2 className='text-xl font-bold lg:2xl'>{datas.name}</h2>
                    <p className='text-xl text-gray-600'> ${datas.price}</p>
                   </div>
                  </div>
                   <div>
                    <button onClick={()=> deleltdata (datas.id)} className='btn text-pink-600'>Remove</button>
                   </div>
                </div>
            ))
           }
           <div>
             <button className='btn w-full bg-green-600 text-white text-xl mt-8 lg:2xl'>Totle Price : $ {totalPrice}</button>
           <button onClick={cahakout}  className='btn w-full bg-pink-600 text-white text-2xl mt-8'>ChakOut</button>
           </div>
        </div>
    );
};

export default Addcard;