 import React from 'react'
 import { FaGithubSquare } from "react-icons/fa";
 function Navbar() {
   return (
     <nav className='bg-slate-800 text-white'>
        <div className='mycontainer flex justify-between items-center px-48 py-5 h-14'>
      <div className='logo font-bold text-white text-2xl'>
      <span className='text-green-700'> / &lt;</span>
           
         <span> Pass</span><span className='text-green-500'> OP/ &gt;</span>
        
        </div>
     <ul className='float-right'>
     {/* <li className='flex gap-10'>
     <a className='hover:font-bold hover:bg-blue-600 rounded-2xl' href='/'>Home</a>
     <a className='hover:font-bold hover:bg-blue-600 rounded-2xl' href='#'>About</a>
     <a className='hover:font-bold hover:bg-blue-600 rounded-2xl' href='#'>Contact</a>
    </li> */}
     </ul>
     <button className='bg-green-400 text-black font-bold px-8 py-3 mx-10 rounded-md'>
     <FaGithubSquare className='font-bold w-full h-5' />
     </button>
     </div>
     </nav>
   )
 }
 export default  Navbar;