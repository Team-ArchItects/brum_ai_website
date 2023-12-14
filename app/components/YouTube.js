import { CardMedia } from "@mui/material";

export default function YouTube() {
  return (

    <>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly mb-10">
    <CardMedia
    component="iframe"
    width="560" height="315"
    allow="autoplay;"
    
    src="https://www.youtube.com/embed/2fg-th5cTpg"
    sx={{
      // auto is the fallback
      
      aspectRatio: "3/2 auto",

    }}

  />
    <CardMedia
    component="iframe"
    width="560" height="315"
    allow="autoplay;"
    
    src="https://www.youtube.com/embed/jtfYKxOjt00"
    sx={{
      // auto is the fallback
      
      aspectRatio: "3/2 auto",

    }}

  />
  </section>
  
</>


  );
}
