import React from 'react'
import { Link } from '@mui/material'



const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-red-300 shadow-md text-black w-full p-4'> 
        <div className='font-lobster text-3xl'>
            <Link href='/' underline='none' color='inherit'>THE ANNIVERSARY</Link>
        </div>
        <div className='flex gap-4 font-leaguespartan'>
            <Link className='hover:text-red-600 hover:underline' href='/photos' underline='none' color="inherit">PHOTOS</Link>
            <Link className='hover:text-red-600 hover:underline' href='/letter' underline='none' color="inherit">LETTER</Link>
        </div>
    </div>
  )
}

export default Navbar