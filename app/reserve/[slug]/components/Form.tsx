import React from 'react'

export default function Form() {
    return (
        <div className='mt-10 flex flex-wrap justify-between w-[660px]'>
            <input type='text' placeholder='First name' className='border rounded p-3 w-80 mb-4' />
            <input type='text' placeholder='Last name' className='border rounded p-3 w-80 mb-4' />
            <input type='text' placeholder='Phone number' className='border rounded p-3 w-80 mb-4' />
            <input type='text' placeholder='Email' className='border rounded p-3 w-80 mb-4' />
            <input type='text' placeholder='Occasion (optional)' className='border rounded p-3 w-80 mb-4' />
            <input type='text' placeholder='Requests (optional)' className='border rounded p-3 w-80 mb-4' />
            <button className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'>Complete reservation</button>
            <p className='mt-4 text-sm'>
                By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Standard text message rates may apply. You may opt out of receiving text messages at any time.
            </p>
        </div>
    )
}
