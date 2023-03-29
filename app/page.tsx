import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import { PrismaClient, Cuisine, Location, PRICE, Review } from "@prisma/client"

// File based routing in Next:
// The 'page.tsx' file located in the root of the /app directory will render at the root of where the app is being served.


// This is a server component
// It is one by default - it has no "use client" nor client component characteristics like handlers, hooks, etc.


// declare this custom interface for the data to show on a res. card
export interface RestaurantCardType {
    id: number;
    name: string;
    main_image: string;
    cuisine: Cuisine;
    location: Location;
    price: PRICE;
    slug: string;
    reviews: Review[]
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
    
    // Select only the below fields in the findMany()
    const restaurants = await prisma.restaurant.findMany({
        select: {
            id: true,
            name: true,
            main_image: true,
            cuisine: true,
            slug: true,
            location: true,
            price: true,
            reviews: true
        }
    });
    return restaurants;
}

// an async FC? Hm.

export default async function Home() {


    const restaurants = await fetchRestaurants()

    // Logs on server - because this is a server component.
    // console.log({ restaurants })

    return (
        <main>
            <Header />
            <div className='py-3 px-36 mt-10 flex flex-wrap'>
                {restaurants.map(restaurant => {
                    return <RestaurantCard restaurant={restaurant}/>
                })}
            </div>

        </main>
    )
}