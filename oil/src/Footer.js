import React from 'react'
import './Footer.css'
import image1 from '../src/images/logo.jpg'
import logo from '../src/images/logo.jpg';
import { Link } from 'react-router-dom';
export default function Footer() {
  const myStyle={
    backgroundRepeat: 'no-repeat',
    height:'200px',
    width:'200px',
    
};
  return (
    <>
   
<footer class="footer-distributed">

			<div class="footer-left">

      

				<p class="footer-links">
          {/* <img style={myStyle}src={logo}/> */}
          <Link to="/">HOME</Link>
					
					<Link to="/form"  >SHOP</Link>
				
          <Link to="/product" >PRODUCTS</Link>
				
					<Link to="/feedback" >FEEDBACK</Link>
					
					
					<Link to="/">CONTACT</Link>
				</p>

				<p class="footer-company-name">Sri RadheKrishna Chekku Oil</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:rk@gmail.com">rk@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about" s>
					<span>About the company</span>
					<span>we provide the pure and raw oil with the natural content and attributes that define quality.</span>
				</p>

				{/* <div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div> */}

			</div>

		</footer>
</>
  )
}  
