import React, { use } from 'react';
import Cart from '../Cart/Cart';

const Card = ({res}) => {
    const data = use(res)
    
    return (
        <div className='grid grid-cols-3 container mx-auto gap-4'>
          {
          data.map(datas => <Cart datas = {datas} ></Cart>)
          }
        </div>
    );
};

export default Card;