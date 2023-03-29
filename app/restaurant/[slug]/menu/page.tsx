import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const fetchRestaurantItems = async (slug: string) => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            items: true
        }
    })

    if (!restaurant) {
        throw new Error();
    }

    return restaurant.items;
}
export default async function restaurantMenuPage({ params }: {
    params: {
        slug: string
    }
}) {

    const menu = await fetchRestaurantItems(params.slug)

    console.log(menu)

    return (
        <div className='bg-white w-[100%] rounded p-3 shadow'>
            <RestaurantNavBar slug={params.slug}/>
            <Menu menu={menu} />
        </div>
    );
}