'use client'
import React,{useState} from 'react'
import ResponsiveHeader from './ResponsiveHeader'

const Header = () => {
  return (
    <>
        <header className='w-full py-7 px-6 flex justify-between items-center bg-white fixed top-0 left-0 z-20 lg:px-16'>
          <div>
            <a href="#Logo" className='font-sans font-bold text-2xl tracking-wider'>PictureWorld</a>
          </div>
          <nav className=' lg:space-x-5 xs:hidden md:flex justify-center items-center space-x-3 '>
            <ul className='flex justify-center items-center space-x-4 md:space-x-10'>
              <li className='space-x-1'>
                <a href="" className='font-serif font-normal text-lg tracking-wide'>Collection</a>
                <i className="bi bi-chevron-down cursor-pointer"></i>
              </li>
              <li>
                <a href="" className='font-serif font-normal text-lg tracking-wide'>NewPhotos</a>
              </li>
              <li className='relative'>
                <div className='before:border-black border-[0.10rem]  h-[2.2rem] absolute -left-6 top-[2px] rounded-lg'></div>
                <button className='w-40 lg:w-48 border-[1.5px] border-black rounded-md px-2 py-[0.18rem]'>
                  <a href="" className='font-serif font-normal text-lg tracking-wide'>BecomeMember</a>
                </button>
              </li>
            </ul>
            <div>
              <button className=' border-none outline-none bg-green-500 rounded-md px-3 py-1 hover:bg-green-700 hover:transition-all'>
                <a href="" className='font-serif font-normal text-lg tracking-wide text-white'>Login</a>
              </button>
            </div>
          </nav>
          <div className='sm:block md:hidden'>
            <button>
              <i className="bi bi-list text-4xl"></i>
            </button>
          </div>
          {/* <ResponsiveHeader hide={hide}/> */}
        </header>
    </>
  )
}

export default Header
