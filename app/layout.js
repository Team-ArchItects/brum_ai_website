import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { headerSocials, footerSponsors } from './data/data'

const beVietnamPro = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['400'], })

export const metadata = {
  title: 'Brum.AI',
  description: 'The home of AI in the Midlands.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>
      <Header data={headerSocials}/>
      {children}
      <Footer data={footerSponsors}/>
      </body>
    </html>
  )
}
