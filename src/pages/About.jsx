import React from 'react'
import { Link } from 'react-router-dom';
import my_picture from '../assets/-v6qosx.jpg'
import { AiFillFolderOpen } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import { PiLinkedinLogoLight } from 'react-icons/pi';

const About = () => {
    return (
        <section className='pt-5 pb-20 px-10  font-montserat  '>
            <h1 className='text-center text-[1.2rem] uppercase '>Get to Know</h1>
            <h2 className='text-[3rem] md:text-[4rem] text-center mb-10  font-bold uppercase text-blackish'>About Me</h2>

            <div className='flex flex-col  lg:flex-row gap-10'>
               
                    <img src={my_picture} alt="" className="w-[100%] h-auto rounded-[50%] overflow-hidden  hover:rotate-0 transition-all" />

                

                <div className="content">
                    <div className="grid grid-cols-2 gap-3 ">

                        <div className='col-span-2 ' >
                            <div className='flex flex-col text-left items-start justify-center py-5 '>

                                <h1 className='text-[2rem] font-semibold'>Hey, I'm Taiwo <span class="emoji">👋</span></h1>
                                <div className="flex  mt-3">
                                    <p className="text-sm">I believe that great design starts with an obsession to meet users needs</p>

                                </div>
                            </div>

                        </div>




                        <div className='bg-grey rounded-lg  p-5' >
                            <div className='flex justify-center items-center mt-5'>
                                <PiLinkedinLogoLight className="text-[4rem] font-bold" />
                            </div>
                            <div className='flex justify-end items-center mt-5'>
                                <BsArrowUpRight className="text-[1rem] md:text-[2rem] font-bold" />
                            </div>
                        </div>


                        <div className='bg-grey rounded-lg  p-5 ' >
                            <div className='flex flex-col  '>
                                <AiFillFolderOpen className="text-[2rem]" />
                                <div className="flex justify-between">
                                    <p className="mt-7 font-medium md:text-[1.5rem] md:font-semibold text-left ">My Projects</p>
                                    <BsArrowUpRight className=" mt-10 text-[1.5rem] md:rotate-45 md:text-[2rem] font-bold " />

                                </div>
                            </div>
                        </div>





                    </div>


                    <p className='mt-[2rem] text-blackish'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi pariatur vitae illum eos dignissimos, at quasi. Perferendis impedit explicabo sit tenetur, dolor recusandae culpa ea nihil incidunt, aliquid consequuntur quia?
                    </p>

                    <Link >
                        <button className='bg-white text-black p-3 rounded-xl mt-[1rem]'>Get In touch</button>
                    </Link>

                </div>

            </div>
        </section>
    )
}

export default About