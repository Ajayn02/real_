import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function UserGrowthChart() {
  const data = [
    { month: 'Jan', users: 120 },
    { month: 'Feb', users: 200 },
    { month: 'Mar', users: 250 },
    { month: 'Apr', users: 300 },
    { month: 'May', users: 400 },
    { month: 'Jun', users: 480 },
  ];
  return (
    <>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default UserGrowthChart