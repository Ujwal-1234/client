import React from 'react'
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <div className=' p-20 h-screen w-screen fixed top-0 flex flex-wrap items-center justify-center bg-opacity-90 bg-black'>
      <form className=' m-5 bg-slate-600 h-3/4 w-1/2 flex flex-wrap items-center justify-center rounded-lg'>
        <input className=' p-5 block rounded-lg shadow-md shadow-black m-4 w-1/2' type='text' placeholder='Name'/>
        <input className=' p-5 block rounded-lg shadow-md shadow-black m-4 w-1/4' type='text' placeholder='Company'/>
        <input className=' p-5 block rounded-lg shadow-md shadow-black m-4 w-1/4' type='text' placeholder='Phone'/>
        <input className=' p-5 block rounded-lg shadow-md shadow-black m-4 w-1/2' type='text' placeholder='Email'/>
        <textarea className=' p-5 block rounded-lg m-4 shadow-md shadow-black w-1/2' placeholder='Message'/>
        <input className=' p-5 block rounded-lg m-4 shadow-black shadow-md bg-gradient-to-tr from-slate-900 hover:cursor-pointer hover:bg-gradient-to-bl hover:from-slate-900 text-white w-1/2' type='button' value={"SUBMIT"} />
      </form>
      <p className='w-full flex items-center shadow-md shadow-black justify-center text-2xl border-b text-white'><MdEmail className='mr-2' /><span className='hover:cursor-pointer'>email@ProdigiWave.com</span></p>
    </div>
  )
}
