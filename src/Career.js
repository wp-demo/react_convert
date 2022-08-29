import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Career extends Component {
  static propTypes = {}

  render() {
    return (
      <div>

<section class="col-md-12 py-5 inner">
        <div class="container text-center py-4">
            <h1 class="py-5 text-danger fw-bolder">Career</h1>
        </div>
    </section>

    <section class="col-md-12 py-5">
        <div class="container col-md-10">
            <h2 class="text-dark fw-bold py-4">We help you to make your career</h2>

            <button class="training-btn" id="training">INDUSTRIAL TRAINING</button>
            <button class="career-btn" id="career">CAREER</button>

            <div class="row py-5">
                <div class="col-md-6">
                    <div class="" id="training-form">
                        <h3 class="text-dark fw-bold">APPLY FOR TRAINING</h3>
                        <form action="" method="">
                            <div>
                                <label for="first-name">First Name *</label>
                                <br/>
                                <input type="text" name="first-name" id="first-name" required/>
                                <label for="last-name">Last Name *</label>
                                <br/>
                                <input type="text" name="last-name" id="last-name" required/>
                            </div>
                            <div>
                                <label for="gender">Gender *</label>
                                <div>
                                    <label for="male">Male</label>
                                    <input type="radio" name="gender" id="male" value="male" required/>

                                    <label for="female">Female</label>
                                    <input type="radio" name="gender" id="female" value="female" required/>
                                </div>
                            </div>
                            <div>
                                <label for="email">Email *</label>
                                <input type="email" name="email" id="email" required/>
                            </div>
                            <div>
                                <label for="phone">Phone *</label>
                                <input type="number" name="phone" id="phone"/>
                            </div>
                            <div>
                                <label for="resume">Resume *</label>
                                <input type="file" name="resume" id="resume"/>
                            </div>
                            <div>
                                <label for="training">Eligibility *</label>
                                <br/>
                                <select name="eligibility" id="eligibility" required>
                                    <option value="bca">BCA</option>
                                    <option value="mca">MCA</option>
                                    <option value="bsc-it">B.Sc IT</option>
                                    <option value="btech">B.Tech (IT & CSE)</option>
                                    <option value="msc-it">M.Sc IT</option>
                                    <option value="other">Other IT Certificate / Diploma</option>
                                </select>
                            </div>
                            <div>
                                <label for="eligibility">Training Applied For *</label>
                                <br/>
                                <select name="training" id="training" required>
                                    <option value="android">Android</option>
                                    <option value="front-end">Web Designing (Front-End)</option>
                                    <option value="back-end">Web Development (Back-End)</option>
                                </select>
                            </div>
                            <div>
                                <label for="duration">Duration *</label>
                                <br/>
                                <select name="duration" id="duration" required>
                                    <option value="45-days">45 Days</option>
                                    <option value="3-days">3 Months</option>
                                    <option value="6-months">6 Months</option>
                                </select>
                            </div>
                            <div class="mt-2">
                                <button type="submit" class="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div class="" id="job-form">
                        <h3 class="text-dark fw-bold">APPLY FOR JOB</h3>
                        <form action="" method="">
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
                                <label for="address">Address *</label>
                                <br/>
                                <textarea name="address" id="address" cols="30" rows="4"></textarea>
                            </div>
                            <div>
                                <label for="phone">Phone *</label>
                                <input type="number" name="phone" id="phone"/>
                            </div>
                            <div>
                                <label for="resume">Upload Resume *</label>
                                <input type="file" name="resume" id="resume"/>
                            </div>
                            <div>
                                <label for="experience">Experience</label>
                                <br/>
                                <select name="experience" id="duration">
                                    <option value="0-6-months">0-6 Months</option>
                                    <option value="6-12-months">6-12 Months</option>
                                    <option value="1-2-years">1-2 Years</option>
                                    <option value="2-3-years">2-3 Years</option>
                                    <option value="3-3-years">3-3+ Years</option>
                                </select>
                            </div>
                            <div>
                                <label for="job-skills">Job Skills & Training *</label>
                                <input type="text" name="job-skills" id="job-skills"/>
                            </div>
                            <div>
                                <label for="certifications">Training or Certifications *</label>
                                <input type="text" name="certifications" id="certifications"/>
                            </div>
                            <div class="mt-2">
                                <button type="submit" class="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="text-dark fw-bold text-center">INDUSTRIAL TRAINING</h3>
                    <img class="service-img mt-2" src={require('./assets/images/career.jpg')} alt=""/>
                    <p class="text-secondary mt-4">Virutemantra invite the students from different Colleges and Institutes for Vocational and Summer Training on LIVE Projects.</p>
                    <p class="text-secondary">Our Internship Program is a practical and wise Investment in your Professional Future. In these Training Program, you can E-Chance and gain your additional knowledge and acquire valuable references. This is great advantages for a college students soon to seeking a Full-Time Career position. Now the time is to take hold of your bright career and take advantage of this for life Changing Opportunity.</p>
                    <p class="text-secondary">Virtuemantra mostly hires from the trainees. Our Maximum Employees are they who took training under Virtuemantra Technologies.</p>
                </div>
            </div>
        </div>
    </section>

      </div>
    )
  }
}

export default Career