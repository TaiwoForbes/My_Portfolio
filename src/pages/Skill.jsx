import React from 'react'
import { motion } from 'framer-motion'
import Reused from './Reused'
import { skills } from './constant'

const Skill = () => {

  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }
  const containerVariant = {
    hidden: { opacity: 0, x: 75, y: 75 },
    visible: { opacity: 1, x: 0, y: 0 },
  }


  console.log(skills);
  return (
    <>
      <motion.h1 className='text-left px-[2rem] font-semibold text-[2rem]  md:text-[3rem] lg:text-[4rem] xl:text-[3rem] text-blackish mb-[1rem]'
        variants={wordVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}
      >Frontend Development</motion.h1>
      <motion.h1 className='text-left px-[2rem] font-semibold text-[2rem] md:text-[3rem] lg:text-[4rem]  xl:text-[3rem] text-blackish mb-[1rem]'
        variants={wordVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}
      >My Skills:</motion.h1>


      <div className='p-[2rem] px-[2rem] overflow-hidden sm:px-[7rem] md:px-[2rem] xl:px-[10rem]'>
        <div className='grid gap-[2rem] sm:grid-cols-2 md:grid-cols-3 xl:gap-[1rem]'>
          {
            skills.map((items) => {
              return (
                <motion.div key={items.name}
                  variants={containerVariant}
                  initial='hidden'
                  whileInView='visible'
                  whileHover={{scale:1.2}}
                  transition={{ duration: 0.5, delay: 0.10 }}
                >
                  <Reused name={items.name} icons={items.icons} />
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Skill