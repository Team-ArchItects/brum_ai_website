// import socLogo from "../../images/original.png"
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex flex-col w-screen justify-between">
      <picture className="">
        <source
          srcSet="/assets/footer_white.png"
          media="(prefers-color-scheme: dark)"
        />
        <Image
          src="/assets/footer_black.png"
          alt="Footer graffiti"
          width="800"
          height={100}
        />
        {/* <div className="bg-[url('/assets/footer_black.png')] w-screen h-48"></div> */}
      </picture>
      <div className="flex flex-wrap justify-center space-x-2 items-center text-center">
        <Image
          src="/assets/original.png"
          width={100}
          height={100}
          alt="School of Code logo"
        />
        <Image
          src="/assets/original.png"
          width={100}
          height={100}
          alt="School of Code logo"
        />
        <p className="w-full p-3">Supported by these Amazing Companies</p>
      </div>
      <div className="text-right">
        <p>Contact Us Button</p>
      </div>
      <div className="flex flex-wrap flex-col items-center">
        <div className="p-px bg-black w-10/12 h-0 "></div>
        <div className="w-10/12">
          <p>&copy; Copyright 2023 BrumAI. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
