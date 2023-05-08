import React from "react";
import { Link } from "react-router-dom";
import {useCart} from 'react-use-cart';
import Footer from "./Footer";
import './MyCart.css';
import Navbars from "./Navbars";
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const MyCart=()=>{
    const {isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart, }=useCart();
        if(isEmpty) return <h1 style={{textAlign:"center",paddingTop:"20%",fontSize:"40px"}}>Your Cart is empty</h1>
    return(
        
        
<>

<div>

<br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <body>
   




    <div class="col-lg-12 col-sm-12 hero-feature">
<div class="table-responsive">
   <center>
    
    <table class="table table-bordered tbl-cart" style={{width:"50%"}}>
    <thead>
<tr style={{textAlign:"center"}}>
<td class="hidden-xs">Image</td>
<td>Product Name</td>
<td>Quantity</td>
<td class="td-qty">Remove</td>

<td>Price</td>
</tr>
</thead>
        <tbody>      
               {items.map((item,index)=>{
                return(
            <tr key={index}>
                <td class="hidden-xs">
                    <img src={item.img} style={{height:"47px",width:"47px"}} />
                </td>
                <td>{item.title}</td>
                
                
                <td>
                <div class="input-group bootstrap-touchspin" style={{textAlign:"center"}}><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-down" type="button" onClick={()=> updateItemQuantity(item.id, item.quantity-1)} style={{color:"black",border: "none",textAlign:"center", display:"inline-block", fontSize:"16px",cursor: "pointer",backgroundSize:"10"}}>-</button></span><span class="input-group-addon bootstrap-touchspin-prefix" style={{display:"none"}}></span>
                <div class="input-qty form-control text-center" style={{display:"block"}}>{item.quantity}</div>
                <span class="input-group-addon bootstrap-touchspin-postfix" style={{display:"none"}}></span><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-up" type="button" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button></span></div>
                {/* <button onClick={()=> updateItemQuantity(item.id, item.quantity-1)}>-</button>
                {item.quantity} */}
                    {/* <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button> */}
                    </td>
                    <td>
                <button class="remove_cart" onClick={()=>removeItem(item.id)} rel="2">
                <i class="fa fa-trash-o"></i>
                </button>
                    {/* <button onClick={()=>removeItem(item.id)}>Remove Item</button> */}
                </td>
                    
                <td  class="price">{item.price}</td>
            </tr>
                )
        })}
        <tr>
<td colspan="4" align="right">Total</td>
<td class="total" colspan="2"><b>{cartTotal}</b>
</td>
</tr>
         </tbody>
 
    </table>
    <div class="btn-group btns-cart">
<Link to="/product"><button type="button" class="btn btn-primary"><i class="fa fa-arrow-circle-left"></i> Continue Shopping</button></Link>
<button type="button" class="btn btn-primary" onClick={()=> emptyCart()} >Empty Cart</button>
<Link to="/buy"><button type="button" class="btn btn-primary">Buy Now <i class="fa fa-arrow-circle-right"></i></button></Link>
</div>
    </center>
    {/* <div>
        <h2>Total price:{cartTotal}</h2>
        <h2> Total Items:{totalItems}</h2>
    </div>
    <div>
    <button onClick={()=> emptyCart()} >Empty Cart</button>
    </div>
    <Link to="/buy"><button>
        Buy Now
    </button></Link> */}
    <Footer/>
    </div>
    </div>
    </body>

</div>
</>
    )
}
export default MyCart;