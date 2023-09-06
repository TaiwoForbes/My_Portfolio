import React,{useEffect} from "react"
import { Link } from "react-router-dom";
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { motion, } from "framer-motion";
import { GrReactjs } from 'react-icons/gr';
import { BsCodeSlash } from 'react-icons/bs';
import { MdZoomInMap } from 'react-icons/md';
import { PiLinkedinLogoLight } from 'react-icons/pi';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillFolderOpen } from 'react-icons/ai';
import my_work from '../assets/my-works.png'



const Home = () => {
  

  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }
  const containerVariant = {
    hidden: { opacity: 0, x: 75, y: 75 },
    visible: { opacity: 1, x: 0, y: 0 },
  }


  return (
    <div className='text-center  py-1 px-10 xl:h-screen overflow-hidden'>
      <motion.h1 className='font-semibold mb-7 text-[2.3rem] text-blackish md:text-[4rem] lg:text-[5rem] xl:text-[6.2rem] text-left'
        variants={wordVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}
      >Front-End Developer.</motion.h1>


      <div className='relative  grid mb-[5rem] grid-cols-1 md:grid-cols-4 gap-2'>

        <motion.div className='bg-grey rounded-lg  p-5 col-span-2 hover:bg-blke transition-all'
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.50 }}
        >
          <div className='flex flex-col text-left items-start justify-center py-5 '>

            <h1 className='text-[2rem] font-semibold'>Hey, I'm Taiwo <span>👋</span></h1>
            <div className="flex  mt-[3rem]">
              <motion.p className="text-md"
                variants={wordVariant}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 1, delay: 0.10 }}
              >I believe that great design starts with an obsession to meet users needs</motion.p>
              <BsArrowUpRight className="rotate-45 text-[2rem] font-bold ml-[50px] w-[50px] md:w-[50px] md:mt-2 md:ml-[100px] lg:ml-[150px]" />
            </div>
          </div>

        </motion.div>

        <motion.div className='bg-grey rounded-lg  p-5 col-span-2 hover:bg-blke transition-all'
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Link to='projects'>
            <div className='flex flex-col'>

              <h3 className="flex items-start justify-start">FEATURED WORK</h3>
              <div className="flex justify-between overflow-hidden">
                <motion.p className="text-[1.5rem] xl:text-[2rem] font-semibold "
                  initial={{ x: -130 }}
                  whileHover={{ x: 0, }}
                  transition={{ duration: 0.5, delay: 0.10 }}

                >View My Case Studies</motion.p>
                <BsArrowUpRight className="rotate-45 text-[2rem] font-bold " />
              </div>

              <div className="flex items-center justify-center overflow-hidden">
                <img src={my_work} alt="phone" className="w-[200px] h-[110px]" />
              </div>

            </div>

          </Link>
        </motion.div>

        <motion.div className='bg-grey rounded-lg  p-5  hover:bg-blke transition-all'
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'

          transition={{ duration: 0.5, delay: 0.20 }}
        >

          <Link to='projects'>
          <motion.div className='flex flex-col'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <AiFillFolderOpen className="text-[2rem]" />
            <motion.div className="flex justify-between items-end mt-[2rem]"
              variants={wordVariant}
              initial='hidden'
              whileInView='visible'

              transition={{ duration: 0.5, delay: 0.20 }}
            >
              <p className="text-[2rem] font-semibold text-left ">My Projects</p>
              <BsArrowUpRight className="rotate-45 text-[2rem] font-bold " />
            </motion.div>
          </motion.div>
          </Link>
          
        </motion.div>

        <motion.div className='bg-grey rounded-lg  p-5 hover:bg-blke transition-all'
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <a href="www.google.com" target="_blank">
            <motion.div

              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className='flex justify-center items-center mt-5 '>
                <PiLinkedinLogoLight className="text-[4rem] font-bold" />
              </div>
              <div className='flex justify-end items-center mt-5'>
                <BsArrowUpRight className="text-[1rem] md:text-[2rem] font-bold" />
              </div>
            </motion.div>
          </a>


        </motion.div>




        <motion.div className='bg-grey rounded-lg  p-5 col-span-2 hover:bg-blke transition-all'
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.30 }}
        >
          <Link to='skills'>
            <div className='flex text-[1.5rem] md:text-[3rem] justify-around mb-5'>
              <BsCodeSlash />
              <GrReactjs />
              <HiOutlineCubeTransparent />
            </div>
            <div className='flex justify-between '>
              <h2 className="text-[1.5rem] font-medium">See All My Skills</h2>

              <MdZoomInMap className="mt-6" />
            </div>
          </Link>
        </motion.div>



      </div>
    </div>
  )
}

export default Home