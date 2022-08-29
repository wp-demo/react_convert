import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_0b27cjb', 'template_sxg25tf', e.target, '7N8Q-jHKhWK8t7khK')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
<div>

<section class="col-md-12 py-5 inner">
        <div class="container text-center py-4">
            <h1 class="py-5 text-danger fw-bolder">Let's Talk</h1>
        </div>
    </section>

    <section class="py-5">
        <div class="container col-md-10">
            <h2 class="text-dark fw-bold my-5">Let's Talk?</h2>
            <div class="row">
                <div class="col-md-6">
                    <h5>
         <img class="contact-img" 
         src={require('./assets/images/contact/email.png')}
    alt=""/>
                        E-mail:
                    </h5>
                    <a class="text-secondary text-decoration-none" href="mailto:info@virtuemantra.com" target="_blank">
                        info@virtuemantra.com
                    </a>

                    <h5 class="mt-4">
        <img class="contact-img" 
               src={require('./assets/images/contact/location.jpg')} alt=""/>
                        Address:
                    </h5>
                    <a class="text-secondary text-decoration-none" href="https://g.page/virtuemantratechnologies?share" target="_blank">
                        Bhaniyawala, Haridwar Road, Behind Basant Restaurant, <br/> Uttarakhand, INDIA
                    </a>

                    <h5 class="mt-4">
          <img class="contact-img"
           src={require('./assets/images/contact/phone.png')}
      alt=""/>
                        Phone:
                    </h5>
                    <a class="text-secondary text-decoration-none" href="tel:+919634843418" target="_blank">
                        +91-9634843418
                    </a>
                    <a class="text-secondary text-decoration-none" href="tel:+919756359898" target="_blank">
                        +91-9756359898
                    </a>

                    <h5 class="mt-4">
         <img class="contact-img" 
          src={require('./assets/images/contact/watch.png')}
    alt=""/>
                        Business hours:
                    </h5>
                    <p class="text-secondary">
                        Monday - Saturday 9.30am to 6.30pm <br/> Sunday - Closed
                    </p>
                </div>



         <div class="col-md-6">
         <form className="contact-form" onSubmit={sendEmail}>
                        <div>
                            <label for="first-name">First Name *</label>
                            <br/>
                  <input type="text" name="user_name"  id="first-name" required/>
                            <label for="last-name">Last Name *</label>
                            <br/>
              <input type="text" name="last-name" id="last-name" required/>
                        </div>
                        <div>
                            <label for="email">Email *</label>
                            <input type="email" name="user_email"  id="email" required/>
                        </div>
                        <div>
                            <label for="message">Message *</label>
                            <br/>
                            <textarea name="message" id="message" cols="30" rows="4" required></textarea>
                        </div>
                        <div class="mt-2">
                            <button type="submit" value="Send" class="btn btn-danger">Send message</button>
                        </div>
                    </form>
                  


                </div>
            </div>
        </div>
    </section>

    <section class="social pb-5">
        <div class="container col-md-10">
            <h2 class="text-dark fw-bold my-5">Follow Us</h2>
            <div>
                <ul class="navbar-nav social">
                    <li class="nav-item social">
                        <a href="https://www.facebook.com/virtuemantra/" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="nav-item social">
                        <a href="https://www.linkedin.com/company/virtuemantra/" target="_blank">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li class="nav-item social">
                        <a href="https://www.instagram.com/virtuemantratechnologies/" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li class="nav-item social">
                        <a href="https://twitter.com/virtuemantra1/" target="_blank">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li class="nav-item social">
                        <a href="https://plus.google.com/u/0/117387280553206199126/" target="_blank">
                            <i class="fa-brands fa-google"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    </div>




  );
}