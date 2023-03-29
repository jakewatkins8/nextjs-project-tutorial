import Link from "next/link";
import { PRICE } from "@prisma/client"

export default function SearchSideBar({
    cities, cuisines, searchParams
}: {
    cities: {id: number, name: string}[]
    cuisines: {id: number, name: string}[],
    searchParams: { city?: string, cuisine?: string, price?: PRICE }
}) {


    const prices = [
        {
            price: PRICE.CHEAP,
            label: "$",
            className: 'border-t border-b border-l w-full text-center text-reg font-light rounded-l p-2'
        },
        {
            price: PRICE.REGULAR,
            label: "$$",
            className: 'border w-full text-center text-reg font-light p-2'
        },
        {
            price: PRICE.EXPENSIVE,
            label: "$$$",
            className: 'border-r border-t border-b w-full text-center text-reg font-light rounded-r p-2'
        }
    ]


    return (
        <div className='w-1/5'>
            <div className='border-b pb-4 flex flex-col'>
                <h1 className='mb-2'>Region</h1>
                {
                    cities.map(city => {
                        return <Link href={
                            {
                                pathname: '/search',
                                query: {
                                    ...searchParams,
                                    city: city.name
                                }
                            }
                        } key={city.id} className='font-light text-reg capitalize'>
                            {city.name}
                        </Link>
                    })
                }
            </div>

            <div className='border-b pb-4 mt-3 flex flex-col'>
                <h1 className='mb-2'>Cuisine</h1>
                {
                    cuisines.map(cuisine => {
                        return <Link href={
                            {
                                pathname: "/search",
                                query: {
                                    ...searchParams,
                                    cuisine: cuisine.name
                                }

                            }
                        } key={cuisine.id} className='font-light text-reg capitalize'>
                            {cuisine.name}
                        </Link>
                    })
                }
            </div>

            <div className='mt-3 pb-4'>
                <h1 className='mb-2'>Price</h1>
                <div className='flex'>
                    {
                        prices.map(({ price, label, className }) => {
                            return <Link href={
                                {
                                    pathname: "/search",
                                    query: {
                                        ...searchParams,
                                        price: price
                                    }
                                }
                            }
                            className={className}
                            >
                                {label}
                            </Link>
                        })
                    }
                    
                    {/* <Link href={
                        {
                            pathname: "/search",
                            query: {
                                ...searchParams,
                                price: PRICE.CHEAP
                            }
                        }
                    } className='border-t border-b border-l w-full text-reg font-light rounded-l p-2'>$</Link>
                    <Link href={
                        {
                            pathname: "/search",
                            query: {
                                ...searchParams,
                                price: PRICE.REGULAR
                            }
                        }
                    } className='border w-full text-reg font-light p-2'>$$</Link>
                    <Link href={
                        {
                            pathname: "/search",
                            query: {
                                ...searchParams,
                                price: PRICE.EXPENSIVE
                            }
                        }
                    } className='border-r border-t border-b w-full text-reg font-light rounded-r p-2'>$$$</Link> */}
                </div>
            </div>
        </div>
    );
}