import { CardMedia } from "@mui/material";

export default function YouTube() {
  return (

    <>
<section className="text-citrus text-center text-3xl py-2 mt-10 mb-10">
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
      </section>
</>


  );
}
