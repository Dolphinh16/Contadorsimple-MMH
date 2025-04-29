import React from 'react';
import ReactDOM from 'react-dom/client';


import "../styles/index.css";
import MyCounter from './components/MyCounter';

// components
const root = ReactDOM.createRoot(document.getElementById('root'));
let contador = 0;

setInterval(  () => {
  const cuatro = Math.floor(contador/10000);
  const tres = Math.floor(contador/1000);
  const dos =  Math.floor(contador/100);
  const uno = Math.floor(contador/10);
  console.log(cuatro, tres, dos, uno);

  contador++;
  
root.render(

  <MyCounter
  numeroUno = {uno} 
  numeroDos = {dos}
  numeroTres = {tres}
  numeroCuatro = {cuatro}
  />

)},100);


