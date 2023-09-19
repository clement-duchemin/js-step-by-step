import _ from 'lodash';
import * as bootstrap from 'bootstrap';//bootstrap js
import '../src/scss/styles.scss';//import scss

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());