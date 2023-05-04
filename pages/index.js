import Image from "next/image";
import { Inter } from "next/font/google";
import Navar from "./components/Navbar";
// import HomeCards from "./components/HomeCards";
import Test from "./components/Test";
import gsap from 'gsap';



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  let timeline = gsap.timeline()
  return (
    <main className="text-white flex min-h-screen flex-col items-center justify-between bg-[#00004d]">
      <Navar timeline={timeline}/>
<Test />
      {/* <HomeCards /> */}
    </main>
  );
}

