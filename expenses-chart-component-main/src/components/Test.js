import { BarChart, Bar, XAxis,ResponsiveContainer } from 'recharts';
import React from 'react'
import data from '../data.json'

function Test() {
  
  return (
        <div className='h-[200px]'>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={300}
          height={100}
          data={data}
        >          
          <XAxis dataKey="day" />        
          <Bar dataKey="amount" fill="hsl(10, 79%, 65%)" />
        </BarChart>
      </ResponsiveContainer>
        </div>
       
   
  )
}

export default Test