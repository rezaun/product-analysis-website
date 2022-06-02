import React from 'react';
import { CartesianGrid, Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import './Charts.css'

const charts = () => {
    const data = [
        {
          "name": "Page A",
          "price": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "price": 3000,
          "pv": 1398,
          "amt": 3210
        },
        {
          "name": "Page C",
          "price": 2000,
          "pv": 9800,
          "amt": 6290
        },
        {
          "name": "Page D",
          "price": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "price": 1890,
          "pv": 8800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "price": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "price": 9490,
          "pv": 4300,
          "amt": 2100
        }
      ]
      const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];

    return (
        <>
        <div className='charts'>
            <h2>Line Chart</h2>
                <LineChart width={1100} height={700} data={data}>
                    <Line type="monotone" dataKey="price" stroke="#82ca9d"/>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8"/>
                    <Line type="monotone" dataKey="amt" stroke="tomato"/>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                <h2>Pie Chart</h2>
                <PieChart width={1030} height={550}>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={180} fill="#8884d8" />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={150} outerRadius={200} fill="#82ca9d" label />
                </PieChart>
            </div>
        </>
    );
};

export default charts;