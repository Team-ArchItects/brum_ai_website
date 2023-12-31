import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { headerSocials, footerSponsors, pages } from "./data/data";
import Providers from "./providers.js";

const beVietnamPro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Brum.AI",
  description: "The home of AI in the Midlands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overscroll-none">
      <body className={`${beVietnamPro.className} `}>
        <Providers>
          <Header data={headerSocials} pages={pages} />
          {children}
          <Footer data={footerSponsors} />
        </Providers>
      </body>
    </html>
  );
}
