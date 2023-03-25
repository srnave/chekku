import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Footer from "./Footer";
import Form from "./Form";
import Home from "./Home";


export default function Rounting() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="form" element={<Form/>}/>
    <Route path="footer" element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
);
}
