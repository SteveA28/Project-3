import React from 'react'
import bahamas from '../assets/img/bahamas.webp'

export default function home() {
  return (
    <>
    <section className='grid place-items-center'>
        <img src={bahamas} className='w-[85%] rounded-md h-[80%] shadow-md' alt="" />
    </section>
    </>
  )
}
