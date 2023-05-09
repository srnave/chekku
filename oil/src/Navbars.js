
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
import "./Navbars.css";
import logo from '../src/images/logo.jpg';
import { FaShoppingCart,FaHome,FaShoppingBag,FaScroll,FaPenSquare } from "react-icons/fa";
import { useCart } from "react-use-cart";



const Navbars = () => {
  const myStyle={
    height:'100px',
    width:'10%',
    float:'left',
  }
  
  const {
    totalItems,
    totalUniqueItems
     }=useCart();
  return (
    <>

    <div className="navbar">
      <br></br>
      <nav >
        <ul>
          <li>
        <img style={myStyle}src={logo}/>
        </li>
          <li>
            <Link to="/form" className="navbar1" > <span style={{color:"black",fontSize:"30px",paddingLeft:"14px"}}>{totalUniqueItems}</span><FaShoppingCart size={50}/></Link>
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