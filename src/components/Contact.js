import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import '../assets/Contact.css'

const Result = () => {
    return(
        <p>Your Mail is recieved. Thanks for contacting us</p>
    )
}


export default function Contact() {
    const[result,showResult] = useState(false);
    const sendEmail=(e) =>{
        e.preventDefault();
        emailjs.sendForm("service_d2o1mke","template_dtqwbas",e.tartget,"user_VmeBP0gKfh59BwDzyrEom").then(
            (result) => {
                console.log(result.text);
            },
            (error) =>{
                console.log(error.text);
            }
        );
        e.tartget.reset();
        showResult(true);
    };


    return (
        <div id={"visit-contact"}>
            <form action="" onSubmit={sendEmail}  >
            <h3 id="heading">Get in touch</h3>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Name" name="name" id="contact" />
              <label class="input-field-icon icon-user" for="login-name"></label>
            </div>

            <div class="form-group">
              <input type="email" class="form-control"  placeholder="Email" name="email" id="contact" />
              <label class="input-field-icon icon-email" for="login-email"></label>
            </div>

            <div class="form-group">
              <input type="number" class="form-control"  placeholder="Contact Number" name="phone" id="contact" />
              <label class="input-field-icon icon-email" for="login-email"></label>
            </div>

            <div class="form-group">
              <textarea class="form-control" placeholder="Message" name="message" id="contact" rows="1"></textarea>
            </div>

            <button id="contact-send" class="btn btn-primary btn-lg btn-block" onClick={sendEmail}>Send</button>
            <div className="row">
               { result ? <Result /> : null }
            </div>
            </form>
            </div>
    )
}
