import React from 'react'
import './Product.css'
import Footer from './Footer'
import Itemcard from './Itemcard'
import data from './data'
export default function Product() {
  console.warn(data.productdata);
  return (
    <>
    <div class="body" >
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div>
      <center>
    <p style={{color:"darkgreen",fontSize:"50px"}}><b>TASTE THE FLAVOR, MISS THE FAT</b></p>
<br></br><br></br>
        <br></br>
        <p style={{color:"darkgreen",fontSize:"30px"}}><b>SHOP OUR PURE PRODUCTS AND ENJOY</b></p>
        <br></br><br></br>
        </center>
      {data.productdata.map((item,index)=>{
        return(
<Itemcard 
img={item.img}
 title={item.title} 
 price={item.price}
 item={item}
 key={index}/>
        )
      })}
   
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Footer/>
</div>
    </>
  )
}
