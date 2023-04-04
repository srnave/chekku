
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
import "./Navbars.css";
import logo from '../src/images/logo.jpg';

const Navbars = () => {
  const myStyle={
    height:'100px',
    width:'10%',
    float:'left',
  }
  return (
    <>
    <div className="navbar">
      <nav >
        <ul>
          <li>
        <img style={myStyle}src={logo}/>
        </li>
          <li>
            <Link to="/"  className="navbar1"  >HOME</Link>
          </li>
          <li>
            <Link to="/form" className="navbar1" >SHOP</Link>
          </li>
          <li>
            <Link to="/product" className="navbar1" >PRODUCTS</Link>
          </li>
          <li>
            <Link to="/"  className="navbar1"  >ABOUT US</Link>
          </li>
          <li>
            <Link to="/"  className="navbar1"  >CONTACT</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Outlet/>
    </>
  )
};

export default Navbars;