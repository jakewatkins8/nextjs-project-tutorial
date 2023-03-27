import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function reservationPage() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className='max-w-screen-2xl m-auto bg-white'>
                <NavBar />
                <div className='border-top h-screen'>
                    <div className='py-9 w-3/5 m-auto'>
                        {/* header */}
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
                        {/* header */}
                        {/* form */}
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
                        {/* form */}
                    </div>
                </div>
            </main>
        </main>
    );
}