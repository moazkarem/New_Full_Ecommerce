import React from 'react'
import img1 from '../assets/divider/divid.svg'
const Divider = ({title}) => {
  return (
    <div className='flex justify-between w-[80%] mx-auto  items-center'>
        <div className='flex justify-end w-[50%]'>
        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
        </div>
        <div className='flex justify-end w-[50%]'>
        <img src={img1} alt='image diveder'/>
        </div>
    </div>
  )
}

export default Divider