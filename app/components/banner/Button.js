import Image from 'next/image';

const Button = () => {
    return (

      <button className="bg-white text-black rounded-full w-40 flex flex-wrap p-2">
        Next Event
        <Image src="/assets/arrow.png" width="20" height="20" alt="Arrow" className="ml-2 mt-1"/>
        </button>

    );
  }
  
  export default Button;