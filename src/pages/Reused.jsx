import React from 'react'

const Reused = ({name,icons}) => {
  return (
    <div className='bg-grey flex flex-col items-center my-[0.5rem] border-2 text-center  border-blk rounded-lg py-[1.3rem] px-[3rem] w-full '> 
        <img className='w-[30px] h-[30px] rounded-sm translate-[-50]' src={icons} alt="" />
        <h1 className='text-blackish font-semibold text-[2rem]'>{name}</h1>  
    </div>
  )
}

export default Reused