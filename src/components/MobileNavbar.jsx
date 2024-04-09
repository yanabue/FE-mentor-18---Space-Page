import { Link } from 'react-router-dom'

export default function MobileNavbar(props){
    return (
      <div className="mobile-navbar">
      <div className="navbar-logo">
        <img src="assets/shared/logo.svg" alt="Star logo icon" className="navbar-logo-star" />
      </div>
      <button className="mobile-navbar-home" onClick={() => props.toggleNavbar()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" ><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
      </button>
      {props.isSidebarOpen && <div className="module" onClick={() => props.toggleNavbar()}>
        <div className="side-navbar">
          <button className="close-icon" onClick={() => props.toggleNavbar()}>
            <img src="assets/shared/icon-close.svg" alt="icon sidebar close" onClick={() => props.toggleNavbar()} />
          </button>
          <div className="mobile-sidebar-links">
            <Link
              to="/"
              className={props.activeLink === "Home" ? "active-nav-link text" : "text"}
            >
              <span className="navbar-number">00</span> Home
            </Link>
            <Link
              to="/destination"
              className={props.activeLink === "Destination" ? "active-nav-link text" : "text"}
            >
              <span className="navbar-number">01</span> Destination
            </Link>
            <Link
              to="/crew"
              className={props.activeLink === "Crew" ? "active-nav-link text" : "text"}
            >
              <span className="navbar-number">02</span> Crew
            </Link>
            <Link
              to="/technology"
              className={props.activeLink === "Technology" ? "active-nav-link text" : "text"}
            >
              <span className="navbar-number">03</span> Technology
            </Link>
            </div>
          </div>
        </div>}
      </div>
    )
  }