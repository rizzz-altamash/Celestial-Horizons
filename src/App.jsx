import './App.css'
import useSmoothScroll from './comps/SmoothScroll'
import Navbar from './comps/Navbar'
import Hero from './comps/Hero'
import StarsPage from './comps/StarsPage'
import ConstellationsPage from './comps/Constellations'
import GalaxiesPage from './comps/Galaxies'
import CosmicAcademyPage from './comps/CosmicAcademy'
import Footer from './comps/Footer'

function App() {

  useSmoothScroll(3);

  return (
    <>
    <Navbar/>
    <Hero/>
    <StarsPage/>
    <ConstellationsPage/>
    <GalaxiesPage/>
    <CosmicAcademyPage/>
    <Footer/>
    </>
  )
} 

export default App 
