import React, { use } from 'react';

const Simple = ({crite}) => {
    const data = use(crite)
    return (
        <div className='mx-auto container flex gap-8 justify-center mt-20'>
          {
            data.map(datas => <> 
            <div className={ datas.name === 'Pro' ? 'bg-linear-to-t from-purple-500 to-blue-600 px-20 py-8 text-white space-y-4 rounded-lg' : 'bg-gray-100 rounded-lg border-2 border-gray-300 px-20 py-8 space-y-4'}>
                <h2 className='text-6xl font-bold'>{datas.name}</h2>
            <p className='text-xl'>{datas.description}</p>
            <h2 className='text-4xl font-bold'>$ {datas.price} <span className='text-xl'>/month</span></h2>
           <div>
             {
                datas.features.map(feture => <li className='text-xl'>{feture}</li>)
            }
           </div>
           <button className={datas.buttonText === 'Start Pro Trial' ? 'btn  rounded-full w-full' : 'btn rounded-full bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white w-full'}>{datas.buttonText}</button>
            </div>
            </>)
          }
        </div>
    );
};

export default Simple;