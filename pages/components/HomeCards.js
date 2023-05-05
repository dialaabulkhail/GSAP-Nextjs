import React, { useEffect } from "react";
import Scrolltrigger from "scrolltrigger";



const HomeCards = ({timeline}) => {

  useEffect(()=>{
    var triggers = new Scrolltrigger(window, 'y')
    triggers.add({
      threshold: function () {
        return 1000
      },
      callback: function (direction, trigger) {
        console.log(direction) // 1 is forward, -1 is backwards
        // => 1
      }
    })
  })




  return (
    <div className="px-12 grid justify-center min-h-screen">

      <div className="lg:flex justify-between gap-3 grid lg:px-20 overflow-hidden">
      <div className="wrapper lg:w-[30vw] ">
        <div>
          <img
            src="https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="random"
            className="w-full object-cover object-center shadow-md"
          />
 
                      
          <div className="relative px-4 -mt-16 " >
            <div className="bg-white/30 p-6 shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-900 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-800 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>
             
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div className="mt-1">$1800</div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  4/5 ratings
                </span>
                <span className="text-sm ">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>

    
        </div>
      </div>

      

      <div className="wrapper lg:w-[30vw] ">
        <div>
          <img
            src="https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="random"
            className="w-full object-cover object-center shadow-md"
          />

          <div className="relative px-4 -mt-16 ">
            <div className="bg-white/30 p-6 shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-900 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-800 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div className="mt-1">$1800</div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  4/5 ratings
                </span>
                <span className="text-sm">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="wrapper lg:w-[30vw]">
        <div>
          <img
            src="https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="random"
            className="w-full object-cover object-center shadow-md"
          />

          <div className="relative px-4 -mt-16 ">
            <div className="bg-white/30 p-6 shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-900 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-800 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div className="mt-1">$1800</div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span className="text-sm ">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>



      </div>



    </div>
  );
};

export default HomeCards;
