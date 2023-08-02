"use client"
import React, { useState } from 'react';

export default function Quantity() {

    const [num, setNum]=useState(1);

  return (
    <div className='flex gap-x-4'>
      {/* subtract */}
      <div className='h-6 w-6 font-medium text-xl rounded-full border flex items-center
       justify-center hover:bg-gray-100 cursor-pointer' onClick={()=>{
        setNum(num<=1? 1 : num - 1)
       }}>
        -
      </div>
      <span>{num}</span>
      <div className='h-6 w-6 font-medium text-xl  rounded-full border flex items-center
       justify-center hover:bg-gray-100 cursor-pointer' onClick={()=>{
        setNum(num + 1)
      }}>
        +
      </div>

    </div>
  )
}

