import SearchBar from "./SearchBar";


// Server component - no 'use client' or use of hooks, browser APIs, etc.
// <SearchBar /> below is a client component - it uses hooks
// A client component can render server components ONLY if they are just children of the client component (?)

export default function Header() {
    return (
    <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
        <div className='text-center mt-10'>
            <h1 className='text-white text-5xl font-bold mb-2'>
                Find your table for any occasion
            </h1>
            <SearchBar />
        </div>
    </div>);
}