import React from 'react'
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"

const CourseCard = ({ image, category, title, rating, participants, price }) => {
  return (
    <div className='w-full md:min-w-[15rem] md:max-w-[19rem] p-2 shadow-lg bg-white rounded-md'>
      <img src={image} alt={image} />
      <div className='text-xs text-Teal mt-2'>{category}</div>
      <div className='text-sm font-bold mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>{title}</div>
      <div className='flex item-center justify-between mt-2'>
        <div className='flex items-center gap-2'>
          <div className='bg-Solitude rounded-full p-1'>
            <AiOutlineUser className='text-Teal' />
          </div>
          <div className='text-sm font-bold'>{participants}</div>
        </div>
        <div className='flex items-center gap-2'>
          <div>
            <AiOutlineStar className='text-amber-400 text-lg' />
          </div>
          <div className='text-sm font-bold'>{rating}</div>
        </div>
        <div className='text-sm font-bold flex items-center'>${price}</div>
      </div>
    </div>
  )
}

export default CourseCard
