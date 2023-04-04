import React from 'react'
import './Product.css'
import image1 from '../src/images/rkcoconut.jpg'
import image2 from '../src/images/rkgroundnut.jpg'

export default function Product() {
  return (
    <>
    <div class="card">

<div class="imgBox">
  <img src={image1} alt="mouse corsair" class="mouse"/>
</div>

<div class="contentBox">
  <h3>Mouse Corsair M65</h3>
  <h2 class="price">61.<small>98</small> €</h2>
  <a href="#" class="buy">Buy Now</a>
</div>
</div>
<div class="card">

<div class="imgBox">
  <img src={image2} alt="mouse corsair" class="mouse"/>
</div>

<div class="contentBox">
  <h3>Mouse Corsair M65</h3>
  <h2 class="price">61.<small>98</small> €</h2>
  <a href="#" class="buy">Buy Now</a>
</div>
</div>



    </>
  )
}
