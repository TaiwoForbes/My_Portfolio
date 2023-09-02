import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMdHome } from 'react-icons/Io';
import { CgProfile } from 'react-icons/cg';
import { BiSolidFolderOpen } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdContacts } from 'react-icons/md';

const Header = () => {
    return (
        <>
            <div className='bg-mid-black w-full flex justify-between text-white py-5 px-10 font-montserat '>
                <NavLink to="/">
                    <div >
                        <h1 className='font-bold text-[5rem]'>T<span>.</span></h1>
                    </div>

                </NavLink>

                <div className='flex gap-10 justify-center items-center '>
                    <div className='hidden lg:flex gap-7 text-[16px] justify-center items-center '>
                    <NavLink>
                        <Link to='/'>Home</Link>
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to="/skills">
                        Skills
                    </NavLink>
                    <NavLink>
                        <a href="">Project</a>
                    </NavLink>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                    </div>
                    
                    <div>
                    <NavLink>
                        <button className='bg-white text-black p-3 rounded-xl'>Get In touch</button>
                    </NavLink>
                    </div>
                    
                </div>
            </div>

            <div className='flex gap-2 items-center  fixed left-[50%] bottom-5 translate-x-[-50%] text-black mobile_screen_nav'>
                <NavLink>       
                        <IoMdHome />
                </NavLink>
                
                <NavLink to="/Skills">
                    <CgProfile />
                </NavLink>
                <NavLink>
                    <HiOutlineLightBulb />
                </NavLink>
                <NavLink>
                    <BiSolidFolderOpen />
                </NavLink>
                <NavLink>
                    <MdContacts />
                </NavLink>

            </div>

        </>
    )
}

export default Header