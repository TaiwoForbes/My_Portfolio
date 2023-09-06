import React from 'react'
import { motion} from 'framer-motion';

const Loader = ({isLoading, setIsLoading}) => {
    
    return (
        <div className='bg-black text-white h-screen flex justify-center items-center '>
            <motion.h1 className='font-bold text-[5rem] border-blackish border-4 rounded-full px-[2rem]'
            initial={{opacity:0}}
            animate={{
                opacity:1,

                scale:1.1,
                textShadow: '0 0 10px rgb(255,255,255)',
                boxShadow: '0 0 10px  rgb(255,255,255)',
                
            }}
            transition={{duration:0.5,delay:0.20,repeat:Infinity,type:'tween',repeatType:'reverse'}}
            >T<span className='text-blackish '>.</span></motion.h1>
            <button onClick={()=>setIsLoading(!isLoading)} className='absolute top-9 right-5 text-blackish uppercase border-2 border-blk font-semibold py-1 px-3 rounded-lg text-[1rem]'>skip</button>
           
        </div>
    )
}

export default Loader