import React, { useRef } from 'react'
import './Form.css'
import Footer from './Footer'
import emailjs from '@emailjs/browser';
// import image from '../src/images/images.jpg';
export default function Form() {
  // const [formState,setFormState]=useState({});
  
  // const changeHandler = (event) =>{
  //   setFormState({...formState,[event.target.name]:event.target.value})
   
  // }
  // const submitHandler=(event)=>{
  //   event.preventDefault();
  //   const config = {
  //     // Username: 'meianbum.20it@kongu.edu',
  //     // Password: 'D99AE334F73797895005AC1131D8A5503047',
  //     // Host : 'smtp.elasticemail.com',
  //     // Port : 2525,
  //     SecureToken : '08c669b1-60e4-4e34-8701-1d1b1467b37e',
  //     To : 'meianbum.20it@kongu.edu',
  //     From : formState.email,
  //     Subject : "Ordering Oil",
  //     Body :  formState.name ,
  //   }
  //   if(window.Email){
  //     window.Email.send(config).then(()=> alert("Order mail is sent successfully"));
  //   }
  // }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2bob0hq', 'template_xklmiff', form.current, 'uxdKIFc-iLYILYTWU')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Order mail sent to owner");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
  <center>
    
    <div class="container">
      <div class="left">
        <div class="form">       
    <form ref={form} onSubmit={sendEmail}>
        <label>Name *</label>
        <input type="text" name='name' class="form-field animation a3" required></input>
        <br></br><br></br>
        {/* <label>Last name *</label>
        <input type="text" required></input>
        <br></br><br></br> */}
        <label for="country">Products *</label>
        <select id="country" class="form-field animation a3" name="oil"multiple >
        <option value=""></option>
    <option value="coconutoil">Coconut Oil</option>
<option value="groundnutoil">Groundnut oil</option>
<option value="sesameoil">Sesame oil</option>
<option value="ghee">Ghee</option>
</select>
        <br></br><br></br>
        <label>Street address *</label>
        <input type="text" class="form-field animation a3" name='address'  required></input>
        <br></br><br></br>
        <label>Town / City *</label>
        <input type="text" class="form-field animation a3" name='city'  required></input>
        <br></br><br></br>
        <label for="state">State *</label>
    <select id="state" class="form-field animation a3" name="state" >
    <option value=""></option>
    <option value="AN">Andaman and Nicobar Islands</option>
    <option value="AP">Andhra Pradesh</option>
    <option value="AR">Arunachal Pradesh</option>
    <option value="AS">Assam</option>
    <option value="BR">Bihar</option>
    <option value="CH">Chandigarh</option>
    <option value="CT">Chhattisgarh</option>
    <option value="DN">Dadra and Nagar Haveli</option>
    <option value="DD">Daman and Diu</option>
    <option value="DL">Delhi</option>
    <option value="GA">Goa</option>
    <option value="GJ">Gujarat</option>
    <option value="HR">Haryana</option>
    <option value="HP">Himachal Pradesh</option>
    <option value="JK">Jammu and Kashmir</option>
    <option value="JH">Jharkhand</option>
    <option value="KA">Karnataka</option>
    <option value="KL">Kerala</option>
    <option value="LA">Ladakh</option>
    <option value="LD">Lakshadweep</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="MN">Manipur</option>
    <option value="ML">Meghalaya</option>
    <option value="MZ">Mizoram</option>
    <option value="NL">Nagaland</option>
    <option value="OR">Odisha</option>
    <option value="PY">Puducherry</option>
    <option value="PB">Punjab</option>
    <option value="RJ">Rajasthan</option>
    <option value="SK">Sikkim</option>
    <option value="TN">Tamil Nadu</option>
    <option value="TG">Telangana</option>
    <option value="TR">Tripura</option>
    <option value="UP">Uttar Pradesh</option>
    <option value="UT">Uttarakhand</option>
    <option value="WB">West Bengal</option>
</select>
       
        <br></br><br></br>
        <label>Phone *</label>
        <input type="text" class="form-field animation a3" name='phone'  required></input>
        <br></br><br></br>
        <label>Email address *</label>
        <input type="email" class="form-field animation a3"name='user_email'  required></input>
        <br></br><br></br>
        <input   type="submit"  class="button .button1" value="SEND" ></input>
        {/* <button type="submit" class="button .button1">Order</button> */}
    </form>
    </div>  
    
    </div>
   </div>
  </center>
  
    <br/>
    <Footer/>
    </>
  )
}
