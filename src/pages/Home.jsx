import React from "react"
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { motion } from "framer-motion";
import { GrReactjs } from 'react-icons/gr';
import { BsCodeSlash } from 'react-icons/bs';
import { MdZoomInMap } from 'react-icons/md';
import { PiLinkedinLogoLight} from 'react-icons/pi';
import { BsArrowUpRight} from 'react-icons/bs';
import { AiFillFolderOpen} from 'react-icons/ai';

import my_work from '../assets/my-works.png'

const Home = () => {
  return (
    <div className='text-center  py-1 px-10 xl:h-screen'>
      <h1 className='font-semibold mb-7 text-[2.3rem] text-blackish md:text-[4rem] lg:text-[5rem] xl:text-[6.2rem] text-left'>Front-End Developer.</h1>


      <div className='grid mb-[5rem] grid-cols-1 md:grid-cols-4 gap-2'>


        <div className='bg-grey rounded-lg  p-5 col-span-2' >
          <div className='flex flex-col text-left items-start justify-center py-5 '>

            <h1 className='text-[2rem] font-semibold'>Hey, I'm Taiwo <span class="emoji">👋</span></h1>
            <div className="flex  mt-3">
              <p className="text-sm">I believe that great design starts with an obsession to meet users needs</p>
              <BsArrowUpRight className="rotate-45 text-[2rem] font-bold ml-[50px] w-[50px] md:w-[50px] md:mt-2 md:ml-[100px] lg:ml-[150px]" />
            </div>
          </div>

        </div>

        <div className='bg-grey rounded-lg  p-5 col-span-2' >
          <div className='flex flex-col  '>

            <h3 className="flex items-start justify-start">FEATURED WORK</h3>
            <div className="flex justify-between">
            <p className="text-[2rem] font-semibold ">Case Studies</p>
            <BsArrowUpRight className="rotate-45 text-[2rem] font-bold " />

            </div>
           
            <div className="flex items-center justify-center">
              <img src={my_work} alt="phone" className="w-[200px] h-[110px]"/>
            </div>

          </div>
        </div>

        <div className='bg-grey rounded-lg  p-5 ' >
          <div className='flex flex-col  '>
            <AiFillFolderOpen className="text-[2rem]"/>
            <div className="flex justify-between">
            <p className="text-[2rem] font-semibold text-left ">My Projects</p>
            <BsArrowUpRight className="rotate-45 text-[2rem] font-bold " />

            </div>
          </div>
        </div>

        <div className='bg-grey rounded-lg  p-5' >
          <div className='flex justify-center items-center mt-5'>        
            <PiLinkedinLogoLight className="text-[4rem] font-bold"/>
          </div>
          <div className='flex justify-end items-center mt-5'>        
            <BsArrowUpRight className="text-[1rem] md:text-[2rem] font-bold"/>
          </div>
        </div>
        
        <div className='bg-grey rounded-lg  p-5 col-span-2' >
          <div className='flex text-[1.5rem] md:text-[3rem] justify-around mb-5'>
            <BsCodeSlash />
            <GrReactjs />
            <HiOutlineCubeTransparent />
          </div>
          <div className='flex justify-between '>
            <h2 className="text-[1.5rem] font-medium">See All My Skills</h2>
            <MdZoomInMap className="mt-6"/>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home