import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () =>{
  return(
  <div className="navbar">
  <div className="navcontainer">
    <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
    <span className="logo">WonderStays</span>
    </Link>
    <div className="navItems">
        <button className="navButton">Login</button>
        <button className="navButton">Register</button>
   
    </div>
  </div>
  </div>
  )
}

export default Navbar;