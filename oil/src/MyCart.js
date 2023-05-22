import React from "react";
import { Link } from "react-router-dom";
import {useCart} from 'react-use-cart';
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import './MyCart.css';
import Offer from "./Offer";
import Footer from './Footer';
const MyCart=()=>{
    
    const {isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart, }=useCart();
        if(isEmpty) return <h1 style={{textAlign:"center",paddingTop:"20%",fontSize:"40px"}}><center>Your Cart is empty</center></h1>
 
    return(
<>
<div>  
    <br></br><br></br><br></br><br></br>
    <center>
    <table class="table1">
        <tbody>      
        <tr>
                        <th class="th1">Image</th>
                        <th class="th1">Product Name</th>
                        <th class="th1">Price</th>
                        <th class="th1">Quantity</th>
                        <th class="th1">Amount</th>
                        <th class="th1">Edit</th>
                    </tr>
               {items.map((item,index)=>{
                return(
                    <>
                    <tr key={index}>
                            <td class="td1">
                                <img src={item.img} style={{ height: '8rem', width:'7rem' }} />
                            </td>
                            <td>{item.title}</td>
                            {/* <td>{item.desc}</td> */}
                            <td class="td1">{item.price}</td>
                            <td class="td1">{item.quantity}</td>
                            <td class="td1">{item.quantity * item.price}</td>
                            <td class="td1">
                                <FaMinus onClick={() => updateItemQuantity(item.id, item.quantity - 1)}></FaMinus>
                                <br></br>
                                <FaPlus onClick={() => updateItemQuantity(item.id, item.quantity + 1)}></FaPlus>
                                <br></br>
                                <FaTrash onClick={() => removeItem(item.id)}>Remove Item</FaTrash>
                            </td>
                        </tr></>
            
                )
        })}
         </tbody>
 
    </table>
    <br/>
    <h5><b>Types of Products:{totalUniqueItems} Total Items:{totalItems}</b></h5>
    <br/>
    <div>
        <Offer price={cartTotal}/>
      
        {/* <h2><b>Total price: Rs:{cartTotal}</b></h2> */}
    </div>
    <div>
    <button  class="btn1" onClick={()=> emptyCart()} >Empty Cart</button>
    <Link to="/product"><button class="btn1">
        Continue Shopping
    </button></Link>
    <Link to="/buy"><button class="btn1">
        Buy Now
    </button></Link>
    </div>    
    </center>
    <br/>
    <Footer/>
</div>
</>
    )
}
export default MyCart;


