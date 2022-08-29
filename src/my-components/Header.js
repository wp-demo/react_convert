import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export class header extends Component {
  render() {
    return (
      <div>
<header class="page-header" id="header">
    <nav class="navbar navbar-expand-lg bg-white navbar-dark fixed-top">
        <div class="container col-lg-10 col-md-12">
        <Link to={'/'} class="navbar-brand"> 
            <img class="nav-logo" src={require('../assets/images/nav-logo.png')} />
           
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                   <Link to={'/'} className="nav-link active"> Home </Link></li>
                
                    <li class="nav-item">
                 <Link to={'/About'} className="nav-link">About us</Link></li>
 
             <li class="nav-item">
                <Link to={'/Our_Services'} className="nav-link"> Our Services</Link>
            </li>
                    <li class="nav-item">
                    <Link to={'/Products'} className="nav-link">Products</Link>
                    </li>
                    <li class="nav-item">
                     <Link to={'/Portfolio'} className="nav-link">Portfolio</Link>
                    </li>
                    <li class="nav-item">
                       <Link to={'/Career'} className="nav-link">Career</Link>
                    </li>
                    <li class="nav-item">
                    <Link to={'/Contact'} className="btn btn-contact"><i class="fa-solid fa-rocket"></i> Let's Talk</Link>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>

      </div>
    );
  }
}

export default header