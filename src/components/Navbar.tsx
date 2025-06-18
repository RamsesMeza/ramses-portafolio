import React from 'react'

function Navbar() {
  return (
    <div className=''>
        <nav className='bg-gray-800 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
            <div className='text-white text-lg font-bold flex items-center'>
                <img src='/logo-2.png' alt='Logo' className='h-8 w-8 inline-block mr-2' />
                <p>Devsarrollos.com</p>
            </div>
            <ul className='flex space-x-4'>
                <li><a href='#' className='text-gray-300 hover:text-white'>Home</a></li>
                <li><a href='#' className='text-gray-300 hover:text-white'>About</a></li>
                <li><a href='#' className='text-gray-300 hover:text-white'>Contact</a></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar