import React from 'react';
import './buses.style.css'; 

const Buses = (props) => {
    return (
        <div className="buses-container">
           {
               props.bus.cupos === 0
               ? // if true
               <span className="bus-sin-cupo">{props.bus.nombre}</span>
               : // if else 
               <span>{props.bus.nombre}</span>
               
           }  
            {'  '}  {props.bus.precio}


      
           
        </div>

           

        
    );     
}

export default Buses;