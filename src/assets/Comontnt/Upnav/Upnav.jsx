import React from 'react';

const Upnav = () => {
    return (
        <div className='bg-linear-to-r from-blue-500 to-purple-500 mt-20'>
            <div className='mx-auto container text-center text-white space-y-3 py-20'>
                <h2 className='text-4xl font-bold lg:5xl'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today. </p>
                <div className='flex justify-center gap-4'>
                    <button className='btn font-normal py-6 rounded-full hover:scale-120'>Explore Products</button>
                    <button className='btn font-normal py-6 rounded-full bg-transparent text-white hover:scale-120'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Upnav;