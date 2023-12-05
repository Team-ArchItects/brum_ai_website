import Image from 'next/image'
import logo from "../../images/BRUMAI_MANDARIN@2x.png"
import meetupLogo from "../../images/meetup_white.svg"
import linkedinLogo from "../../images/linkedin_icon_white.svg"
import discordLogo from "../../images/discord_icon_black.svg"
import xingLogo from "../../images/X_logo_2023_(white).png"
import instagramLogo from "../../images/instagram_icon_black.svg"
import githubLogo from "../../images/github-mark-white.png"
import Link from 'next/link'

export default function Header() {
    return (
      <section className="grid grid-cols-3 gap-4 place-content-evenly items-center width-screen h-4 justify-between p-8 bg-navy text-white">
      <div className="flex justify-start ">
      <p>Menu</p>
      <p>Page Section</p>
      <p>Page Section</p>
      </div>
      <div className="flex justify-center">
      <Image  
        src={logo}
        width={100}
        height={100}
        alt="Brumai Logo in orange"
      />
      </div>
      <div className="flex justify-end space-x-2 items-center">
      <a href='https://www.meetup.com/brum-ai/' target="_blank" rel="noopener noreferrer"> 
      <Image  
        src={meetupLogo}
        width={25}
        height={25}
        alt="LinkedIn logo linking to the BRUM AI LinkedIn page"
      />
      </a>
      <a href='https://www.linkedin.com/company/brumai/' target="_blank" rel="noopener noreferrer"> 
      <Image  
        src={linkedinLogo}
        width={25}
        height={25}
        alt="meetup logo linking to the BRUM AI meetup page"
      />
      </a>
      <a href='https://discord.gg/RJSU67kZcJ' target="_blank" rel="noopener noreferrer"> 
      <Image  
        src={discordLogo}
        width={25}
        height={25}
        alt="Discord logo linking to the BRUM AI discord group"
      />
      </a>
      <a href='https://x.com/brum_AI' target="_blank" rel="noopener noreferrer"> 
      <Image  
        src={xingLogo}
        width={25}
        height={25}
        alt="X logo linking to the BRUM AI X page"
      />
      </a>
      <a href='https://www.linkedin.com/company/brumai/' target="_blank" rel="noopener noreferrer"> 
      <Image  
        src={instagramLogo}
        width={25}
        height={25}
        alt="Instagram logo linking to the BRUM AI instagram page"
      />
      </a>
      </div>
      </section>
    )
  }