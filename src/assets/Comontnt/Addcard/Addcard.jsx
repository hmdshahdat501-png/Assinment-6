import React from 'react';
import Nodata from '../Nodata/Nodata';



const Addcard = ({ addprodect, setaddprodect }) => {
  
const deleltdata = (id) =>{
    const updectdat = addprodect.filter( scard => scard.id !== id )
    setaddprodect(updectdat)
};

const totalPrice = addprodect.reduce((total, item) => {
    return total + item.price
}, 0)
const cahakout = () => {
    setaddprodect ([])
}

    return (
        <div className='mx-auto max-w-6xl'>
            <h2 className='text-4xl  font-bold'>Your Card</h2>
           {
            addprodect.length === 0 ? <Nodata></Nodata> : addprodect.map((datas, index) => (
                <div key={index} className='flex justify-between items-center bg-gray-200 p-4 rounded-lg mt-4'>
                  <div className='flex gap-6 items-center '>
                     <img className='w-25 bg-white rounded-full p-1' src = {datas.image} alt="" />
                   <div className='space-y-2'>
                    <h2 className='text-3xl font-bold'>{datas.name}</h2>
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
             <button className='btn w-full bg-green-600 text-white text-2xl mt-8'>Totle Price : $ {totalPrice}</button>
           <button onClick={cahakout}  className='btn w-full bg-pink-600 text-white text-2xl mt-8'>ChakOut</button>
           </div>
        </div>
    );
};

export default Addcard;