import Image from "next/image";
import { Inter } from "next/font/google";
import Navar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import Test from "./components/Test";
import gsap from 'gsap';



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  let timeline = gsap.timeline()
  
  return (
    <div className="bg-[#000025] text-white bg-gradient-to-r from-[#000025] to-[#000069]">
    <main className="flex flex-col min-h-screen items-center justify-between ">
      <Navar timeline={timeline}/>
{/* <Test /> */} 
    </main>
    <HomeCards timeline={timeline} />
    </div>
  );
}

