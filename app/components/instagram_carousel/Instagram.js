import imageFrame from '../../../public/assets/event1_white.png'

const dummyData = [
    {
        "name": "University Event",
        "date": "2024-10-10",
        "url": "",
        "image": "",
    },
    {
        "name": "Another Event",
        "date": "2024-11-10",
        "url": "",
        "image": "",
    }
]

const Events = () => {
    return (
    <section className="grid grid-cols-2 gap-4 place-content-evenly items-center text-citrus">
      <div className="bg-[url('/assets/ben.png')] bg-cover bg- bg-center w-96 h-96 flex">
      <p className="absolute py-2.5 pl-20 bottom-0 inset-x text-5xl text-center leading-4">21/01/2024</p>
      </div>
      <div className="bg-[url('/assets/sam.png')] bg-cover bg-center w-96 h-96 flex">
      <p className="absolute py-2.5 pl-20 bottom-0 inset-x text-5xl text-center leading-4">21/03/2024</p>
      </div>
    </section>
    );
  }
  
  export default Events;