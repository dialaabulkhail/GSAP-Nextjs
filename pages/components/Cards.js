import React from 'react'
import  gsap  from 'gsap'


const Cards = () => {

  return (
    <div>
      
<div className="lg:flex gap-2 justify-center grid lg:px-20 ">
      <div className="wrapper lg:w-[30vw] lg:my-10  transform hover:-translate-y-4 ease-in-out duration-300  delay-2">
          <div className="bg-cover w-full object-cover object-center lg:h-[60vh] h-[40vh]" style={{backgroundImage : "url('https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"}}>
          

            <div className=" lg:h-[60vh] h-[40vh]">
              <div className="bg-black/70 p-6 shadow-lg h-full hover:bg-black/90 ease-in-out duration-300 "> 
                <div className="flex">
                  <span className="bg-teal-200 text-teal-900 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide ">
                    New
                  </span>
                  <div className="ml-2 text-gray-800 uppercase text-xs font-semibold tracking-wider">
                    2 baths &bull; 3 rooms
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight ">
                  A random Title
                </h4>

                <div className="mt-1">$1800</div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    4/5 ratings
                  </span>
                  <span className="text-sm ">(based on 234 ratings)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper lg:w-[30vw] lg:my-10  transform hover:-translate-y-4 ease-in-out duration-300 delay-4">
          <div className="bg-cover w-full object-cover object-center lg:h-[75vh] h-[40vh] " style={{backgroundImage : "url('https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"}}>
          

            <div className=" lg:h-[75vh] h-[40vh]">
              <div className="bg-black/70 p-6 shadow-lg h-full hover:bg-black/90 ease-in-out duration-300">
                <div className="flex">
                  <span className="bg-teal-200 text-teal-900 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide ">
                    New
                  </span>
                  <div className="ml-2 text-gray-800 uppercase text-xs font-semibold tracking-wider">
                    2 baths &bull; 3 rooms
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight ">
                  A random Title
                </h4>

                <div className="mt-1">$1800</div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    4/5 ratings
                  </span>
                  <span className="text-sm ">(based on 234 ratings)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper lg:w-[30vw] lg:my-10  transform hover:-translate-y-4 ease-in-out duration-300 delay-2">
          <div className="bg-cover w-full object-cover object-center lg:h-[68vh] h-[40vh]" style={{backgroundImage : "url('https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"}}>
          

            <div className=" lg:h-[68vh] h-[40vh]">
              <div className="bg-black/70 p-6 shadow-lg h-full hover:bg-black/90 ease-in-out duration-300 ">
                <div className="flex">
                  <span className="bg-teal-200 text-teal-900 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide ">
                    New
                  </span>
                  <div className="ml-2 text-gray-800 uppercase text-xs font-semibold tracking-wider">
                    2 baths &bull; 3 rooms
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight ">
                  A random Title
                </h4>

                <div className="mt-1">$1800</div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    4/5 ratings
                  </span>
                  <span className="text-sm ">(based on 234 ratings)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>



    </div>
  )
}

export default Cards
