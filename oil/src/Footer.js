import React from 'react';
import './Footer.css';
import image1 from '../src/images/logo.jpg'
import { FaMapMarkerAlt,FaPhoneAlt,FaRegEnvelope,FaFacebookF,FaInstagram,FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Feedback from './Feedback';



export default function Footer() {
  const myStyle={
    height:'120px',
    width:'170px',
    overFlow:'hidden',
    margin:'0px 0px 0px 55px'
  }
  return (
    <>

<footer class="footer-distributed">

			<div class="footer-left">

				<img src={image1} style={myStyle}></img>

				<p class="footer-links">
				<Link to="/" class="link-1">Home</Link>
					
				<Link to="/product">Shop Now</Link>
				
					<Link to="/feedback">Feedback</Link>
				</p>

				<p class="footer-company-name">RK ORGANIC OILS © 2023</p>
			</div>

			<div class="footer-center">
        
				
			<FaMapMarkerAlt className="iconn"/><p style={{color:"black"}} ><span >No.3/112 A, Adhireddypalayam,</span>	K.Paramathi,
	Karur, Tamil Nadu,639111</p><br></br><br></br>

			
					<FaPhoneAlt className="iconn"/><p style={{color:"black"}}>+91 8220996938</p><br></br><br></br>
			

				
					<FaRegEnvelope className="iconn"/><p><a href="mailto:rk@gmail.com">rkorganicoils@gmail.com</a></p><br></br>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span style={{color:"black"}}fo>Follow Us</span>
					</p>

				<div class="footer-icons">

					<a href="#"><FaFacebookF/></a>
					<a href="#"><FaInstagram/></a>
					<a href="#"><FaWhatsapp/></a>

				</div>

			</div>

		</footer>
    </>
  )
}
