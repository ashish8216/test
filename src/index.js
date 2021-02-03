import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Caloun from './components/Calouu';
import Product from './components/Product';
import Card from './components/Card';

ReactDOM.render(
  <React.StrictMode>
   <App/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const numbers =[ 5, 6, 10, 12, 15];

const newNumbers = numbers.find( x => x > 10 )
 console.log (newNumbers);

const oldNumber = numbers.reduce(function(accumalabor, currentvalue){
  return accumalabor + currentvalue;
  
})
console.log (oldNumber);
