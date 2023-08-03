import React, { useEffect, useState, PureComponent } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
    const [phone, setPhone] = useState([]);

    useEffect(() => {
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data = setPhone(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                // console.log(loadedData);...
                const phonesData = loadedData.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price,
                    }
                    return phoneInfo;
                })
                setPhone(phonesData)
            });
    }, [])
    return (
        <div>
            <BarChart
                width={550} height={200} data={phone}
            >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="price" fill="#8884d8" />

            </BarChart>
        </div>
    );
};

export default PhoneBar;