import React from "react";
import Navbars from "./Navbars";
import Footer from "./Footer";
import image1 from '../src/images/Containers-olive-oil.jpg'
function Home(){
    
const myStyle={
    backgroundRepeat: 'no-repeat',
    height:'600px',
    width:'850px'
};
    return(
        <>
        <center>
            <br></br><br></br><br></br>
        <img style={myStyle} src={image1}/>
        </center>
        <Footer/>
        </>
    )
}
export default Home;

