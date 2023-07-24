'use client'
import React from 'react'

const Collection = () => {
  return (
    <>
      <div className='border-none w-[820px] max-w-[720px] h-[400px] max-h-[350px] fixed top-[5.9rem] left-56 bg-white z-20 rounded-md'>
        <div className='w-full h-full collection-grid py-3 px-5'>
          <div className='animalCategory'>
            <ul className='space-y-3'>
              <li>
                <h1 className='font-roboto font-bold text-xl '>
                  <a href="">Animals</a>
                </h1>
              </li>
              <ul className='space-y-1'>
                <li>
                  <h3 className='font-roboto font-normal text-normal '>
                    <a href="">Dog</a>
                  </h3>
                </li>
                <li>
                <h3 className='font-roboto font-normal text-normal '>
                    <a href="">cat</a>
                  </h3>
                </li>
                <li>
                <h3 className='font-roboto font-normal text-normal '>
                    <a href="">Bear</a>
                  </h3>
                </li>
              </ul>
            </ul>
          </div>
          <div className='natureCategory'>
            <ul className='space-y-3'>
              <li>
                <h1 className='font-roboto font-bold text-xl '>
                  <a href="">season</a>
                </h1>
              </li>
              <ul className='space-y-1'>
                <li>
                  <h3 className='font-roboto font-normal text-normal '>
                    <a href="">spring</a>
                  </h3>
                </li>
                <li>
                <h3 className='font-roboto font-normal text-normal '>
                    <a href="">winter</a>
                  </h3>
                </li>
                <li>
                <h3 className='font-roboto font-normal text-normal '>
                    <a href="">summer</a>
                  </h3>
                </li>
              </ul>
            </ul>
          </div>
          <div className='Technology'>
            <ul className='space-y-3'>
              <li>
                <h1 className='font-roboto font-bold text-xl '>
                  <a href="">Family</a>
                </h1>
              </li>
              <ul className='space-y-1'>
                <li>
                  <h3 className='font-roboto font-normal text-normal '>
                    <a href="">Baby</a>
                  </h3>
                </li>
                <li>
                <h3 className='font-roboto font-normal text-normal '>
                    <a href="">Women</a>
                  </h3>
                </li>
                <li>
                <h3 className='font-roboto font-normal text-normal '>
                    <a href="">Man</a>
                  </h3>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collection
