import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Holi from './Saludo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Holi gato1="RONALDO" gato2="SILTESTRE" gato3="MISHIZU"gato5="BIGOTES"  gato4="LENGUAS"  lugar="CAT CAKE.S" ciudad="LA PAZ" dias="LUNES" horas="10:00 " horas2="16:00 "  dias5="VIERNES" dias2="MARTES"  dias3="MIERCOLESS"  dias4="JUEVES " comida="PASTEL" sabor1="CHOCOLATE" sabor2="FRESAS" sabor3="VAINILLA" sabor4="MANZANA" sabor5="MIXTO" precio="00bs"  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

