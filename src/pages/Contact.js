import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j3mc6zp', 'template_jk3xwyk', form.current, '_D9Hj93vy0QVwcair')
      .then((result) => {
          console.log(result.text);
          console.log('message sent!')
      }, (error) => {
          console.log(error.text);
      });
  }
  window.addEventListener("DOMContentLoaded", () => {
  
  const input1 = document.querySelector('input[name="first_name"]');
  const input2 = document.querySelector('input[name="email"]');
  // const input3 = document.querySelector('textarea[name="message"]');

input1.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Please tell us how we should address you.');
  }
})

input1.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})

input2.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('We need your email for us to send a reply.');
  }
})

input2.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})
  });

  return (
    <div className="contact h-screen w-screen">
      <div className="contact_overlay bg-black/40 h-full w-full flex flex-col lg:flex-row ">
        <div className="contact_left w-full h-2/6 lg:h-full flex lg:w-6/12 justify-center items-center">
          <h1 className="text-white text-5xl w-10/12 lg:w-11/12 text-center font-medium">
            Get in Touch with us!
          </h1>
        </div>
        <div className="contact_right w-full h-4/6 lg:h-full lg:w-6/12 flex items-center justify-end">
          <div className="contact_form h-full lg:h-5/6 w-full bg-white/30 border-0 rounded-xl backdrop-blur-lg flex flex-wrap flex-col justify-center items-center">
            <form ref={form} onSubmit={sendEmail} className="contactform_internal w-5/6 lg:h-5/6 h-full flex items-center pb-4 lg:items-start justify-center flex-col">
              <h1 className="py-5 text-black text-3xl lg:text-xl">Name</h1>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:justify-start justify-center items-center">
                <input
                  className=" px-4 rounded lg:mr-4 mx-4 lg:mx-0 h-11 sm:w-2/5 text-sm w-5/6"
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  required
                />
                <input
                  className=" px-4 rounded mx-4 h-11 lg:mx-0 sm:w-2/5 text-sm w-5/6"
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  
                />
              </div>
              <h1 className="py-5 text-black text-3xl lg:text-xl">E-mail</h1>
              <input
                className="px-2 rounded lg:mr-4 h-11 w-5/6 block text-sm"
                type="email"
                placeholder="abc@email.com"
                name="email"
                required
              />
              <h1 className="py-5 text-black text-3xl lg:text-xl">
                Your Message
              </h1>
              <textarea
                className=" px-2 py-4 rounded lg:mr-10 h-1/5 lg:w-4/6 w-5/6  whitespace-normal text-sm"
                name="message"
                required
              />
              <br></br>
              <br></br>
              <input
                type="submit" value="Send"
                className="submit_button text-white h-10 w-20 rounded bg-black"
              />
                
    
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
