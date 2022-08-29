import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
<footer class="bg-dark py-5">
        <div class="container col-lg-10 col-md-12">
            <div class="row">
                <div class="col-md-3 py-4">
                    <div class="text-center">
                        <a href="#">
                            <img class="footer-logo"
                 src={require('../assets/images/footer-logo.png')} 
                          alt="" />
                        </a>
                    </div>
                    <div class="mt-4">
                        <ul class="navbar-nav social">
                            <li class="nav-item social">
                                <a class="text-secondary" href="https://www.facebook.com/virtuemantra/" target="_blank">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="nav-item social">
                                <a class="text-secondary" href="https://www.linkedin.com/company/virtuemantra/" target="_blank">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li class="nav-item social">
                                <a class="text-secondary" href="https://www.instagram.com/virtuemantratechnologies/" target="_blank">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li class="nav-item social">
                                <a class="text-secondary" href="https://twitter.com/virtuemantra1/" target="_blank">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li class="nav-item social">
                                <a class="text-secondary" href="https://plus.google.com/u/0/117387280553206199126/" target="_blank">
                                    <i class="fa-brands fa-google"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 py-4">
                    <h4 class="title text-white mb-4">Get in Touch</h4>
                    <ul class="navbar-nav">
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="tel:+919634843418" target="_blank">
                                <i class="fa-solid fa-phone"></i> +91-9634843418	
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="mailto:info@virtuemantra.com" target="_blank">
                                <i class="fa-regular fa-envelope"></i> info@virtuemantra.com
                            </a>
                        </li>
                        <li class="nav-item mb-4">
                            <a class="text-secondary text-decoration-none" href="https://g.page/virtuemantratechnologies?share" target="_blank">
                                <i class="fa-solid fa-location-dot"></i> Bhaniyawala, Haridwar <br/> Road, Behind Basant Restaurant
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="contact.html">
                                <button class="btn btn-danger"><i class="fa-regular fa-envelope"></i> Contact Us</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 py-4">
                    <h4 class="title text-white mb-4">Our Services</h4>
                    <ul class="navbar-nav">
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="website-pro.html" target="_blank">Website Design Development</a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="twilio-app.html" target="_blank">Building Web Applications</a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="seo-digital-marketing.html" target="_blank">SEO & Digital Marketing</a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="website-design.html" target="_blank">Website Design</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-secondary text-decoration-none" href="website-hosting-and-maintenance.html" target="_blank">Hosting & Maintenance</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 py-4">
                    <h4 class="title text-white mb-4">Our Products</h4>
                    <ul class="navbar-nav">
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="twilio-app.html" target="_blank">Text24Hours</a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="billing-software.html" target="_blank">Billing Software</a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="text-secondary text-decoration-none" href="project-management-system.html" target="_blank">Project Management System</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-secondary text-decoration-none" href="school-erp.html" target="_blank">School ERP</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="scroll-to-top" id="scroll-to-top">
                <a class="text-secondary" href="#">
                    <i class="fa-solid fa-circle-chevron-up"></i>
                </a>
            </div>
        </div>
    </footer>

      </div>
    )
  }
}

export default Footer