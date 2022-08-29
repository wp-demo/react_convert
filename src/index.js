import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './assets/css/style.css';
import jQuery from 'jquery';

ReactDOM.render(<App />, document.getElementById('vm'));




// career page

jQuery(document).ready(function() {
  
// jQuery("#career").click(function(){
// jQuery("#training-form").hide('fast');
// });
// jQuery("#career").click(function(){
// jQuery("#job-form").show('fast');
// });

// jQuery("#training").click(function(){
// jQuery("#training-form").show('fast');
// });
// jQuery("#training").click(function(){
// jQuery("#job-form").hide('fast');
// });

// index -> why choose us
jQuery("#quick-support").click(function(){
jQuery("#reasonable-price-box").hide('fast');
jQuery("#fast-delivery-box").hide('fast');
jQuery("#expert-team-box").hide('fast');
});

jQuery("#quick-support").click(function(){
jQuery("#quick-support-box").show('fast');
});

jQuery("#reasonable-price").click(function(){
jQuery("#reasonable-price-box").show('fast');
});

jQuery("#reasonable-price").click(function(){
jQuery("#quick-support-box").hide('fast');
jQuery("#fast-delivery-box").hide('fast');
jQuery("#expert-team-box").hide('fast');
});

jQuery("#fast-delivery").click(function(){
jQuery("#quick-support-box").hide('fast');
jQuery("#reasonable-price-box").hide('fast');
jQuery("#expert-team-box").hide('fast');
});

jQuery("#fast-delivery").click(function(){
jQuery("#fast-delivery-box").show('fast');
});

jQuery("#expert-team").click(function(){
jQuery("#expert-team-box").show('fast');
});

jQuery("#expert-team").click(function(){
jQuery("#quick-support-box").hide('fast');
jQuery("#reasonable-price-box").hide('fast');
jQuery("#fast-delivery-box").hide('fast');
});
});



