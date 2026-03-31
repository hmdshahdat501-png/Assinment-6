import React, { use } from 'react';
import Cart from '../Cart/Cart';

const Card = ({res, addprodect, setaddprodect}) => {
    const data = use(res)
    
    return (
        <div className='grid grid-cols-1 container mx-auto gap-6 lg:grid-cols-3'>
          {
          data.map(datas => <Cart
             datas = {datas} 
             addprodect = {addprodect} 
             setaddprodect ={setaddprodect} ></Cart>)
          }
        </div>
    );
};

export default Card;