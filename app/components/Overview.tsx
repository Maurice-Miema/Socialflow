'use client'

import {XAxis, ResponsiveContainer, YAxis, BarChart, Bar, Cell, CartesianGrid} from 'recharts'

const data = [
    { name: 'Facebook', value: 70},
    { name: 'LinkedIn', value: 110 },
]

const colors = ['#00000', '#10b981']

export default function Overview() {
    return (
        <div className="w-full sm:h-[16rem] h-70 border border-gray-200 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    layout="horizontal"
                    data={data}
                    barCategoryGap={20}
                >
                    < CartesianGrid 
                        vertical={false} 
                        horizontal={true}
                        // stroke="#d1d5db"
                        strokeWidth={0.5}
                        strokeDasharray="0"
                    />

                    <YAxis 
                        dataKey="value"
                        type="number" 
                        width={30} 
                        stroke='#9ca3af'
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 14 }}
                    />

                    <XAxis 
                        dataKey="name"  
                        type="category"
                        fontSize={14}
                        stroke='#374151'
                        tickLine={false}
                        axisLine={false}
                    />

                    <Bar dataKey="value" radius={[20, 20, 0, 0]} barSize={100}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
