import React from 'react'
import { motion } from 'framer-motion'
import { projects } from './constant'


const Projects = () => {
  
  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }
  const containerVariant = {
    hidden: { opacity: 0, x: 75, y: 75 },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  return (

    <section className='py-10 px-10 overflow-hidden'>
      <motion.h2 className='text-[3rem] sm:text-[4rem] font-semibold text-blackish'
      variants={wordVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}
      >My Recent Work</motion.h2>
      <motion.h2 className='text-[2rem] font-semibold text-blackish'
      variants={wordVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}
      >My recent work</motion.h2>

      <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-[2.5rem]  mt-[2rem]'>
        {projects.map((project) => {
          return (
            <motion.article className='bg-grey p-[1.3rem] rounded-[1.5rem] border-2  border-blk'
            variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div>
                <img src={project.imgUrl} alt="" className='rounded-[1.5rem] overflow-hidden w-full h-auto' />
              </div>
              <h3 className='text-blackish'>{project.title}</h3>
              <div className="flex gap-[1rem] mt-[0.7rem]">
                <a href="" className='bg-blk p-[0.5rem] rounded-lg'>Github</a>
                <a href="" className='bg-white text-black p-[0.5rem] rounded-lg'>Live Demo</a>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>


  )
}

export default Projects