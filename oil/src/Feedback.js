import React from "react";
import './Feedback.css';
const Feedback=()=>{
return(
    <>   
    <center> 
    <div class="container">
  
    <label for="fname">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Email</label>
    <input type="email" id="lname" name="lastname" placeholder="Your email.."/>

   

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Your feedback.." ></textarea>

    <input type="submit" value="Submit"/>

</div>

</center>
</>

  
)
}
export default Feedback;