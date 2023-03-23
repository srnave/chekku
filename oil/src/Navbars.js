import React from "react";
import './Navbars.css';

function Navbars(){
    return(
        <>
        <div class="navbar">
  <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#"><i class="fa fa-fw fa-search"></i> About us</a>
  <a href="#"><i class="fa fa-fw fa-envelope"></i> Shop</a>
  <a href="#"><i class="fa fa-fw fa-user"></i> Contact</a>
</div>
        </>
    )
}
export default Navbars;