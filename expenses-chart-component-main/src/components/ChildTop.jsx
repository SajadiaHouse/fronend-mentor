import React, { useState } from 'react';
import data from '../data.json';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-black text-white rounded p-1">
        <p className="label">{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};


const ChildTop = () => {
  const [cdata, setCdata] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const [posData, setposData]=useState({})

  const handleClick = (cdata, index) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];
   return (
    <div className='md:h-[150px] sm:h-[200px]'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={100} data={data}>
          <Tooltip content={<CustomTooltip />} 
          position={{ x: posData.x, y: posData.y }}
          cursor={{fill: 'transparent'}}
          />
          <XAxis
            dataKey="day"
            tick={{ fill: 'gray', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="amount" onClick={handleClick}>
            {cdata.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'}
                key={`cell-${index}`}
                onMouseOver={(data) => {
                  setposData(data); // Update the state with setPosData
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChildTop;
