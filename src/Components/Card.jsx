import React from 'react'

export const Card = ({header, paragraph}) => {
  return (
    <div className='w-[300px] h-[100px] bg-gray-500 rounded-lg mt-[10px] px-4 py-2'>
       <h2 className='text-white'>{header}</h2>
        <p className='text-white'>{paragraph}</p>
    </div>
  )
}
