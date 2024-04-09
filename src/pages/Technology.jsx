import Navbar from "../components/Navbar"
import MobileNavbar from "../components/MobileNavbar";
import { useState, useEffect} from 'react'
import data from '../../public/data.json'

export default function Technology(){

    const [mobileView, setMobileView] = useState(() => window.innerWidth >= 850 ? false : true)
    window.addEventListener('resize', () => {
      let windowWidth = window.innerWidth;
      windowWidth < 1350 ? setMobileView(true) : setMobileView(false)
    })
  
    const [sideNavbarOpen, setSideNavbarOpen] = useState(false)
    function toggleNavbar(){
      setSideNavbarOpen(prevSidebarOpen => !prevSidebarOpen)
    }

    const technologyObj = data.technology;
    const [displayedTechnology, setDisplayedTechnology] = useState(() => {
        return localStorage.getItem('technology') ? 
        JSON.parse(localStorage.getItem('technology')) :
        technologyObj[0]
    })
    
   useEffect(() => {
    localStorage.setItem('technology', JSON.stringify(displayedTechnology))
   }, [displayedTechnology])
 

    return (
        <div className="technology-element">
            <header className="header-technology">
                {!mobileView ? 
                <Navbar activeLink={'Technology'}/>
                : <MobileNavbar activeLink={'Technology'} isSidebarOpen={sideNavbarOpen} toggleNavbar={toggleNavbar}
                />}
            </header>
            <main className="main-content main-technology">
                <h3 className="title text">
                    <span className="title-span">03</span>
                    Space Launch 101
                </h3>        
                <section className="main-divs-technology">
                    <div className="technology-text">
                        <div className="technology-selection">
                            <button className={`technology-button heading ${displayedTechnology.name === 'Launch vehicle' ? 'active-button' : ''}`}
                            onClick={() => setDisplayedTechnology(technologyObj[0])}
                            >1</button>
                            <button className={`technology-button heading ${displayedTechnology.name === 'Spaceport' ? 'active-button' : ''}`}
                            onClick={() => setDisplayedTechnology(technologyObj[1])}
                            >2</button>
                            <button className={`technology-button heading ${displayedTechnology.name === 'Space capsule' ? 'active-button' : ''}`}
                            onClick={() => setDisplayedTechnology(technologyObj[2])}
                            >3</button>
                        </div>
                        <div className="technology-description">
                            <h2 className="text technology-title">The Technology...</h2>
                            <h1 className="technology-name heading">{displayedTechnology.name}</h1>
                            <p className="content-text technology-bio text">{displayedTechnology.description}</p>
                        </div>
                    </div>
                    <img src={!mobileView ? displayedTechnology.images.portrait : displayedTechnology.images.landscape} alt={displayedTechnology.name} className="technology-img" />                    
                </section>
            </main>
        </div>
    )
}