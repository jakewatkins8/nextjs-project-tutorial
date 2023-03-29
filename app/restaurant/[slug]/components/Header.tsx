export default function Header({ name }: {
  name: string
}) {
    
  
  
  const renderTitle = () => {
    const nameArray = name.split('-')
    // wrap the city name in parentheses:
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`

    // join as a string with whitespace
    return nameArray.join(" ");
  }
  
  
  return (
        <div className='h-96 overflow-hidden'>
        <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-centered'>
          <h1 className='text-7xl text-white capitalize text-shadow text-center'>
            {renderTitle()}
          </h1>
        </div>
      </div>
    );
}