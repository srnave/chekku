import React from "react";
import './Product.css';
//import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
const Itemcard=(props)=>{
    const {addItem} = useCart();
    const handle=()=>{
     // alert("added to cart");
     addItem(props.item);
     alert("A new Product has been added to your cart");
     
      
    }
    return(
        <div class="column1">
        <div class="card">
    <div class="imgBox">
      <img src={props.img} alt="mouse corsair" class="mouse"/>
    </div>
    
    <div class="contentBox">
      <h3>{props.title}</h3>
      <h2 class="price">Rs.{props.price}</h2>
      <h4 style={{fontSize:"20px",color:"white"}}>1 Litre</h4>
      <br/>
     {/* <button  class="buy" onClick={()=>addItem(props.item)}  >Add to cart</button> */}
     <button  class="buy" onClick={handle}  >Add to cart</button>
    </div>
    </div>
    </div>
  
    )
}
export default Itemcard;