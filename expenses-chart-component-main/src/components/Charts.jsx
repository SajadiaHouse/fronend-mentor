import React from 'react'
import ChildBottom from './ChildBottom'
import Test from './ChildTop'

function Charts() {
    return (
        <>
            <div className='w-[350px] sm:h-[360px] md:h-[300px] bg-white rounded-xl justify-center p-6 mt-4'>
            <span className='text-2xl font-medium'>Spending - Last 7 days</span>
               <Test />
               <hr className='mx-4' />
                <ChildBottom />
            </div></>
    )
}

export default Charts