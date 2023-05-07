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
  
    <div class="row">
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
<br></br>
<Footer/>
</div>



    </>
  )
}
