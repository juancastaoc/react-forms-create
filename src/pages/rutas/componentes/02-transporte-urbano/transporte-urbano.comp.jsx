import React from 'react';
import CategoriaRutas from '../03-categoria-rutas/categoria-rutas.comp';
import Rutas from '../04-rutas/rutas.comp';
import './transporte-urbano.style.css'; 

const TransporteUrbano = (props) => {
     
    return (
        <div className="transporte-urbano-container">
            <div className="informacion-rutas">
                {props.ListaRutaUrbana.map((categoria,indice)=>{
                    return (<React.Fragment key= {categoria.id}>
                    <CategoriaRutas NombreCategoriaUrbana= {categoria.nombre} />
                    
                    {categoria.rutas.map((rutaS,indiceRuta)=>{
                        return (
                            <Rutas key= {rutaS.id} ruta={rutaS}  />

                        );
                


                    })}
                </React.Fragment>);  
                })}
            </div>
        </div>

    );     
}
export default TransporteUrbano;