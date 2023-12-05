import socLogo from "../../images/original.png"
import Image from 'next/image'

export default function Footer() {
    return (
      <section className="flex flex-col gap-4 width-screen h-4 justify-between p-16 bg-navy text-white">
        <div className="flex justify-center space-x-2 items-center">
        <Image  
        src={socLogo}
        width={150}
        height={150}
        alt="School of Code logo"
      />
        <Image  
        src={socLogo}
        width={150}
        height={150}
        alt="School of Code logo"
      />
        </div>
        <div>
        <p>This is the contact button</p>
        </div>
        <div>
        <p>This is the copyright notice</p>
        </div>
      </section>
    )
  }