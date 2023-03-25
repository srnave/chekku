// import React from "react";
// import './Navbars.css';
// import Routing from "./Routing";
// function Navbars(){
//     return(
//         <>
//         <div class="navbar">
//   <a class="active" href="/"><i class="fa fa-fw fa-home"></i> Home</a>
//   <a href="#"><i class="fa fa-fw fa-search"></i> About us</a>
//   <a href="form"><i class="fa fa-fw fa-envelope"></i> Shop</a>
//   <a href="#"><i class="fa fa-fw fa-user"></i> Contact</a>
// </div>

//         </>
//     )
// }
// export default Navbars;

//main page
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
import "./Navbars.css";

const Navbars = () => {
  return (
    <>
    <div className="navbar">
      <nav >
        <ul>
          <li>
            <Link to="/"  className="navbar1"  >HOME</Link>
          </li>
          <li>
            <Link to="/form" className="navbar1" >Shop</Link>
          </li>
          {/* <li>
            <Link to="/blogs" className="navbar1" >APPLY LEAVE</Link>
          </li> */}
          {/* <li>
            <Link to="/feedback" className="navbar1" >CHECK STATUS</Link>
          </li> */}

          
        </ul>
      </nav>
      </div>
      {/* <Home/> */}
      <Outlet/>
    </>
  )
};

export default Navbars;