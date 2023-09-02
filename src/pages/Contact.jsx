import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
      <h1 className='px-10  text-left text-blackish font-semibold text-[1.2rem] lg:text-[3rem]'>Get In Touch ✨</h1>
      <h2 className='px-10 text-left text-blackish font-semibold text-[1.2rem] lg:text-[3rem]'>Let's create something Amazing</h2>

      <div className='flex flex-col md:flex-row gap-[3rem] md:justify-between md:h-screen p-10'>
        <div className='flex-[0.2]'>
          <div className="flex flex-col  gap-[1.2rem]">

            <article className='bg-grey border-white border-[0.1rem] w-[100%] py-[2rem] px-[2rem]  rounded-[1.2rem] flex flex-col justify-center items-center border-5 border-transparent'>
              <MdOutlineEmail className='text-[1.5rem] mb-[0.5rem]' />
              <h4 className='font-medium'>Email</h4>
              <h1>soyemihissa2000@gmail.com</h1>
              <a className='mt-[0.7rem] inline-block text-[1rem] text-sky-400/100' href="mailto:soyem" target='_blank'>Send a message</a>

            </article>

            <article className='bg-grey border-white border-[0.1rem] w-[100%] py-[2rem] px-[2rem]  rounded-[1.2rem] flex flex-col justify-center items-center border-5 border-transparent'>
              <MdOutlineEmail />
              <h4 className='font-medium'>Messenger</h4>
              <h1>soyemi hissa</h1>
              <a className='mt-[0.7rem] inline-block text-[1rem] text-sky-400/100' href="https" target='_blank'>Send a message</a>

            </article>

            <article className='bg-grey border-white border-[0.1rem] w-[100%] py-[2rem] px-[2rem]  rounded-[1.2rem] flex flex-col justify-center items-center border-5 border-transparent'>
              <BsWhatsapp />
              <h4 className='font-medium'>Email</h4>
              <h1>0909980877</h1>
              <a className='mt-[0.7rem] inline-block text-[1rem] text-sky-400/100' href="https://api.whatsapp.com/send?phone+234" target='_blank'>Send a message</a>

            </article>

          </div>

        </div>

        <div className='flex-[0.5]'>
          <form className='flex bg-grey p-10 rounded-[1rem] flex-col gap-1.2rem' action="">
            <label htmlFor="">Name</label>
            <input className='100% p-[0.7rem] text-blk mt-[0.2rem] mb-[1rem] rounded-[0.5rem] bg-blk  resize-none' type="text" name='name' />
            <label htmlFor="">E-mail Address</label>
            <input className='100% p-[0.7rem] text-blk mt-[0.2rem] mb-[1rem] rounded-[0.5rem] bg-blk  resize-none' type="text" name='email' />

            <label htmlFor="">Message</label>
            <textarea className='100% p-[0.7rem] text-blk mt-[0.2rem] mb-[1rem] rounded-[0.5rem] bg-blk  resize-none' name="message" id="" cols="30" rows="5" required></textarea>
            <button type='submit' className='100% p-[0.7rem] text-blk mt-[0.2rem] mb-[1rem] rounded-[0.5rem] bg-white font-bold  resize-none'>Send Message</button>
          </form>
        </div>


      </div>
    </div>
  )
}

export default Contact