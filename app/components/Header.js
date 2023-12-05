export default function Header() {
    return (
      <section className="grid grid-cols-3 gap-4 place-content-evenly items-center width-screen h-4 justify-between p-8 bg-navy text-white">
      <div className="flex justify-start "><p>Menu</p><p>About Us</p><p>Volunteer</p></div>
      <div className="flex justify-center"><p>Logo</p></div>
      <div className="flex justify-end"><p>EB</p><p>MU</p><p>LI</p><p>DC</p><p>X</p><p>IG</p></div>
        
      </section>
    )
  }