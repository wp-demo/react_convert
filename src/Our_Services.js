import React, { Component } from 'react';

class Our_Services extends Component {
  render() {
    return (
        <div>
           <section class="col-md-12 py-5 inner">
        <div class="container text-center py-4">
            <h1 class="py-5 text-danger fw-bolder">Our Services</h1>
        </div>
    </section>


    <section class="services col-md-12">
        <div class="container col-lg-10 col-md-12">
            <h2 class="text-dark fw-bold py-4">Our Sevices</h2>
            <p class="text-secondary">We believe in providing <b>Excellent</b> and <b>Quality Services</b> to our <b>Customer</b>. Below are our main <b>Services:</b></p>
            <div class="row py-5 text-center">
                <div class="col-lg-3 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <a href="/enterprise-solutions.html">
                <img 
          src={require('./assets/images/services/enterprise-solution-green.png')}
               alt=""/>
                            </a>
                            <h3 class="card-title service py-4">ENTERPRISE SOLUTIONS</h3>
                            <p class="text-secondary pb-4">Manage your business in one click.</p>
                            <p class="mt-5"><a class="read-more" href="/enterprise-solutions.html">Read More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <a href="/mobile-apps.html">
                                <img 
                               src={require('./assets/images/services/mobile-icon.png')} 
                           alt=""/>
                            </a>
                            <h3 class="card-title service py-4">MOBILE APPS</h3>
                            <p class="text-secondary">We create revolutionary mobile app for you with latest technologies.</p>
                            <p class="mt-5"><a class="read-more" href="/mobile-apps.html">Read More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <a href="/ecommerce-solution.html">
                       <img src={require('./assets/images/services/ecommerce-solution-green.png')} 
                       alt=""/>
                            </a>
                            <h3 class="card-title service py-4">ECOMMERCE/SHOPPING STORE</h3>
                            <p class="text-secondary">Increase your sales via E-commerce website.</p>
                            <p class="mt-5"><a class="read-more" href="/ecommerce-solution.html">Read More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <a href="/website-pro.html">
                 <img src={require('./assets/images/services/website-pro.png')} 
             alt=""/>
                            </a>
                            <h3 class="card-title service py-4">WEBSITE PRO</h3>
                            <p class="text-secondary pb-4">Your website is your identity on Internet.</p>
                            <p class="mt-5"><a class="read-more" href="/website-pro.html">Read More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <a href="/website-design.html">
               <img src={require('./assets/images/services/webdesign.png')} alt=""/>
                            </a>
                            <h3 class="card-title service py-4">WEBSITE DESIGN</h3>
                            <p class="text-secondary pb-4">We design website that will help you to attract the visitors.</p>
                            <p class="mt-5"><a class="read-more" href="/website-design.html">Read More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <a href="/website-hosting-and-maintenance.html">
                  <img src={require('./assets/images/services/website-hosting-green.png')} alt=""/>
                            </a>
                            <h3 class="card-title service py-4">WEBSITE HOSTING & MAINTENANCE</h3>
                            <p class="text-secondary">We provide website hosting and maintenance services.</p>
                            <p class="mt-5"><a class="read-more" href="/website-hosting-and-maintenance.html">Read More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <a href="/vas-services.html">
                      <img src={require('./assets/images/services/vas-icon-1-100x100.png')} alt=""/>
                            </a>
                            <h3 class="card-title service py-4">VAS SERVICES</h3>
                            <p class="text-secondary">Telecom VAS solutions and service delivery platform for SMS, IVR, OBD, USSD, WAP.</p>
                            <p class="mt-5"><a class="read-more" href="/vas-services.html">Read More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <a href="/seo-digital-marketing.html">
                           <img src={require('./assets/images/services/seo.png')} alt=""/>
                            </a>
                            <h3 class="card-title service py-4">SEO/DIGITAL MARKETING</h3>
                            <p class="text-secondary pb-4">One page optimization and link building strategy.</p>
                            <p class="mt-5"><a class="read-more" href="/seo-digital-marketing.html">Read More</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

    <section class="py-5">
        <div class="container col-lg-10 col-md-12">
            <h2 class="text-dark fw-bold mb-4">Let's Talk?</h2>
            <div class="row">
                <div class="col-md-6">
                    <form name="myform" method="" action="" onsubmit="validateform()">
                    <div>
                        <label for="first-name">First Name *</label>
                        <br/>
                        <input type="text" name="first-name" id="first-name" required/>
                        <label for="last-name">Last Name *</label>
                        <br/>
                        <input type="text" name="last-name" id="last-name" required/>
                    </div>

                    <div>
                        <label for="email">Email *</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div>
                        <label for="website">Website URL</label>
                        <input type="url" name="website" id="website"/>
                    </div>
                    <div>
                        <label for="message">Message *</label>
                        <br/>
                        <textarea name="message" id="message" cols="30" rows="4" required></textarea>
                    </div>
                    <div>
                        <label for="choose-services">Choose services *</label>
                        <br/>
                        <select name="choose-services" id="choose-services" required>
                            <option value="">-- Please Choose An Option --</option>
                            <option value="web-development">Website Development</option>
                            <option value="seo">SEO/SMM</option>
                            <option value="web-design">Website Design</option>
                            <option value="ppc-advertising">PPC Advertising</option>
                            <option value="logo-design">Logo Design</option>
                            <option value="enterprise-solution">Enterprise solution (ERP,CRM)</option>
                            <option value="graphic-design">Graphic Design</option>
                            <option value="web-hosting">Website Hosting and Maintenance</option>
                        </select>
                    </div>
                    <div class="mt-2">
                        <button type="submit" class="btn btn-danger">Submit</button>
                    </div>
                </form>
                </div>
                <div class="col-md-6">
                    <img class="service-img" src={require('./assets/images/services/vm-edit-new.png')} alt=""/>
                    <div class="p-5">
                        <div>
                            <h4 class="contact">Contact Us</h4>
                        </div>
                        <div class="py-2">
                            <img class="contact-img" src={require('./assets/images/services/mail.png')} alt=""/>
                            <a class="text-dark text-decoration-none" href="mailto:info@virtuemantra.com" target="_blank">
                                info@virtuemantra.com
                            </a>
                        </div>
                        <div class="py-2">
                            <img class="contact-img" src={require('./assets/images/services/support.png')} alt=""/>
                            <a class="text-dark text-decoration-none" href="tel:+919634843418" target="_blank">
                                +91-9634843418	
                            </a>
                            <a class="text-dark text-decoration-none" href="tel:+919756359898" target="_blank">
                                +91-9756359898	
                            </a>
                        </div>
                        <div class="py-2">
       <img class="contact-img" src={require('./assets/images/services/location.jpg')} alt=""/>
                            <a class="text-dark text-decoration-none" href="https://g.page/virtuemantratechnologies?share" target="_blank">
                                Bhaniyawala, Haridwar Road, Behind Basant <br/> Restaurant, Uttarakhand, INDIA
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</div>
    );
  }
}

export default Our_Services;