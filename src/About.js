import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div>
         

         <section class="col-md-12 py-5 inner">
        <div class="container text-center py-4">
            <h1 class="py-5 text-danger fw-bolder">About us</h1>
        </div>
    </section>

    <section class="about my-5">
        <div class="container col-lg-10 col-md-12">
            <div>
                <h2 class="text-dark fw-bold">ABOUT US</h2>
                <p class="text-secondary"><span class="fw-bold lead">Virtuemantra Technologies</span> was established in 2014 with the aim to become the best IT services provider in National and <br/> International Market. We are specialized in such domain like Enterprise Solutions, Web application Development and Web Designing, Digital <br/> Marketing, Telecom Software Solutions, Mobile Applications Development and Project Training. 
                <br/> Our strength is our dedicated & skilled employees. We never compromise with the quality of our service. We provide the best quality service <br/> with in a very reasonable cost. We always live up to the mission of achieving excellence through world class practices and standards in quality <br/> and project management.</p>
                <p class="text-secondary">The organization has dedicated itself to achieving a high level Customer Satisfaction by executing quality workmanship, Commitment, <br/> Credibility, Quality of service, quick response time and teamwork are our principle values. We believe in the highest quality products and <br/> services for all of our clients. We believe our clients are our greatest assets.</p>
                <p class="text-secondary">We are proud to be trusted by our clients for our work practices and offering a friendly and flexible approach, which ensures a long-term <br/> relationship with our clients.</p>
            
                <h2 class="text-dark fw-bold">Our Skills</h2>
                <p class="text-secondary">We want to work for a business we care about. It’s not just about slinging code, but producing something that has a measurable and positive <br/> impact, helps others and solves technical problems. <br/> We are web design, web development and Search Engine Optimization specialists who believe in fostering long term professional, mutually <br/> profitable relationships with our clients. Our services include Website Design, Website Development, E-Commerce, Search Engine Optimization, <br/> Database Development, Value Added Services, Mobile Application Development and Software Development.</p>
            </div>
        </div>
    </section>

    <section class="col-md-12 py-5 goals">
        <div class="container  col-lg-10 col-md-12">
            <h2 class="text-white fw-bold py-4">Our Goals</h2>
            <p class="text-white">Our goals are directly related to your results.</p>
            <div class="row py-5">
                <div class="col-md-3">
                    <div class="card bg-transparent text-center">
                        <div class="h1 pb-4">
                            <img class="our-goals"
                            src={require('./assets/images/about/satisfaction.png')}
                            alt=""/>
                        </div>
                        <p class="text-white fw-bold">Work For Customer <br/> Satisfaction.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-transparent text-center">
                        <div class="h1 pb-4">
                            <img class="our-goals" 
                      src={require('./assets/images/about/excellent-product-1.png')}
                            alt=""/>
                        </div>
                        <p class="text-white fw-bold">Make An Excellent Products <br/> For You.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-transparent text-center">
                        <div class="h1 pb-4">
                            <img class="our-goals" 
                           src={require('./assets/images/about/cuustomer-sport.png')}   
                     alt=""/>
                        </div>
                        <p class="text-white fw-bold">Provide Excellent Customer <br/> Support.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-transparent text-center">
                        <div class="h1 pb-4">
                            <img class="our-goals"
                   src={require('./assets/images/about/Daco.png')}   
                       alt=""/>
                        </div>
                        <p class="text-white fw-bold">Help You Promote Your<br/> Business Online.</p>
                    </div>
                </div>
            </div>
        </div>

    </section>


        </div>
    );
  }
}

export default About;