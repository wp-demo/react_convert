import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
        <div>
<section class="col-md-12 py-5 inner">
        <div class="container text-center py-4">
            <h1 class="py-5 text-danger fw-bolder">Products</h1>
        </div>
    </section>

    <section class="products py-5">
        <div class="container col-lg-10 col-md-12">
            <h2 class="text-dark fw-bold py-4">Products</h2>
            <p class="text-secondary">We have more than <b>thousands of Clients</b> who are using our online based Application and Management System products like Messaging & <br/> Calling App , Custom CRM, School ERP and many more. Check out the below products we can offer you , or contact us today to find out more!</p>
        </div>
    </section>

    <section class="products-items bg-light">
        <div class="container col-lg-10 col-md-12">
            <div class="row py-5 gy-4">
                <div class="col-md-3">
                    <div class="card bg-light shadow">
                        <div class="card-body text-center">
                            <h4 class="card-title py-4 text-dark fw-bold">Text24Hours</h4>
                            <p class="text-secondary mt-4">A platform for sending <br/> SMS and Voice calling.</p>
                            <a href="twilio-app.html">
            <img class="product-1-img py-5" src={require('./assets/images/products/text24hours.png')} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-light shadow">
                        <div class="card-body text-center">
                            <h4 class="card-title py-4 text-dark fw-bold">Billing Software</h4>
                            <p class="text-secondary mt-4">Create all your invoices <br/> in one click.</p>
                            <a href="billing-software.html">
<img class="product-2-img py-4 mt-3"  
src={require('./assets/images/products/billing.png')} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-light shadow">
                        <div class="card-body text-center">
                            <h4 class="card-title mt-4 text-dark fw-bold">Project <br/> Management <br/> System</h4>
                            <p class="text-secondary">Manage your projects <br/> and tasks in a simple <br/> way.</p>
                            <a href="project-management-system.html">
                                <img class="product-3-img my-2"
         src={require('./assets/images/products/crm.png')} alt=""/>

                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-light shadow">
                        <div class="card-body text-center">
                            <h4 class="card-title py-4 text-dark fw-bold">School ERP</h4>
                            <p class="text-secondary mt-4">Manage your School <br/> Management from any <br/> where of the world.</p>
                            <a href="school-erp.html">
                                <img class="product-4-img my-3"
                    src={require('./assets/images/products/erp.png')} alt=""/>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 bg-light">
        <div class="container col-lg-10 col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="text-dark fw-bold mb-4">Let's Talk?</h2>
                    <form name="myform" method="" action="" onsubmit="validateform()"/>
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
                            <label for="message">Message *</label>
                            <br/>
                            <textarea name="message" id="message" cols="30" rows="4" required></textarea>
                        </div>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-danger">Send message</button>
                        </div>
                    <form/>
                </div>
                <div class="col-md-6">
                    <img class="service-img" src={require('./assets/images/products/3778872-new.png')} alt=""/>
                </div>
            </div>
        </div>
    </section>

    </div>
    );
}
}
export default Products;