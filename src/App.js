import React, { Component } from 'react';
import { BrowserRouter as Router, Slideshow, Switch, Route, Link, jQuery } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './my-components/Header';
import Footer from './my-components/Footer';
import Our_Services from './Our_Services';
import Products from './Products';
import Portfolio from './Portfolio';
import Career from './Career';
import $ from 'jquery';


class App extends Component {
  componentDidMount() {
    const { source } = this.props;
    console.log($); // throws error
}

  render() {
    return (

    <Router>
        <div>               
          <Switch>
      
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/Our_Services' component={Our_Services} />
              <Route path='/Products' component={Products}/>
              <Route path='/Portfolio' component={Portfolio}/>
              <Route path='/Career' component={Career}/>
              </Switch>

       <Header/>
       <Footer/>
      
        </div>
       
      </Router>
  
    );
  }
}
export default App;



