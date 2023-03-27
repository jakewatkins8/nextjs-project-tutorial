import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import Rating from "./components/Rating";
import RestaurantNavBar from "./components/RestaurantNavbar";
import Title from "./components/Title";

export default function RestaurantDetails() {
return (<main className="bg-gray-100 min-h-screen w-screen">
    <main className='max-w-screen-2xl m-auto bg-white'>
      <NavBar />
      <Header />
      {/* description portion */}
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        <div className='bg-white w-[70%] rounded p-3 shadow'>
          <RestaurantNavBar />
          <Title />
          <Rating />
          {/* description */}
          <div className='mt-4'>
            <p className='text-lg font-light'>
              In 2005 four longtime college friends opened Tin Lizzy’s in Atlanta’s Buckhead neighborhood, giving their guests a unique taqueria with service rooted in genuine hospitality. Tin Lizzy’s quickly became a popular place to work and to meet friends for refreshing margaritas and delicious FlexMex cuisine. Soon after, other neighborhoods wanted their own Tin Lizzy’s. We are excited to bring our passion for hospitality and “friends serving friends” mission to new neighborhoods.
            </p>
          </div>
          {/* description */}
          {/* images */}
          <div>
            <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
              7 photos
            </h1>
            <div className='flex flex-wrap'>
              <img className='w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/1/25170980.jpg' alt='' />
              <img className='w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/1/25170982.jpg' alt='' />
              <img className='w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/1/47339256.jpg' alt='' />
              <img className='w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/1/47339257.jpg' alt='' />
              <img className='w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/1/47339255.jpg' alt='' />
            </div>
          </div>
          {/* images */}
          {/* reviews */}
          <div>
            <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
              What 100 people are saying
            </h1>
            <div>
              {/* review card */}
              <div className="border-b pb-7 mb-7">
                <div className='flex'>
                  <div className='w-1/6 flex flex-col items-center'>
                    <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
                      <h2 className='text-white text-2xl'>
                        MJ
                      </h2>
                    </div>
                    <p className='text-center'>Michael Jordan</p>
                  </div>
                  <div className='ml-10 w-5/6'>
                    <div className='flex items-center'>
                      <div className='flex mr-5'>
                        *****
                      </div>
                    </div>
                    <div className='mt-5'>
                      <p className='text-lg font-light'>
                      Were short staffed but waitresses did everything they could to stay on top of their tables. The food was very good and prices were very reasonable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* review card */}
            </div>
          </div>
          {/* reviews */}
        </div>
        {/* Reservation portion */}
        <div className='w-[27%] relative text-reg'>
          <div className='fixed w-[15%] bg-white rounded p-3 shadow'>
            <div className='text-center border-b pb-2 font-bold'>
              <h4 className='mr-7 text-lg'>
                Make a Reservation
              </h4>
            </div>
            <div className='my-3 flex flex-col'>
              <label htmlFor=''>
                Party Size
              </label>
              <select name='' id='' className='py-3 border-b font-light'>
                <option value="">1 person</option>
                <option value="">2 people</option>
              </select>
            </div>
            <div className='flex justify-between'>
              <div className='flex flex-col w-[48%]'>
                <label htmlFor=''>Date</label>
                <input type='text' className='py-3 border-b font-light w-28' />
              </div>
              <div className='flex flex-col w-[48%]'>
                <label htmlFor=''>Time</label>
                <select name='' id='' className='py-3 border-b font-light'>
                  <option>7:30 AM</option>
                  <option>9:30 AM</option>
                </select>
              </div>
            </div>
            <div className='mt-5'>
              <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>Find a Time</button>
            </div>
          </div>
        </div>
        {/* Reservation portion */}
      </div>
      {/* description portion */}

    </main>
  </main>);
}