import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import my_picture from '../assets/-v6qosx.jpg'
import { AiFillFolderOpen } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import { PiLinkedinLogoLight } from 'react-icons/pi';

const About = () => {
    const wordVariant = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }
    const containerVariant = {
        hidden: { opacity: 0,  y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <section className='pt-5 pb-20 px-10  font-montserat  '>
            <motion.div
                variants={wordVariant}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5, delay: 0.10 }}
            >
                <h1 className='text-center text-[1.2rem] uppercase '>Get to Know</h1>
                <h2 className='text-[3rem] md:text-[4rem] text-center mb-10  font-bold uppercase text-blackish'>About Me</h2>

            </motion.div>

            <div className='flex flex-col  lg:flex-row gap-10'>

                <img src={my_picture} alt="" className="w-[100%] h-auto rounded-[50%] overflow-hidden  hover:rotate-0 transition-all" />

                <div className="content">
                    <div className="grid grid-cols-2 gap-3 ">

                        <div className='col-span-2 ' >
                            <motion.div className='flex flex-col text-left items-start justify-center py-5 '
                                variants={wordVariant}
                                initial='hidden'
                                whileInView='visible'
                                transition={{ duration: 0.5, delay: 0.50 }}
                            >

                                <h1 className='text-[2rem] font-semibold'>Hey, I'm Taiwo <span>👋</span></h1>
                                <div className="flex  mt-3">
                                    <p className="text-sm">I believe that great design starts with an obsession to meet users needs</p>

                                </div>
                            </motion.div>

                        </div>




                        <motion.div className='bg-grey rounded-lg  p-5 hover:bg-blke transition-all'
                            variants={containerVariant}
                            initial='hidden'
                            whileInView='visible'
                            transition={{ duration: 0.5, delay: 0.25 }}

                        >
                            <motion.div
                             whileHover={{ scale: 1.1 }}
                             transition={{ duration: 0.3 }}
                            >
                                <div className='flex justify-center items-center mt-5'>
                                   <a href="https://www.linkedin.com/in/soyemi-hissa-23b64a229/"><PiLinkedinLogoLight className="text-[4rem] font-bold" /></a> 
                                </div>
                                <div className='flex justify-end items-center mt-5'>
                                    <BsArrowUpRight className="text-[1rem] md:text-[2rem] font-bold" />
                                </div>
                            </motion.div>

                        </motion.div>

                            
                        <motion.div className='bg-grey rounded-lg  p-5 hover:bg-blke transition-all '
                            variants={containerVariant}
                            initial='hidden'
                            whileInView='visible'
                            transition={{ duration: 0.5, delay: 0.25 }}

                        >
                            <Link to='/projects'>
                            <motion.div className='flex flex-col '
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            >
                                <AiFillFolderOpen className="text-[2rem]" />
                                <motion.div className="flex justify-between"
                                variants={wordVariant}
                                initial='hidden'
                                whileInView='visible'
                  
                                transition={{ duration: 0.5, delay: 0.20 }}
                                >
                                    <p className="mt-7 font-medium md:text-[1.5rem] md:font-semibold text-left ">My Projects</p>
                                    <BsArrowUpRight className=" mt-10 text-[1.5rem] md:rotate-45 md:text-[2rem] font-bold " />

                                </motion.div>
                            </motion.div>
                                </Link>
                            
                        </motion.div>





                    </div>


                    <motion.p className='mt-[2rem] text-blackish'
                        variants={wordVariant}
                        initial='hidden'
                        whileInView='visible'
                        transition={{ duration: 0.5, delay: 0.10 }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi pariatur vitae illum eos dignissimos, at quasi. Perferendis impedit explicabo sit tenetur, dolor recusandae culpa ea nihil incidunt, aliquid consequuntur quia?
                    </motion.p>

                    <Link to='/contact'>
                        <button className='bg-white text-black p-3 rounded-xl mt-[1rem] border-2 border-blk hover:bg-transparent hover:text-white'>Get In touch</button>
                    </Link>

                </div>

            </div>
        </section>
    )
}

export default About