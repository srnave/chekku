import React from "react";
import './Home.css';
import Navbars from "./Navbars";
import Footer from "./Footer";
import image1 from '../src/images/logo.jpg'
import image2 from '../src/images/sus1.png'
import image3 from '../src/images/logo.jpg'
import image4 from '../src/images/curated.jpg'
import image5 from '../src/images/c.jpg'
import image6 from '../src/images/gr.jpg'
import image7 from '../src/images/se.jfif'
import image8 from '../src/images/ghee.jpg'
import image9 from '../src/images/coconut oil.jpg'
import image10 from '../src/images/ground nut oil.jpg'
import image11 from '../src/images/Sesame Oil.png'
import image12 from '../src/images/Oil-cake.jpg'
import image13 from '../src/images/g.jpg'


function Home(){
      
    const myStyle1={
      backgroundRepeat: 'no-repeat',
      height:'500px',
      width:'500px'
  };
  const myStyle2={
    backgroundRepeat: 'no-repeat',
    height:'250px',
    width:'299px'
};
const myStyle3={
  backgroundRepeat: 'no-repeat',
  height:'200px',
  width:'200px'
};
const myStyle4={
  height:'100px',
  width:'200px',
  float:'center',
  
}
const myStyle5={
  height:'70px',
  width:'100px',
  float:'left',
  overFlow:'hidden'
}

    return(
        <>
      <br></br>
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <center>
  <div class="slider-box">
  <div class="carousel">
    <div class="carousel-item it1">
    <img src={image8} style={myStyle3}></img>
    </div>
    <div class="carousel-item it2">
    <img src={image9} style={myStyle3}></img>
    </div>
    <div class="carousel-item it3">
    <img src={image10} style={myStyle3}></img>
    </div>
    <div class="carousel-item it4">
    <img src={image11} style={myStyle3}></img>
    </div>
    <div class="carousel-item it5">
    <img src={image12} style={myStyle3}></img>
    </div>
    <div class="carousel-item it6">
    <img src={image8} style={myStyle3}></img>
    </div>
    <div class="carousel-item it7">
    <img src={image9} style={myStyle3}></img>
    </div>
    <div class="carousel-item it8">
    <img src={image10} style={myStyle3}></img>
    </div>
    <div class="carousel-item it9">
    <img src={image11} style={myStyle3}></img>
    </div>
    <img src={image1} style={myStyle3}></img>
  </div>
</div>
</center>
  <br></br><br></br><br></br><br></br>
  <center>
  
  <p style={{color:"darkgreen",fontSize:"50px"}}><b>TASTE THE FLAVOR, MISS THE FAT</b></p>
<br></br><br></br><br></br>
        <h1 style={{color:"darkgreen",fontSize:"30px"}}><b>Our Products</b></h1>
        <br></br>
        <p style={{color:"darkgreen",fontSize:"30px"}}><b>SHOP OUR PURE PRODUCTS AND ENJOY</b></p>

        <br></br><br></br>
        <div class="row1">
  <div class="column1">
<div class="card1">
<br></br><br></br>
<img src={image5} style={myStyle2}></img>
  <h1 style={{color:"darkgreen"}}><b>Coconut Oil</b></h1>
  <br></br>
  <p style={{color:"darkgreen"}}>Cold pressed Coconut oil is extracted from fresh coconut meat without the use of heat or chemicals, preserving its natural nutrients.</p>
  <br></br>
</div>
</div>

  <div class="column1">
<div class="card1">
<br></br><br></br>
<img src={image6} style={myStyle2}></img>
  <h1 style={{color:"darkgreen"}}><b>Groundnut Oil</b></h1>
  <br></br>
  <p style={{color:"darkgreen"}}>Cold pressed Groundnut oil is extracted mechanically from raw peanuts, maintaining its nutrients and natural flavor.</p><br></br>
  <br></br>
</div>
</div>

<div class="row1">
  <div class="column1">
<div class="card1">
  <br></br><br></br>
<img src={image7} style={myStyle2}></img>
  <h1 style={{color:"darkgreen"}}><b>Sesame Oil</b></h1>
  <br></br>
  <p style={{color:"darkgreen"}}>Cold pressed Sesame oil is made without heat or chemicals, preserving its natural flavor and nutritional properties.</p><br></br>
  <br></br>
</div>
</div>
<div class="column1">
<div class="card1">
  <br></br><br></br>
<img src={image13} style={myStyle2}></img>
  <h1 style={{color:"darkgreen"}}><b>Ghee</b></h1>
  <br></br>
  <p style={{color:"darkgreen"}}>Cold-pressed ghee is made using a traditional method of churning yogurt or cream to separate the butterfat from the buttermilk, without the use of heat.




</p><br></br>
  
</div>
</div>
</div>


</div>
        
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1 style={{color:"darkgreen",fontSize:"30px" }} ><b>About Our Services</b></h1>
        <br></br>
        <br></br>
        <center><table style={{margin:"5px solid black"}}>
  <tr>
  <th style={{color:"darkgreen",margin:"5px solid black"}}>Sustainable Products</th>
  <th style={{color:"darkgreen",margin:"5px solid black"}}>Not Factory Made</th>
  <th style={{color:"darkgreen",margin:"5px solid black"}}>Curated with Love</th>
  </tr>
  <td style={{color:"darkgreen"}}><img src={image2} style={myStyle5} ></img>Chemical free products good for you and your family</td>
  <td style={{color:"darkgreen"}}><img src={image3} style={myStyle5}></img>Made by artisans and entreprenuers not in factories</td>
  <td style={{color:"darkgreen"}}><img src={image4} style={myStyle5}></img>Carefully selected products, handmade and natural</td>
</table>
</center>


        </center>
        <br></br><br></br>
        {/* </div>  */}
         <Footer/> 
        </>
    )
}
export default Home;

