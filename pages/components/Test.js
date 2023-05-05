import React from 'react'
import { motion } from 'framer-motion';


const Test = () => {
 
    const introHeaderVariants = {
        hide: {
            opacity: 0,
            x: 30,
        },
        show: {
            opacity: 1,
            x: -250,
            transition: {
                duration: 2,
                delay: 0.5,
            },
        },
    };

    const introPictureVariants = {
        hide: {
            opacity: 0,
            x: -100,
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
    <div className='h-screen w-full grid justify-center text-left mt-40'>
            <main className=" ">
                <motion.header
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introHeaderVariants}>
                    <h1 className="md:text-8xl">
                        The Best Pet <br /> in Town
                    </h1>
                    <p>Teting Animation</p>
                </motion.header>
            </main>
</div>


  )
}

export default Test
