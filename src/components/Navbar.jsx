import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="assets/shared/logo.svg" alt="Star logo icon" className="navbar-logo-star" />
      </div>
      <div className="divider-navbar"></div>
      <div className="navbar-links text">
        <Link
          to="/"
          className={props.activeLink === "Home" ? "active-nav-link" : ""}
          onClick={() => props.changeActiveLink("home")}
        >
          <span className="navbar-number">00</span> Home
        </Link>
        <Link
          to="/destination"
          className={props.activeLink === "Destination" ? "active-nav-link" : ""}
          onClick={() => props.changeActiveLink("destination")}
        >
          <span className="navbar-number">01</span> Destination
        </Link>
        <Link
          to="/crew"
          className={props.activeLink === "Crew" ? "active-nav-link" : ""}
          onClick={() => props.changeActiveLink("crew")}
        >
          <span className="navbar-number">02</span> Crew
        </Link>
        <Link
          to="/technology"
          className={props.activeLink === "Technology" ? "active-nav-link" : ""}
          onClick={() => props.changeActiveLink("technology")}
        >
          <span className="navbar-number">03</span> Technology
        </Link>
      </div>
    </nav> 

  );
}
