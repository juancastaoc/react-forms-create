import React from 'react';
import './informacion-buses.style.css'; 
import Buses from '../08-buses/buses.comp';
import CategoriaBuses from '../07-categoria-buses/categoria-buses.comp';

const InformacionBuses = (props) => {
    return (

        
        <div className="informacion-buses-container">
            
            {props.ListaBuses.map((categoria,indiceb)=>{
            return (<React.Fragment key= {categoria.id}>
            <CategoriaBuses NombreCategoriaBuses= {categoria.nombre} />
            
            {categoria.buses.map((busS,indiceBus)=>{
                return (
                    <Buses key= {busS.id} bus={busS}  />
                
                );
        


            })}
          </React.Fragment>);  
        })}
            
        </div>

    );     
}
            

export default InformacionBuses;