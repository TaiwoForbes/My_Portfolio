import React from 'react'
import { motion} from 'framer-motion';
import { Link, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { BiSolidFolderOpen } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdContacts } from 'react-icons/md';


const RESUME = 'https://taiwoforbes.netlify.app/my_resume.docx'
const downloadResume= (url)=>{
    const fileNmae = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download',fileNmae)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
}
const Header = () => {
    const ContainerVariant = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }

    
    return (
        <>
            <motion.header id='top' className='bg-mid-black w-full flex justify-between text-white py-5 px-10 font-montserat'
            variants={ContainerVariant}
            initial='hidden'
            animate = 'visible'
            transition={{ duration: 0.5, delay: 0.10 }}
            >
                <NavLink to="/">
                    <div >
                        <h1 className='font-bold text-[5rem]'>T<span className='text-blackish '>.</span></h1>
                    </div>
                </NavLink>

                <nav className='flex gap-8 justify-center items-center '>
                    <div className='hidden lg:flex gap-7 text-[16px] justify-center items-center '>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'bg-grey py-[3px] px-[12px] rounded-md text-[1.2rem] text-blackish border-2 border-blk ' : null}>
                            <p className=' hover:border-b-2 hover:border-blackish'>Home</p>
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'bg-grey py-[3px] px-[12px] rounded-md text-[1.2rem] text-blackish border-2 border-blk ' : null} >
                            <p className=' hover:border-b-2 hover:border-blackish '>About</p>
                        </NavLink>
                        <NavLink to="/skills" className={({ isActive }) => isActive ? 'bg-grey py-[3px] px-[12px] rounded-md text-[1.2rem] text-blackish border-2 border-blk ' : null}>
                            <p className='hover:border-b-2 hover:border-blackish'>Skills</p>
                        </NavLink>
                        <NavLink to='projects' className={({ isActive }) => isActive ? 'bg-grey py-[3px] px-[12px] rounded-md text-[1.2rem] text-blackish border-2 border-blk' : null}>
                            <p className=' hover:border-b-2 hover:border-blackish'>Projects</p>
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-grey py-[3px] px-[12px] rounded-md text-[1.2rem]  text-blackish border-2 border-blk' : null}>
                            <p className='hover:border-b-2 hover:border-blackish'>Contact</p>
                        </NavLink>
                    </div>

                    <div>
                        <NavLink>
                            <motion.button className='bg-grey text-white p-3 rounded-xl border-2 border-blk'
                            onClick={()=>(downloadResume(RESUME))}
                            animate={{
                                scale:1.1,
                                textShadow: '0 0 10px rgb(255,255,255)',
                                boxShadow: '0 0 10px  rgb(255,255,255)',
                                
                            }}
                            transition={{duration:0.5,delay:0.20,repeat:Infinity,type:'tween',repeatType:'reverse'}}
                           
                            >Download CV</motion.button>
                        </NavLink>
                    </div>

                </nav>
            </motion.header>

            <nav className='flex gap-2 items-center  fixed left-[50%] bottom-5 translate-x-[-50%] text-black mobile_screen_nav'>
                <NavLink to='/' >
                    <HiHome />
                </NavLink>

                <NavLink to="about" >
                    <CgProfile />
                </NavLink>
                <NavLink to='skills' >
                    <HiOutlineLightBulb />
                </NavLink>
                <NavLink to='projects'>
                    <BiSolidFolderOpen />
                </NavLink>
                <NavLink to='contact'>
                    <MdContacts />
                </NavLink>

            </nav>

            <div className='text-white fixed bottom-2  right-1 z-10' >
                <a href="#top"><h2>Back to top</h2></a>
            </div>

        </>
    )
}

export default Header
