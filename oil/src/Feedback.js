import React from "react";
import './Feedback.css';
const Feedback=()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qrvfn7', 'template_v9jdpfi', form.current, 'uxdKIFc-iLYILYTWU')
      .then((result) => {
          console.log(result.text);
          console.log("Sent");
      }, (error) => {
          console.log(error.text);
      });
  };
return(
    <>   
    <center> 
    <div class="container">
  
    <label for="fname">Name</label>
    <input type="text" id="fname" name="name" placeholder="Your name.."/>

    <label for="lname">Email</label>
    <input type="email" id="user_email" name="user_email" placeholder="Your email.."/>

   

    <label for="subject">Subject</label>
    <textarea id="message" name="message" placeholder="Your feedback.." ></textarea>

    <input   type="submit"  class="button .button1" value="SEND" ></input>

</div>

</center>
</>

  
)
}
export default Feedback;