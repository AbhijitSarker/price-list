
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const subjectScores = [
        { id: 1, name: "John", phy: 85, chem: 90, math: 78 },
        { id: 2, name: "Alice", phy: 92, chem: 88, math: 95 },
        { id: 3, name: "Bob", phy: 78, chem: 80, math: 85 },
        { id: 4, name: "Emily", phy: 95, chem: 89, math: 92 },
        { id: 5, name: "Michael", phy: 87, chem: 92, math: 81 },
        { id: 6, name: "Sophia", phy: 90, chem: 85, math: 88 },
        { id: 7, name: "Daniel", phy: 82, chem: 75, math: 79 },
        { id: 8, name: "Olivia", phy: 88, chem: 92, math: 94 },
        { id: 9, name: "William", phy: 85, chem: 90, math: 88 },
        { id: 10, name: "Ava", phy: 79, chem: 83, math: 75 },
        { id: 11, name: "James", phy: 91, chem: 86, math: 90 },
        { id: 12, name: "Isabella", phy: 84, chem: 88, math: 92 }
    ];

    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart
                width={1000}
                height={300}
                data={subjectScores}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="phy" fill="#8884d8" />
                <Bar dataKey="chem" fill="#82ca9d" />
                <Bar dataKey="math" fill="#ffc658" />
            </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Chart;