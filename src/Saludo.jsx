import './App.css';

function Holi(props) {
  return (
    <div id="contenedor">
      {/* encabezado */}
      <div className="texto">
        <h1>{props.lugar}</h1>
      </div>
      {/* encabezado */}
      <div id="parrafo">
        <center>
          <div className='texto2'></div>
          <h3>En {props.lugar} aparte de nuestra variedad en repostería, tenemos gatitos en adopcion.</h3>
          <h1>SOLO EN {props.lugar}</h1>
        </center>
        
        <div id='contenedor2'>
            <div className='texto3'>
           <ul>
            
             <li>Los dias {props.dias} sale a acompañarte {props.gato1}</li>
             <li>Los dias {props.dias2} sale a acompañarte {props.gato2}</li>
             <li>Los dias {props.dias3} sale a acompañarte {props.gato3}</li>
             <li>Los dias {props.dias4} sale a acompañarte {props.gato4}</li>
             <li>Los dias {props.dias5} sale a acompañarte {props.gato5}</li>
           </ul>
           
        </div>
        </div>
        </div>
        </div>
  );
}

export default Holi;
