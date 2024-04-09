import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import data from '../../public/data.json'

export default function Destination(){
    
    const [mobileView, setMobileView] = useState(() => window.innerWidth >= 850 ? false : true)
    window.addEventListener('resize', () => {
      let windowWidth = window.innerWidth;
      windowWidth < 850 ? setMobileView(true) : setMobileView(false)
    })
  
    const [sideNavbarOpen, setSideNavbarOpen] = useState(false)
    function toggleNavbar(){
      setSideNavbarOpen(prevSidebarOpen => !prevSidebarOpen)
    }

    const destinationObj = data.destinations;
    const [displayedPlanetObj, setDisplayedPlanet] = useState(() => {
        return localStorage.getItem('planet') ? 
        JSON.parse(localStorage.getItem('planet')) :
        destinationObj[0]
    })
    
   useEffect(() => {
    localStorage.setItem('planet', JSON.stringify(displayedPlanetObj))
   }, [displayedPlanetObj])
  
    return (
    <div className="destination-element">
            <header className="header-home">
        {!mobileView ? 
            <Navbar activeLink={'Destination'}/>
            : <MobileNavbar activeLink={'Destination'} toggleNavbar={toggleNavbar} isSidebarOpen={sideNavbarOpen}
        />}
        </header>
        <main className="main-content">
                    <h3 className="title text">
                        <span className="title-span">01</span>
                        Pick your destination
                    </h3>
            <section className="main-divs-destination">
                <div className="planet-img-destination">
                    <img src={displayedPlanetObj.images.png} alt={`${displayedPlanetObj.name} image`} className="planet-img" />
                </div>
                <div className="planet-selection-destination">
                    <div className="planet-buttons-destination">
                        <button className={`moon-button text ${displayedPlanetObj.name === 'Moon' ? 'active-nav-link' : ''}`} onClick={() => setDisplayedPlanet(destinationObj[0])}>Moon</button>
                        <button className={`mars-button text ${displayedPlanetObj.name === 'Mars' ? 'active-nav-link' : ''}`} onClick={() => setDisplayedPlanet(destinationObj[1])}>Mars</button>
                        <button className={`europa-button text ${displayedPlanetObj.name === 'Europa' ? 'active-nav-link' : ''}`} onClick={() => setDisplayedPlanet(destinationObj[2])}>Europa</button>
                        <button className={`titan-button text ${displayedPlanetObj.name === 'Titan' ? 'active-nav-link' : ''}`} onClick={() => setDisplayedPlanet(destinationObj[3])}>Titan</button>
                    </div>
                    <h1 className="planet-name">{displayedPlanetObj.name}</h1>
                    <p className="planet-description-destination content-p text">
                        {displayedPlanetObj.description}
                    </p>
                    <div className="distance-time-destination">
                        <div className="distance-destination">
                            <p className="avg-distance-p text">Avg. Distance</p>
                            <h3 className="avg-distance-title title">{displayedPlanetObj.distance}</h3>
                        </div>
                        <div className="time-destination">
                            <p className="time-p text">Est. Travel Time</p>
                            <h3 className="time-title title">{displayedPlanetObj.travel}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
    )
}