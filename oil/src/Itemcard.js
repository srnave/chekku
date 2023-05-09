import React from "react";
import './Product.css';
//import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
const Itemcard=(props)=>{
    const {addItem} = useCart();
    return(
        <div class="column1">
        <div class="card">
    <div class="imgBox">
      <img src={props.img} alt="mouse corsair" class="mouse"/>
    </div>
    
    <div class="contentBox">
      <h3>{props.title}</h3>
      <h2 class="price">{props.price}</h2>
      <br/>
     <button  class="buy" onClick={()=>addItem(props.item)} onMouseLeave={()=>{alert("Added to cart")}} >Add to cart</button>
    </div>
    </div>
    </div>
  
    )
}
export default Itemcard;