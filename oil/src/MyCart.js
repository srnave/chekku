import React from "react";
import { Link } from "react-router-dom";
import {useCart} from 'react-use-cart';
const MyCart=()=>{
    const {isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart, }=useCart();
        if(isEmpty) return <h1>Your Cart is empty</h1>
    return(
        
        
<>

<div>
    <h5>Cart({totalUniqueItems}) total Items:({totalItems})</h5>
    <table>
        <tbody>      
               {items.map((item,index)=>{
                return(
            <tr key={index}>
                <td>
                    <img src={item.img} style={{height:'6rem'}}/>
                </td>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
                <td>Quantity({item.quantity})</td>
                <td>
                    <button onClick={()=> updateItemQuantity(item.id, item.quantity-1)}>-</button>
                    <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                    <button onClick={()=>removeItem(item.id)}>Remove Item</button>
                </td>
            </tr>
                )
        })}
         </tbody>
 
    </table>
    <div>
        <h2>Total price:{cartTotal}</h2>
    </div>
    <div>
    <button onClick={()=> emptyCart()} >Empty Cart</button>
    </div>
    <Link to="/buy"><button>
        Buy Now
    </button></Link>
</div>
</>
    )
}
export default MyCart;