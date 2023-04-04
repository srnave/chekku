import React from 'react'
import './Footer.css'
import image1 from '../src/images/logo.jpg'

export default function Footer() {
//   const myStyle1={
//     backgroundRepeat: 'no-repeat',
//     height:'200px',
//     width:'300px'
// };
  return (
    <>
    <footer>

<div class="row">

  <div class="column">

    <h4>About Us</h4>

    <p>No.3/112 A, Adhireddypalayam,
	K.Paramathi,
	Karur, Tamil Nadu – 639111
</p>

  </div>

  <div class="column">

    {/* <h4>Quick Links</h4>

    <ul>

      <li><a href=""><i class="fa fa-angle-right"></i> Subscription</a></li>

      <li><a href=""><i class="fa fa-angle-right"></i> Contact us</a></li>

      <li><a href=""><i class="fa fa-angle-right"></i> Bug report</a></li>

    </ul> */}

  </div> 

  {/* <div class="column">

    <h4>Connect with Us</h4>

    <ul class="social-icons">

      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>

      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      
      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>

        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>

    </ul>

  </div> */}
  {/* <div class="column">


<ul class="social-icons">

  <li><img style={myStyle1} src={image1}/></li>


</ul>

</div> */}
  <div class="column">

    <h4>Contact Us</h4>

    <ul class="social-icons">

      <li>+91 8220996938</li>


    </ul>

  </div>

</div>

<p class="copyright">© 2023 All Rights Reserved</p>

</footer>
</>
  )
}  
