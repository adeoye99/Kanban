import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";

function Header() {
  return (
    <div className='flex relative border-[1px] border-gray-400 bg-gray-500 h-20 items-center '>
        <h1 className=' text-sm md:text-white md:text-2xl ml-3 '>Platform Launch</h1>
         <div className='flex flex-row gap-4 absolute right-10 justify-center items-center'>
             <button className='rounded-3xl  text-white bg-slate-blue h-[50px] w-[200px] inline-flex items-center justify-center text-center'> + Add New Task </button> 
             <BiDotsVerticalRounded size = '30px' className='text-white'/>
         </div>
          
    </div>
  )
}

export default Header