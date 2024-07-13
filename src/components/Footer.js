import React from 'react'
import { GiSelfLove } from "react-icons/gi";

export default function Footer() {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center my-32 py-4'>
     <div className='logo font-bold text-white text-2xl'>
      <span className='text-green-700'> / &lt;</span>
           
         <span> Pass</span><span className='text-green-500'> OP/ &gt;</span>
         
        </div>
        <div className='flex'> create <GiSelfLove className='flex w-10 h-6 bg-red-500 rounded-full' />codewith Miansaib</div>


    </div>
  )
}
