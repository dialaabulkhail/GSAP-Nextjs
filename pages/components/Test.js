import React from 'react'
import { motion } from 'framer-motion';
import pets from '../../public/images/logo.svg'
import Image from 'next/image';
import  gsap  from 'gsap';
import {ScrollTrigger} from 'gsap'
import { useEffect } from 'react';

const Test = () => {
 
    const introHeaderVariants = {
        hide: {
            opacity: 0,
            x: -500,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                delay: 2,
            },
        },
    };

    const introPictureVariants = {
        hide: {
            opacity: 0,
            x: 500,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
            },
        },
    };

  return (
    <div>
      <div className="flex h-[36rem] w-full flex-col items-center justify-center overflow-x-clip bg-secondary text-light md:h-[90vh]">
         
            <main className="relative flex w-full grow items-start justify-center py-12 px-4 md:items-center md:justify-start md:px-12">
                <motion.header
                    className=
                        "z-10 flex flex-col gap-4 md:-mt-36"
                       
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introHeaderVariants}>
                    <h1 className="text-center text-5xl md:text-start md:text-8xl">
                        The Best Pet <br /> Groomers <br /> in Town
                    </h1>
                    <p className='text-3xl font-light'>
                        For a pawfect look and feel!
                    </p>
                </motion.header>
                
            </main>
        </div>
        <motion.div
                    className="absolute right-0 w-full  z-10 "
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introPictureVariants}>
                    <Image src={pets} width={100} height={100} />
                </motion.div>

</div>


  )
}

export default Test
