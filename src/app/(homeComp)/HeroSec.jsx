'use client'
import React from 'react'
import SearchBar from './SearchBar'

const HeroSec = () => {
  return (
    <>
      <main className='overflow-x-hidden w-full h-[600px] ' style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2023/06/21/16/26/warnemunde-8079731_1280.jpg)',backgroundPosition:'center' ,backgroundSize:'cover',width:'100%'}}>
          <section className=' overflow-x-hidden w-full h-full flex flex-col justify-center items-start xs:px-5 lg:px-16 space-y-5'>
              <div>
                <h3 className='xs:text-xl sm:text-2xl font-roboto font-normal tracking-wide'>Free stock photos and images</h3>
              </div>
              <div>
                <h1 className='xs:text-2xl sm:text-4xl xs:w-full  md:w-[80%] lg:w-[62%] font-roboto font-bold tracking-wider '>Download creative and amazing photos for your websites and use it. </h1>
              </div>
              <SearchBar/>
          </section>
      </main>
    </>
  )
}

export default HeroSec
