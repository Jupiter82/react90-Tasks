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
                        <label className='text-[15px] block w-full mt-2 mb-1 text-left text-[#555] font-bold' htmlFor='gender'>Gender*</label>
                        <div className="flex">
                            <div className="flex items-center me-4">
                                <input id="male" type="radio" value="male" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="female" type="radio" value="female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="other" type="radio" value="other" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                            </div>
                        </div>
                        <label className='text-[15px] block w-full mt-2 mb-1 text-left text-[#555] font-bold' htmlFor='gender'>Your best Subject</label>
                        <div className="flex">
                            <div className="flex items-center me-4">
                                <input id="english" type="checkbox" value="english" name="lang" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">English</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="maths" type="checkbox" value="maths" name="lang" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Math</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="physics" type="checkbox" value="physics" name="lang" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Physics</label>
                            </div>
                        </div>
                        <label className='text-[15px] block w-full mt-2 mb-1 text-left text-[#555] font-bold' htmlFor='firstname'>Enter URL*</label>
                        <input className='block w-full p-2 box-border border border-[#ddd] rounder-sm text-[12px]' type='text' placeholder='Enter the mail' />

                        <div>
                            <button type="reset" value="reset" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handleReset()}>Reset</button>
                            <button type='submit' value='submit' className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={(e) => handleSubmit(e)}>Submit</button>
                        </div>
                    </form>
                </fieldset>
            </div >
        </div >
    )
}

export default create