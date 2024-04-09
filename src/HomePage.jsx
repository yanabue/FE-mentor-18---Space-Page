import { useState } from "react"
import Navbar from './components/Navbar'
import MobileNavbar from "./components/MobileNavbar"

export default function HomePage() {

  const [mobileView, setMobileView] = useState(() => window.innerWidth >= 850 ? false : true)
  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;
    windowWidth < 850 ? setMobileView(true) : setMobileView(false)
  })

  const [sideNavbarOpen, setSideNavbarOpen] = useState(false)
  function toggleNavbar(){
    setSideNavbarOpen(prevSidebarOpen => !prevSidebarOpen)
  }


  return (
    <div className="homepage-element">
      <header className="header-home">
      {!mobileView ? 
        <Navbar activeLink={'Home'}/>
      : <MobileNavbar activeLink={'Home'} toggleNavbar={toggleNavbar} isSidebarOpen={sideNavbarOpen}
      />}
      </header>
    <main className="main">
      <section className="main-divs-home">
        <div className="main-space-home">
          <h5 className="main-h5-home text">So, you want to travel to</h5>
          <h1 className="main-h1-home heading">Space</h1>
          <p className="main-p-home text">
            Let&apos;s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we&apos;ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="main-button-home">
          <button className="explore-button-home heading">Explore</button>
        </div>
      </section>
    </main>
    </div>
  )
}