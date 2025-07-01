import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchData } from '../hooks/fetchData';
import { getPostAnalytics } from '../service/adminServices';

function SalesChart() {

    const { data } = fetchData("analytics", getPostAnalytics,)
    return (
        <>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart data={data?.data?.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSold" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis allowDecimals={false} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip contentStyle={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #cbd5e1',
                            borderRadius: '4px',
                        }} />
                        <Area
                            type="monotone"
                            dataKey="count"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorSold)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default SalesChart