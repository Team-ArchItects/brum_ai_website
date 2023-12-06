const Instagram = () => {
    return (
        <section className="text-citrus text-center text-3xl py-2">
            <h1>Image Reel:</h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly">
                <div className="relative">
                    <div className="bg-[url('/assets/ben.png')] bg-contain bg-center bg-no-repeat w-64 md:w-80 lg:w-96 xl:w-102 h-64 md:h-80 lg:h-96 xl:h-102 flex">
                        <p className="py-20 bottom-0 inset-x text-5xl leading-4 absolute m-auto left-0 right-0">21/01/2024</p>
                    </div>
                    </div>
                    <div className="relative">
                    <div className="bg-[url('/assets/sam.png')] bg-contain bg-center bg-no-repeat w-64 md:w-80 lg:w-96 xl:w-102 h-64 md:h-80 lg:h-96 xl:h-102 flex">
                        <p className="py-20 bottom-0 inset-x text-5xl leading-4 absolute m-auto left-0 right-0">21/03/2024</p>
                    </div>
                    </div>
                </section>
    </section>
    );
  }
  
  export default Instagram;