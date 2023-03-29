import React from 'react'

export default function Header() {
    return (
        <div className=''>
            <h3 className='font-bold'>You're almost done!</h3>
            <div className='mt-5 flex'>
                <img src='https://resizer.otstatic.com/v2/photos/xlarge/1/25170979.jpg' alt='' className='h-18 w-32 rounded' />
                <div className='ml-4'>
                    <h1 className='text-3xl font-bold'>
                        Tin Lizzy's - East Cobb
                    </h1>
                    <div className='flex mt-3'>
                        <p className='mr-6'>Tues, 22, 2023</p>
                        <p className='mr-6'>7:30 PM</p>
                        <p className='mr-6'>3 people</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
