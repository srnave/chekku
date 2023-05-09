
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
import "./Navbars.css";
import logo from '../src/images/logo.jpg';
import { FaShoppingCart,FaHome,FaShoppingBag,FaScroll,FaPenSquare } from "react-icons/fa";


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
            <Link to="/form" className="navbar1" ><FaShoppingCart size={50}/></Link>
          </li>
          <li>
            <Link to="/"  className="navbar1" ><FaHome size={50}/></Link>
          </li>
          <li>
            <Link to="/product" className="navbar1" ><FaShoppingBag size={50}/></Link>
          </li>
          <li>
            <Link to="/feedback"  className="navbar1"  ><FaPenSquare size={50}/></Link>
          </li>
          
        </ul>
      </nav>
      </div>
      <Outlet/>
    </>
  )
};

export default Navbars;