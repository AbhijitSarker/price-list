import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-purple-300 p-4 rounded-xl flex flex-col'>
            <h2 className='text-purple-950 text-center'>
                <span className='text-5xl font-extrabold '>{price.price}</span>
                <span className='font-bold'>/Month</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-5'>{price.name}</h5>

            <h6 className='text-2xl underline mb-2'>Features:</h6>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }

            <button className='w-full text-white hover:bg-purple-600 bg-green-700 mt-auto py-2 rounded-xl to-white font-bold' >Buy Now</button>
        </div>
    );
};

export default PriceCard;