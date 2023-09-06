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
            <motion.article key={project.id} className='bg-grey p-[1rem] relative rounded-[1.5rem] border-2 overflow-y-hidden  border-blk'
            variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div>
                <img src={project.imgUrl} alt="" className=' overflow-hidden w-full h-auto' />
              </div>
              <h3 className='text-blackish text-[1.2rem] uppercase py-2'>{project.title}</h3>

              <div className='border-2 border-blk bg-black inline-block p-[2px] rounded-md'>
                {project.stack}
              </div>
              <div className="flex gap-[1rem] mt-[0.7rem]">
                <motion.a href="" className='bg-black p-[0.5rem] z-10 rounded-lg border-2 border-blk'
                whileHover={{
                  scale:1.1,
                  textShadow: '0 0 10px rgb(255,255,255)',
                  boxShadow: '0 0 10px  rgb(255,255,255)',
                  
              }}
              
              transition={{duration:0.3,delay:0.20}}
             
                >Github</motion.a>

                <motion.a href="" className='bg-white text-black p-[0.5rem] rounded-lg border-2 z-10 border-blk'
                whileHover={{
                  scale:1.1,
                  textShadow: '0 0 10px rgb(255,255,255)',
                  boxShadow: '0 0 10px  rgb(255,255,255)',
                  
              }}
              transition={{duration:0.3,delay:0.20}}
                >Live Demo</motion.a>
              </div>

              <motion.div className='absolute top-0 left-0 right-0 bottom-0 bg-grey p-[1.3rem] rounded-[1.5rem] border-2  border-blk'
              initial = {{opacity:0, y:30}}
              whileHover={{opacity:1, y:0}}
              >
                <h1 className='text-center uppercase border-b-2 border-blackish'>{project.title}</h1>
                <p className='text-blackish'>{project.desc}</p>
              </motion.div>
              
            </motion.article>
          )
        })}
      </div>
    </section>


  )
}

export default Projects