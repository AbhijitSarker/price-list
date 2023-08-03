import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex'>
            <ShieldCheckIcon className="h-6 w-6 text-green-700 mr-2" />
            <span className=''>{feature}</span>
        </div>
    );
};

export default Feature;