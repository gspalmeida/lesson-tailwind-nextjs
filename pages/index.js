import Head from 'next/head'
import '../styles/main.css'
import Navbar from '../components/navbar'


const Logo = () => (
  <>
    <img src="/logo.png" width={150} className="p-2 hidden md:inline-block" />
    <img src="/codar.png" width={50} className="p-2 md:hidden" />
  </>
)

const Banner = () => (
  <img src="/bannerCandidatosDoBrasil.jpg" width={150} className="w-full" />
)

const Header = () => (
  <div className="flex flex-col justify-between items-center bg-blue">
    <Banner />
    <Navbar />
  </div>
)

const Home = () => (
  <div
    className="flex flex-col flex-1"
  >
    <Head>
      <title>Candidatos do Brasil</title>
      <link rel="icon" href="/replaceFavicon.ico" />
    </Head>

    <Header />
  </div>
)

export default Home
