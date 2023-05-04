import React from 'react'
import { Navbar } from "flowbite-react";
  


const Test = () => {
  return(
    <div className='w-full  felx justify-center bg-white'>
      <div className='flex justify-between h-[60px] top-0 sticky place-content-center p-8'>
        <div className=' flex justify-between gap-2'>
          <img src="/"/>
          <div>mega menu</div>
        </div>
        <div >
          <ul className='flex justify-between gap-2'>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Test
