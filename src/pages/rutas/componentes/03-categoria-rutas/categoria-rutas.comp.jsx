import React from 'react';
import './categoria-rutas.style.css'; 

const CategoriaRutas = (props) => {
    return (
        <div className="categoria-rutas-container">

            {props.NombreCategoriaUrbana}
            {props.NombreCategoriaRural}
            {props.NombreCategoriaIntermunicipal}

        </div>
    );     
}
export default CategoriaRutas;