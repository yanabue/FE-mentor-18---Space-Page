import Navbar from "../components/Navbar"
import MobileNavbar from "../components/MobileNavbar";
import { useState, useEffect} from 'react'
import data from '../../public/data.json'

export default function Crew(){

    const [mobileView, setMobileView] = useState(() => window.innerWidth >= 850 ? false : true)
    window.addEventListener('resize', () => {
      let windowWidth = window.innerWidth;
      windowWidth < 850 ? setMobileView(true) : setMobileView(false)
    })
  
    const [sideNavbarOpen, setSideNavbarOpen] = useState(false)
    function toggleNavbar(){
      setSideNavbarOpen(prevSidebarOpen => !prevSidebarOpen)
    }

    const crewObj = data.crew;
    const [displayedCrewMember, setDisplayedCrew] = useState(() => {
        return localStorage.getItem('crew') ? 
        JSON.parse(localStorage.getItem('crew')) :
        crewObj[0]
    })
    
   useEffect(() => {
    localStorage.setItem('crew', JSON.stringify(displayedCrewMember))
    const crewImg = document.querySelector('.crew-member-img')
    crewImg.classList.remove('animation-left');
    crewImg.offsetWidth;
    crewImg.classList.add('animation-left');
   }, [displayedCrewMember])
 
   return (
    <div className="crew-element">
        <header className="header-crew">
            {!mobileView ? 
            <Navbar activeLink={'Crew'}/>
            : <MobileNavbar activeLink={'Crew'} isSidebarOpen={sideNavbarOpen} toggleNavbar={toggleNavbar}
            />}
        </header>
        <main className="main-content main-crew">
          <h3 className="title text">
            <span className="title-span">02</span>
            Meet your crew
          </h3>
          <section className="main-divs-crew">
              <div className="crew-member-text">
                <h2 className="member-role heading">{displayedCrewMember.role}</h2>
                <h1 className="member-name heading">{displayedCrewMember.name}</h1>
                <p className="content-text member-bio text">{displayedCrewMember.bio}</p>
                <div className="crew-member-selection">
                  <button className={`crew-member-button ${displayedCrewMember.name === 'Douglas Hurley' ? 'active-button' : ''}`}
                  onClick={() => setDisplayedCrew(crewObj[0])}
                  ></button>
                  <button className={`crew-member-button ${displayedCrewMember.name === 'Mark Shuttleworth' ? 'active-button' : ''}`}
                  onClick={() => setDisplayedCrew(crewObj[1])}
                  ></button>
                  <button className={`crew-member-button ${displayedCrewMember.name === 'Victor Glover' ? 'active-button' : ''}`}
                  onClick={() => setDisplayedCrew(crewObj[2])}
                  ></button>
                  <button className={`crew-member-button ${displayedCrewMember.name === 'Anousheh Ansari' ? 'active-button' : ''}`}
                  onClick={() => setDisplayedCrew(crewObj[3])}
                  ></button>
                </div>
              </div>
              <img src={displayedCrewMember.images.png} alt={displayedCrewMember.name} className="crew-member-img" />
          </section>
        </main>
    </div>
   )
}