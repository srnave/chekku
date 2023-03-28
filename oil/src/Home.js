import React from "react";
import Navbars from "./Navbars";
import Footer from "./Footer";
import image1 from '../src/images/Containers-olive-oil.jpg'
function Home(){
    return(
        <>
        <img src={image1}/>
        <Footer/>
        </>
    )
}
export default Home;