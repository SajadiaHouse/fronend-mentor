import React from 'react'

function ChildBottom() {
  return (
    <div className='flex items-center sm:h-[96px] md:h-[100px]'>
        <div className='flex-1'>
          <span className='text-xs text-gray-400'>Total this month</span>
          <h1 className='text-3xl font-bold'>$478.33</h1>
        </div>
        <div className='flex-1 text-right'>
          <h5 className='text-sm font-medium'>+2.4%</h5>
          <span className='text-xs text-gray-400'>from last month</span>
        </div>
    </div>
  )
}

export default ChildBottom