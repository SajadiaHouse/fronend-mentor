import React from 'react'

function Header() {
  return (
  <>
      <div className="w-[350px] h-24 rounded-xl  flex  text-white px-4 items-center" style={{background:'hsl(10, 79%, 65%)'}}>
          <div className='flex-1 text-xs'>
            My Balance 
            <h1 className='text-2xl font-medium'>$921.48</h1>
          </div>
          <div className='flex-1 grid justify-items-end'>
          <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
          </div>
        </div>
  </>
  )
}

export default Header