'use client';

import React from 'react';
import { AreaChart, Area, XAxis, Tooltip,CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { "This year:": 0, Month: "0" },
    { "This year:": 0, Month: "Jan" },
    { "This year:": 0, Month: "Feb" },
    { "This year:": 0, Month: "March" },
    { "This year:": 0, Month: "April" },
    { "This year:": 40, Month: "May" },
    { "This year:": 0, Month: "June" },
    { "This year:": 0, Month: "July" },
    { "This year:": 0, Month: "Aug" },
    { "This year:": 0, Month: "Sept" },
    { "This year:": 0, Month: "Oct" },
    { "This year:": 0, Month: "Nov" },
    { "This year:": 0, Month: "Dec" }
];

export default function Chart() {
    return (
        <ResponsiveContainer width="90%" height={300} className='mx-10'>
            <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" stroke="#8b5cf6" fill="#ddd6fe" strokeWidth={3} dataKey='This year:' />
                <XAxis dataKey="Month" className='text-xs text-gray-400'/>
                <Tooltip />
            </AreaChart>
        </ResponsiveContainer>
    );
}
