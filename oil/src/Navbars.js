
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
import "./Navbars.css";
import logo from '../src/images/logo.jpg';

const Navbars = () => {
  const myStyle={
    height:'100px',
    width:'130px'
  }
  return (
    <>
    <div className="navbar">
      <nav >
        <ul>
          <li>
            <center>
            <img style={myStyle} src={logo}/>
            </center>
          </li>
          <li>
            <Link to="/"  className="navbar1"  >HOME</Link>
          </li>
          <li>
            <Link to="/form" className="navbar1" >Shop</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Outlet/>
    </>
  )
};

export default Navbars;