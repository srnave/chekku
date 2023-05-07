import './App.css';
import MyCart from './MyCart';
 import { CartProvider } from 'react-use-cart';
 import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
 import Navbars from "./Navbars";
 import Home from "./Home";
 import Form from "./Form";
 import Product from"./Product";
 import Feedback from "./Feedback";
 import Register from "./Register";
 import Login from "./Login";
 import './index.css';
 import { UserContext } from "./protectedRoutes/UserContext";
 import { useState } from "react";
 import {ProtectedRoutes} from "./protectedRoutes/ProtectedRoutes"


    export default function App() {
      const [user, setUser] = useState("");
      return (
        <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}  ></UserContext.Provider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Navbars />}>
              <Route index element={<Home />} />
              
              <Route path="form" element={<MyCart />} />
              <Route path="product" element={<Product />} />
              <Route path="buy" element={<Form/>}/>
              <Route path="feedback" element={<Feedback/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="login" element={<Login/>}/>
            </Route>
          </Routes>
          </CartProvider>
        </BrowserRouter>
      );
    }
  
