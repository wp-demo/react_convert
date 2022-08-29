import React, { Component } from 'react';
import jQuery from 'jquery';
class Home extends Component {
  render() {
    return (

    <div>
  <section class="slider py-md-5 bg-light">
        <div class="container col-lg-10 col-md-12 py-5">
            <div class="row align-items-center jutify-content-between">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="carousel-indi active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="carousel-indi" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="carousel-indi" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                        <div class="col-md-6">
                            <h1 class="text-danger carousel-heading fw-bold">Lets's Build Something.</h1>
                            <p class="text-secondary lead">We work with the most innovative solutions on the <br/> market to help you get the best results.</p>
                            <a href="contact.html">
                                <button class="btn btn-danger mt-4"><i class="fa-solid fa-mug-hot"></i> GET STARTED</button>
                            </a>
                        </div>
                        <div class="col-md-6">
             <img src={require('./assets/images/slider-1.png')}
                           class="d-block slider-img" alt=""/>
                        </div>
                        </div>
                    </div>
                      <div class="carousel-item">
                        <div class="row">
                        <div class="col-md-6">
                            <h1 class="text-danger carousel-heading fw-bold">Boost your Creativity.</h1>
                            <p class="text-secondary lead">Escape the fad and discover our creative services <br/> that will give authority to your brand.</p>
                            <a href="contact.html">
                                <button class="btn btn-danger mt-4"><i class="fa-solid fa-mug-hot"></i> GET STARTED</button>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <img src={require('./assets/images/slider-2.png')} class="d-block slider-img" alt=""/>
                        </div>
                    </div>
                    </div>
                      <div class="carousel-item">
                        <div class="row">
                          <div class="col-md-6">
                            <h1 class="text-danger carousel-heading fw-bold">Reach the Next Level.</h1>
                            <p class="text-secondary lead">Are you ready? Count on us to revolutionize your <br/> company's online identity.</p>
                            <a href="contact.html">
                                <button class="btn btn-danger mt-4"><i class="fa-solid fa-mug-hot"></i> GET STARTED</button>
                            </a>
                            </div>
                          <div class="col-md-6">
                            <img src={require('./assets/images/slider-3.png')} class="d-block slider-img" alt="" />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </section>


    <section class="bg-light py-5">
    <div class="container col-lg-10 col-md-12 justify-content-between align-items-center">
        <div class="row d-md-flex py-2">
            <div class="col-lg-10 col-md-9">
                <h2 class="text-dark fw-bold">What we do?</h2>
            </div>
            <div class="col-lg-2 col-md-3">
                <a href="services.html">
                    <button class="btn btn-danger"><i class="fa-solid fa-border-all"></i> VIEW ALL</button>
                </a>
            </div>
        </div>
        <div class="row d-md-flex py-5 g-4">
            <div class="col-lg-4 col-md-6">
                <div class="card bg-white shadow">
                    <div class="card-body text-center">
                        <div class="h1 mb-2 text-danger">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <h4 class="card-title mb-3 text-dark fw-bold">Website Pro</h4>
                        <p class="text-dark">We build professional responsive websites optimized for the most popular search engines with look and feel.</p>
                        <a href="./website-pro.html">
                            <button class="btn btn-danger">Read More..</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="card bg-white shadow">
                    <div class="card-body text-center">
                        <div class="h1 mb-2 text-danger">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h4 class="card-title mb-3 text-dark fw-bold">Enterprise Solution</h4>
                        <p class="text-dark">We provide Enterprise solutions to large scale companies as well as startups companies.</p>
                        <br/>
                        <a href="/enterprise-solutions.html">
                            <button class="btn btn-danger">Read More..</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="card bg-white shadow">
                    <div class="card-body text-center">
                        <div class="h1 mb-2 text-danger">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                        </div>
                        <h4 class="card-title mb-3 text-dark fw-bold">Mobile Apps</h4>
                        <p class="text-dark">Follow the global trend and create your revolutionary mobile app built with the best technologies.</p>
                        <br/>
                        <a href="/mobile-apps.html">
                            <button class="btn btn-danger">Read More..</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="card bg-white">
                    <div class="card-body text-center shadow">
                        <div class="h1 mb-2 text-danger">
                            <i class="fa-solid fa-layer-group"></i>
                        </div>
                        <h4 class="card-title mb-3 text-dark fw-bold">VAS Services</h4>
                        <p class="text-dark">Telecom VAS solutions and service delivery platform for SMS, IVR, OBD, USSD, WAP.</p>
                        <br/>
                        <a href="./vas-services.html">
                            <button class="btn btn-danger">Read More..</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="card bg-white">
                    <div class="card-body text-center shadow">
                        <div class="h1 mb-2 text-danger">
                            <i class="fa-solid fa-chart-column"></i>
                        </div>
                        <h4 class="card-title mb-3 text-dark fw-bold">SEO/Digital Marketing</h4>
                        <p class="text-dark">We work to promote your brand in partnership with the best marketing platforms today.</p>
                        <br/>
                        <a href="seo-digital-marketing.html">
                            <button class="btn btn-danger">Read More..</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="card bg-white shadow">
                    <div class="card-body text-center">
                        <div class="h1 mb-2 text-danger">
                            <i class="fa-solid fa-lightbulb"></i>
                        </div>
                        <h4 class="card-title mb-3 text-dark fw-bold">Website Design</h4>
                        <p class="text-dark">We create your brand thinking about your target audience using design techniques.</p>
                        <br/>
                        <a href="website-design.html">
                            <button class="btn btn-danger">Read More..</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>



    <section class="who bg-white py-5">
        <div class="container col-lg-10 col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="text-dark fw-bold">Who we are ?</h2>
                    <p class="text-secondary"><b>Virtuemantra Technologies</b> is INDIA based IT Firm located in Dehradun(U.K) and providing excellent software services and support since 2014 in the local and International market.</p>
                    <p class="text-secondary">We help our customer to achieve their goals in minimum time with great results. Today we have more than thousands of long term clients those are statisfied with our excellent services & support.</p>
                </div>
                <div class="col-md-6">
                    <video controls width="100%">
                        <source src="./video/vm.mp4" type="video/mp4"/>
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
            </div>
        </div>
    </section>

    <section class="why bg-white py-5">
        <div class="container col-lg-10 col-md-12">
            <div class="row">
                <div class="col-md-6">
            <img class="why" src={require('./assets/images/news-4-600x454.jpg')}
                  alt=""/>
                </div>
                <div class="col-md-6">
                    <h2 class="text-dark fw-bold p-4">Why choose us ?</h2>
                    <p class="text-secondary fw-bold px-4">We help client to reach their goal in a very short time.</p>
                    <div class="choose-btn-group">
                        <button class="quick-support-btn" id="quick-support">Quick Support</button>
                        <button class="reasonable-price-btn" id="reasonable-price">Reasonable price</button>
                        <button class="fast-delivery-btn" id="fast-delivery">Fast Delivery</button>
                        <button class="expert-team-btn" id="expert-team">Expert Team</button>
                    </div>

                    <div class="bg-light mx-4 mt-3 pt-4 px-2 h-50" id="quick-support-box">
                        <p class="text-secondary">Our team is available 24/7 for any kind of technical support you needed. Our support team ensure that to solve any problem within a minimum time frame. Our main motive is to deliver best services on time.</p>
                    </div>
                    <div class="bg-light mx-4 mt-3 pt-4 px-2 h-50" id="reasonable-price-box">
                        <p class="text-secondary">We offer our services at affordable rates. We develop customized solutions according to your needs. We design a solutions that reflects your products, services and your business positively. We have delivered many projects to thousands of customers.</p>
                    </div>
                    <div class="bg-light mx-4 mt-3 pt-4 px-2 h-50" id="fast-delivery-box">
                        <p class="text-secondary">Our main focus is on fast delivery of our projects to customers , to promote the success of their business as we understand the customer’s needs and develop according to them. We also continuously improve our products and services according to the new trends and technologies.</p>
                    </div>
                    <div class="bg-light mx-4 mt-3 pt-4 px-2 h-50" id="expert-team-box">
                        <p class="text-secondary">We have qualified and experienced team of developers & designers who provides cutting edge solutions to our customers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section class="testimonials bg-light py-5">
        <div class="container col-lg-10 col-md-12 text-center">
            <h2 class="text-dark fw-bold">Our Testimonials</h2>
            <p class="text-secondary pt-3 mb-0">Our customers are satisfied with the work we do.</p>
            <p class="text-secondary">The greatest gratification is to receive recognition for what we have built. It motivates us to improve even more.</p>
        </div>

        <div class="test">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div id="testimonial-slider" class="owl-carousel">
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    Amazing job creating my real estate platform to make it easier for my clients to run business. They have been very easy to work with and made updates when required.I recommend!
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic"><img src={require('./assets/images/testimonials/1.png')} alt="" /></div>
                                    <h3 class="title">JAYDEN HURVITZ</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    I must say that I am very impressed with my working relationship with Virtuemantra Tech. Nitesh is a super knowledgeable developer/designer.I would recommend him to anyone. Always on time, trust worthy, dependable, honest, knowledgeable. That why they get 5 stars from me.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic"><img src={require('./assets/images/testimonials/2.png')} alt="" /></div>
                                    <h3 class="title">Sarah Lopez</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    I’ve worked with Nitesh and his team on several projects in the last few months and will definately work with them in the future.They delivered everything as agreed even worked on out of scope items without affecting the cost of the projects. Pleasure working with them.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic">
                                      <img src={require('./assets/images/testimonials/3.png')}
                                  alt="" /></div>
                                    <h3 class="title">PAUL AVERITT</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    Virtuemantra redesigned our website and now we feel proud on our website.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic">
                                      <img src={require('./assets/images/testimonials/4.png')}
                                    alt="" /></div>
                                    <h3 class="title">AMAZING FOR YOU</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    Very professional and time bounded services. You all have done a great job.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic">
          <img src={require('./assets/images/testimonials/5.png')}
             alt=""/></div>
                                    <h3 class="title">VIKAS BHATT</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    I first found out about this company last year and I have requested serveral jobs related to creating an SMS app I can use in my business for prospecting via SMS and making calls. Sampan did an amazing job He is always there when I need some updates or fixing a small issue. They are very professional and I highly recommend.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic">
                                      <img src={require('./assets/images/testimonials/6.png')}
                                 alt="" /></div>
                                    <h3 class="title">NOE CASTELLON</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    Excellent company to work with with an impeccable level of service. The teams attention to details is superb and Nitesh is an excellent communicator. Highly recommended.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic">
                                      <img src={require('./assets/images/testimonials/7.png')}
                                     alt="" /></div>
                                    <h3 class="title">Karl Rainey</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    Amazing place, People are professional and the work environment is awesome.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic">
                                      <img src={require('./assets/images/testimonials/8.png')}
                                    alt=""/></div>
                                    <h3 class="title">James Smith</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    They rendered good services for high quality work.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic">
                      <img src={require('./assets/images/testimonials/9.png')}
 alt=""/></div>
                                    <h3 class="title">Iqra Pervaiz</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial">
                                <span class="icon fa fa-quote-left"></span>
                                <p class="description">
                                    A great web development agency.and the service was friendly and efficient.
                                </p>
                                <div class="testimonial-content">
                                    <div class="pic">
                                      <img src={require('./assets/images/testimonials/10.png')}
                                      alt=""/></div>
                                    <h3 class="title">Aliyana Smith</h3>
                                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                        <li><i class="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="talk bg-light py-5">

        <div class="container col-lg-10 col-md-12">

            <div class="row">
                <div class="col-md-6">
                    <h2 class="text-dark fw-bold mb-4">Let's Talk?</h2>
                    <p class="text-secondary mb-5">Don't wait until tomorrow. Talk to one of our consultants today and 
                    <br/> learn how to start leveraging your business.</p>

                    <form name="myform" method="" action="" onsubmit="validateform()"/>
                        <input type="email" name="email" id="" placeholder="Email" required/>
                        <input type="text" name="name" id="" placeholder="Name" required/>
                        <input type="number" name="phone" id="" placeholder="Phone" required/>
                        <button type="submit" class="btn btn-danger">SUBMIT <i class="fa-solid fa-circle-arrow-right"></i></button>
                    <form/>
                </div>
                <div class="col-md-6">
                    <img class="talk-girl" src={require('./assets/images/products/3778872-new.png')}
 alt=""/>
                </div> 
            </div>

        </div>

    </section>


        </div>
    );
  }
}



export default Home;
