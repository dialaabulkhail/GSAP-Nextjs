import Image from "next/image";
import { Inter } from "next/font/google";
import Navar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import Test from "./components/Test";
import gsap from 'gsap';
import Cards from "./components/Cards";
import Video from "./components/Video";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  let timeline = gsap.timeline()
  
  return (
    <div className="bg-cover w-full object-cover object-center bg-fixed " style={{backgroundImage : "url('https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"}}>
    <div className=" text-white bg-gradient-to-r from-[#000025] to-[#000069de]">
    <main className="flex flex-col min-h-screen items-center justify-between ">
      <Navar timeline={timeline}/>
<Test /> 
    </main>
    <HomeCards timeline={timeline} />

    <Cards timeline={timeline}/>

    {/* <Video /> */}
    </div>


    </div>
  );
}
