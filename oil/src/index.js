// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./Navbars";
import Home from "./Home";
import Form from "./Form";
import Product from"./Product";
import Feedback from "./Feedback";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbars />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="product" element={<Product />} />
          <Route path="feedback" element={<Feedback/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);