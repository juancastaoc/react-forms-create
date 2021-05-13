import React from 'react';
import './rutas.style.css'; 

const Rutas = (props) => {
    return (
        <div className="rutas-container">
           {
               props.ruta.cupos === 0
               ? // if true
               <span className="ruta-sin-cupo">{props.ruta.nombre}</span>
               : // if else 
               <span>{props.ruta.nombre}</span>
               
           }  
            {'  '} ${props.ruta.precio}


      
           
        </div>

           

        
    );     
}

export default Rutas;