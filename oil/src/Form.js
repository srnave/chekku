import './Form.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useCart } from 'react-use-cart';
import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Register = ()=>{
  const form = useRef();
  const {isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart, }=useCart();
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[oil,setOil]=useState('');
    const[quantity,setQuantity]=useState('');
    const [phoneno, setPhoneno] = useState('');
    const[tquantity,settquantity]=useState('');
    const [streetname, setStreetname] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('Tamil Nadu');
    const [pincode, setPincode] = useState('');
    const [price,setPrice]=useState('');
    function handleAddrTypeChange(e) {
      setState(e.target.value);
    }
    const onSignup = async(e) =>{
       e.preventDefault();
      try {
          const body = { name,email,oil,quantity,phoneno,tquantity,streetname,city,state,pincode,price }; 
          console.log(body)
          const response = await fetch("http://localhost:8080/signup", {
              method: "POST",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(body)
          });
      } catch (err) {
          console.error(err.message);
      }
      emailjs.sendForm('service_2bob0hq', 'template_xklmiff', form.current, 'uxdKIFc-iLYILYTWU')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Order mail sent to owner");
          window.location.href = "/";
          emptyCart();
      }, (error) => {
          console.log(error.text);
      });
  }
    return(
        <>
         <div class="flex h-screen justify-center mt-6">
            <form class="w-full max-w-lg"style={{marginTop:"10%",marginLeft:"20%"}} ref={form}  >
                <div class="flex flex-wrap -mx-3 mb-6" >                
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                             Name
                        </label>
                        <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="name" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Raj" required />                     
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email}  placeholder="Kumar@gmail.com" required />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6" >
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Products
                        </label>
                        {items.map((item,index)=>{
                          return(
                                              <>    
                                            <input class="  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="oil"  type="text" name="oil" key={index}   value={item.title} readOnly   style={{textAlign:"center"}}></input>
                                              </>
                                            )
                        })}
                    </div>
                    <p></p>
                    <div class="w-full md:w-1/2 px-3">
                        <label class=" peer block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Quantity
                        </label>
                        {items.map((item,index)=>{
                          return(
                        <input class="peer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity" name="quantity" type="text" key={index}   value={item.quantity} readOnly required/>
                        )})}
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6" >
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                             Phone no
                        </label>
                        <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" name="phone" type="text" onChange={(e) => setPhoneno(e.target.value)} value={phoneno}    placeholder="9876543210" required />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Total Quantity
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tquantity" name="tquantity" type="text"  value={totalItems} readOnly />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Door no & streetname
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="sname" name="sname" type="text" onChange={(e) => setStreetname(e.target.value)} value={streetname} placeholder="2/12,periyar street" required/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" name="city" type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder="Chennai" required />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state" name="state" onChange={(e) => setState(e.target.value)} value={state}  required >
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Pincode
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pincode" name="pincode" type="text" onChange={(e) => setPincode(e.target.value)} value={pincode}  placeholder="6380056" />
                    </div>
                    </div>
                    <center>
                    <div style={{alignItems:"center",textAlign:"center",paddingLeft:"10px"}} class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Total Amount
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" name="price" type="text" value={cartTotal} readOnly />
                    </div>
                    </center>
                <div class="w-full justify-center px-3 mb-6 md:mb-0 flex items-stretch ">
                  <div > <button class=" items-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline py-4" type="submit" value="send"  onClick={onSignup}>
                        Send
                    </button>
                    </div>
                </div>
            </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br>
        <Footer/>
        </>
    )
}
export default Register;