import React from 'react'
import './Product.css'
import Footer from './Footer'
import Navbars from './Navbars'
import image1 from '../src/images/rkcoconut.jpg'
import image2 from '../src/images/rkgroundnut.jpg'
import image3 from '../src/images/rksesame.jpg'
import image4 from '../src/images/rkghee.jpg'

export default function Product() {
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
    <div class="column">
    <div class="card">
<div class="imgBox">
  <img src={image1} alt="mouse corsair" class="mouse"/>
</div>

<div class="contentBox">
  <h3>Coconut Oil</h3>
  <h2 class="price">Rs. 250.<small>50</small></h2>
  <a href="#" class="buy">Buy Now</a>
</div>
</div>
</div>
<div class="column">
<div class="card">

<div class="imgBox">
  <img src={image2} alt="mouse corsair" class="mouse"/>
</div>

<div class="contentBox">
  <h3>Groundnut Oil</h3>
  <h2 class="price">Rs. 240.<small>75</small></h2>
  <a href="#" class="buy">Buy Now</a>
</div>
</div>
</div>
<div class="column">
<div class="card">

<div class="imgBox">
  <img src={image3} alt="mouse corsair" class="mouse"/>
</div>

<div class="contentBox">
  <h3>Sesame Oil</h3>
  <h2 class="price">Rs. 380.<small>00</small></h2>
  <a href="#" class="buy">Buy Now</a>
</div>
</div>
</div>
<div class="column>">
<div class="card">

<div class="imgBox">
  <img src={image4} alt="mouse corsair" class="mouse"/>
</div>

<div class="contentBox">
  <h3>Ghee</h3>
  <h2 class="price">Rs. 650.<small>50</small></h2>
  <a href="#" class="buy">Buy Now</a>
</div>
</div>
</div>
</div>
<br></br>
<Footer/>
</div>



    </>
  )
}
