import React from "react";
const Offer =({price})=>{
    const discountedPrice = price > 2000 ? price * 0.9 : price;

    return(
        <>
        {price > 2000 ? (
        <div>
          <span><h2><b>Total Price:Rs.{discountedPrice}</b></h2></span>
          <span> (10% off)</span>
        </div>
      ) : (
        <div>
          <span>Total Price:Rs.{price}</span>
        </div>
      )}
       
        </>
    )
}
export default Offer;