import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex flex-col  justify-center items-center gap-1 mt-[180px]' >
   <div class="spinner"></div>
    <div className='font-bold'>Loding....</div>
    </div>
  )
}

export default Spinner