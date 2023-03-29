import Header from "./components/Header";
import RestaurantCard, { RestaurantSearchCardType } from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import { PrismaClient, PRICE } from "@prisma/client"



const prisma = new PrismaClient();


interface SearchParams {
  city?: string,
  cuisine?: string,
  price?: PRICE
}

// get Next js params in props, since this is a page.tsx file

const fetchRestaurantsByCityQuery = (searchParams: SearchParams): Promise<RestaurantSearchCardType[]> => {

  // object to hold WHERE conditions 
  const where: any = {}

  // add each search param conditionally if it is present 
  if (searchParams.city) {
    const location = {
      name: {
        contains: searchParams.city.toLowerCase()
      }
    }

    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase()
      }
    }

    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price
    }

    where.price = price;
  }


  const selectCriteria = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    slug: true,
    location: true,
    price: true,
    reviews: true
  }



  const restaurantsByRegionQuery = prisma.restaurant.findMany({
    where: where,
    select: selectCriteria
  })

  // console.log(`fetched ${restaurantsByRegionQuery?.length || 'no'} restaurants`)

  return restaurantsByRegionQuery;
}


const fetchAllCities = async () => {
  return prisma.location.findMany({
    select: {
      id: true,
      name: true
    }
  });
}

const fetchAllCuisineTypes = async () => {
  return prisma.cuisine.findMany({
    select: {
      id: true,
      name: true
    }
  });
}


export default async function Search({ searchParams }: {
  searchParams: SearchParams
}) {


  const allCities = await fetchAllCities();
  const allCuisines = await fetchAllCuisineTypes();


  const searchedRestaurants = await fetchRestaurantsByCityQuery(searchParams)


  return (
    <>
      {/* NOTE - component has same name but is Search-specific header. */}
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSideBar cities={allCities} cuisines={allCuisines} searchParams={searchParams} />
        <div className='w-5/6'>
          {
            searchedRestaurants.length === 0 ?
              <p>Sorry, no restaurants were found matching your search.</p> :
              searchedRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
          }
        </div>
      </div>
    </>
  );
} 