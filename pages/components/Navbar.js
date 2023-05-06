import React from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import {BiMenu} from 'react-icons/bi'
import Link from 'next/link';
import { useRef, useEffect } from 'react';


const Navbar = ({timeline}) => {
  let logo = useRef(null);
    let menu_items = useRef(null);
    let menu_mobile = useRef(null)

    // useEffect(()=> {
    //     // logo animation
    //     timeline.to(logo,{
    //         delay: 0.1,
    //         duration: 0.9,
    //         opacity: 1,
    //         y: 20
    //     })
    //     // menu animation
    //     timeline.to(menu_items,{
    //       duration: 0.9,
    //       delay: 0.1,
    //       opacity: 1,
    //       y: 20
    //   })
    //   // mobile menu animation
    //     timeline.to(menu_mobile, {
    //       duration: 0.9,
    //         opacity: 1,
    //         y: 20
    //     })
    // })

    useEffect(()=>{
      window.onscroll = function() {myFunction()}
    })

    function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.backgroundColor = 'rgb(255 255 255 / 0.1)' ;
  }


  return(
    <div className=' bg-transparent left-0 py-8 right-0 top-0 fixed
    z-[100] ease-in-out duration-300' id="myBar">
      <div className='flex justify-between px-8 '  >

        {/* logo section */}
        <div className='flex justify-between gap-2 logo' ref={el => logo = el}>
          <div><Link href="/"><img src="/images/logo.svg" width={100} height={100}/></Link></div>
          <div><IoMdArrowDropdown color='white' className=''/></div>
        </div>

        {/* desktop menu */}
        <div className='hidden lg:block'  ref={el => menu_mobile = el}>
          <ul className='flex justify-between gap-6 text-[15px] text-[#FFFFFF80]'>
          <li className='hover:text-white ease-in-out duration-300'><Link href="/Home">Home</Link></li>
          <li className='hover:text-white ease-in-out duration-300'><Link href="/Company">Company</Link></li>
          <li className='hover:text-white ease-in-out duration-300'> <Link href="/Solutions">Solutions</Link></li>
          <li className='hover:text-white ease-in-out duration-300'><Link href="/News">News</Link></li>
          <li className='hover:text-white ease-in-out duration-300'> <Link href="/Contact">Contact</Link></li>
          </ul>
        </div>

        {/* mobile menu */}
        <div className='lg:hidden' ref={el => menu_items = el}>
          <BiMenu color='white' size={30}/>
        </div>
      </div>
    </div>

    
    )
}

export default Navbar;
