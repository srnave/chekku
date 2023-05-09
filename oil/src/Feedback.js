import React ,{useRef}from "react";
import './Feedback.css';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Footer from './Footer';
const Feedback=()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qrvfn7', 'template_v9jdpfi', form.current, 'uxdKIFc-iLYILYTWU')
      .then((result) => {
          console.log(result.text);
          console.log("Sent");
          alert("feedback sent");
      }, (error) => {
          console.log(error.text);
          console.log(error);
      });
  };
return(
    <>   
    <br></br><br></br><br></br>
    <center> 
      <form ref={form} onSubmit={sendEmail}>
    <div class="container1">
  
    <label for="fname">Name</label>
    <input type="text" id="fname" name="name" placeholder="Your name.."/>

    <label for="lname">Email</label>
    <input type="email" id="user_email" name="user_email" placeholder="Your email.."/>

   

    <label for="subject">Subject</label>
    <textarea id="message" name="message" placeholder="Your feedback.." ></textarea>

    <Link to='/'><input   type="submit"  class="button .button1" value="SEND" ></input></Link>

</div>
</form>
</center>
<br></br><br></br>
<Footer/>
</>

  
)
}
export default Feedback;