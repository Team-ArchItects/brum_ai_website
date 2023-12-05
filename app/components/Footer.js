// import socLogo from "../../images/original.png"
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex flex-col w-screen justify-between">
      <picture className=" flex z-0">
        <source
          srcSet="/assets/footer_white.png"
          media="(prefers-color-scheme: dark)"
        />
        <Image
          src="/assets/footer_black.png"
          alt="Footer graffiti"
          width="900"
          height={100}
          className="w-screen h-40"
        />
        {/* <Image
          src="/assets/footer_black.png"
          alt="Footer graffiti"
          width="900"
          height={100}
        />
        <Image
          src="/assets/footer_black.png"
          alt="Footer graffiti"
          width="900"
          height={100}
        /> */}
      </picture>
      <footer className="flex flex-col w-screen justify-between">
        <div className="flex flex-wrap justify-center space-x-2 items-center text-center z-10">
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
        <div className="text-right z-10">
          <p className="mr-10">Contact Us Button</p>
        </div>
        <div className="flex flex-wrap flex-col items-center z-10">
          <div className="p-px bg-black w-10/12 h-0 "></div>
          <div className="w-10/12">
            <p>&copy; Copyright 2023 BrumAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
