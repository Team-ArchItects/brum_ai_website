import { CardMedia } from "@mui/material";

export default function YouTube() {
  return (

    <>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly mt-10 mb-10">
    <CardMedia
    component="iframe"
    width="560" height="315"
    allow="autoplay;"
    
    src="https://www.youtube.com/embed/t8eQjr9JGM8"
    sx={{
      // auto is the fallback
      
      aspectRatio: "3/2 auto",

    }}

  />
    <CardMedia
    component="iframe"
    width="560" height="315"
    allow="autoplay;"
    
    src="https://www.youtube.com/embed/r4manxX5U-0"
    sx={{
      // auto is the fallback
      
      aspectRatio: "3/2 auto",

    }}

  />
  </section>
  
</>


  );
}
