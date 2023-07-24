"use client"
import React from 'react'
const ImgCard = ({url}) => {
  return (
    <>
      <div className='w-full h-full'>
        <a href="" className='w-full h-full bg-center bg-cover bg-no-repeat'>
          <img src={url.url}  alt="" className='w-full h-full' />
        </a>
      </div>
    </>
  )
}

export default ImgCard
