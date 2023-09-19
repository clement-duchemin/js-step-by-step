import _ from 'lodash';
import * as bootstrap from 'bootstrap';//bootstrap js
import '../src/scss/styles.scss';//import scss

function component() {
    const element = document.createElement('div');
    element.classList.add('container');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'onepoint'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());