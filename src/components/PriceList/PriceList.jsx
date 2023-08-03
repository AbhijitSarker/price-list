import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('pricelist.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div className='mx-12'>
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold p-4 my-10 rounded-xl'>Affordable Prices</h2>
            <div className='grid md:grid-cols-3 gap-7'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;