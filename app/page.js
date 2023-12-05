import Image from 'next/image'
import Banner from 'app/components/banner/Banner.js'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
    </main>
  )
}
