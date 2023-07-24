

import Dropzone from '@/components/Dropzone'
import React from 'react'
const UploadImage = () => {

  return (
    <div className='flex justify-center w-full'>
      <div className='flex justify-center items-center w-4/5'>
          <Dropzone  className='mt-5 border rounded-md border-dotted border-slate-500 p-10 '/>
      </div>
    </div>
  )
}

export default UploadImage