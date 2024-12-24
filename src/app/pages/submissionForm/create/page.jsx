'use client'
import React, { useState } from 'react'
function create() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: ""
    })
    return (
        <div className="bg-[#f3f3f3]">
            <div className='bg-white rounded-lg shadow-lg px-[10px] py-[20px] transition-transform duration-200 w-[500px] text-center m-auto mt-[20px]' >
                <h2 className='text-2xl text-center text-[#327c35]'>Form in React</h2>
                <fieldset className='border-none'>
                    <form>
                        <label className='text-[15px] block w-full mt-2 mb-1 text-left text-[#555] font-bold' htmlFor='firstname'>First Name*</label>
                        <input className='block w-full p-2 box-border border border-[#ddd] rounder-sm text-[12px]' type='text' placeholder='Enter First Name' />
                        <label className='text-[15px] block w-full mt-2 mb-1 text-left text-[#555] font-bold' htmlFor='lastname'>Last Name*</label>
                        <input className='block w-full p-2 box-border border border-[#ddd] rounder-sm text-[12px]' type='text' placeholder='Enter Last Name' />
                        <label className='text-[15px] block w-full mt-2 mb-1 text-left text-[#555] font-bold' htmlFor='email'>Enter Email*</label>
                        <input className='block w-full p-2 box-border border border-[#ddd] rounder-sm text-[12px]' type='email' placeholder='Enter Email' />
                        <label className='text-[15px] block w-full mt-2 mb-1 text-left text-[#555] font-bold' htmlFor='number'>Contact*</label>
                        <input className='block w-full p-2 box-border border border-[#ddd] rounder-sm text-[12px]' type='number' placeholder='Enter Contact' />
                        <button className='p-[15px]' type='reset' value='reset' onClick={() => handleReset()}> Reset</button>
                        <button type='submit' value='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </fieldset>
            </div >
        </div >
    )
}

export default create