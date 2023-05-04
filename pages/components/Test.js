import React from 'react'
import { Navbar } from "flowbite-react";
import {IoMdArrowDropdown} from 'react-icons/io'
import {BiMenu} from 'react-icons/bi'
import Link from 'next/link';


const Test = () => {


  return(
    <div className=' felx justify-center bg-transparent left-0 py-8 fixed right-0 top-0'>
      <div className='flex justify-between px-8 '>

        {/* logo section */}
        <div className='flex justify-between gap-2'>
          <div><Link href="/"><img src="/images/logo.svg" width={100} height={100}/></Link></div>
          <div><IoMdArrowDropdown color='white' className='mt-2'/></div>
        </div>

        {/* desktop menu */}
        <div className='hidden lg:block'>
          <ul className='flex justify-between gap-6 text-[15px] text-[#FFFFFF80]'>
          <li className='hover:text-white ease-in-out duration-300'><Link href="/Home">Home</Link></li>
          <li className='hover:text-white ease-in-out duration-300'><Link href="/Company">Company</Link></li>
          <li className='hover:text-white ease-in-out duration-300'> <Link href="/Solutions">Solutions</Link></li>
          <li className='hover:text-white ease-in-out duration-300'><Link href="/News">News</Link></li>
          <li className='hover:text-white ease-in-out duration-300'> <Link href="/Contact">Contact</Link></li>
          </ul>
        </div>

        {/* mobile menu */}
        <div className='lg:hidden'>
          <BiMenu color='white' size={30}/>
        </div>
      </div>
    </div>

    
    )
}

export default Test;
