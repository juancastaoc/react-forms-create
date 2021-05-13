import React from 'react';
import FormularioRutas from '../01-formulario-rutas/formulario-rutas.comp';
import TransporteIntermunicipal from '../05-formulario-buses/formulario-buses.comp';
import TransporteUrbano from '../02-transporte-urbano/transporte-urbano.comp';

import './componente-principal.style.css'; 


import InformacionBuses from '../06-informacion-buses/informacion-buses.comp';
import FormularioBuses from '../05-formulario-buses/formulario-buses.comp';


const ComponentePrincipal = (props) => {
    return (
        <div className="componente-principal-container">

            <div className ="titulo-empresa">
                <h1>
                    Empresa de Transportes Manizales 
                </h1>
                
            </div>
            
                   
            <TransporteUrbano ListaRutaUrbana={props.ListaRutaUrbana} />
           
            <FormularioRutas ListaRutaUrbana={props.ListaRutaUrbana}
            onAgregarRuta= {props.onAgregarRuta}/>

            <InformacionBuses ListaBuses={props.ListaBuses}/>
            
            <FormularioBuses ListaBuses={props.ListaBuses}
            onAgregarBus= {props.onAgregarBus}/>

        </div>
        
    );      
}

export default ComponentePrincipal;