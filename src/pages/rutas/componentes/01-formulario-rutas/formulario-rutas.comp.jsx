import React, { useState } from 'react';
import TransporteUrbano from '../02-transporte-urbano/transporte-urbano.comp';
import './formulario-rutas.style.css'; 


const FormularioRutas = (props) => {

    const [categoria,setCategoria]= useState ('c1');
    const [nombre,setNombre]= useState ('');
    const [vpasaje,setVpasaje]= useState ('0');
    const [cupo,setCupo]= useState ('0');

    const agregarRuta = (event)=>{
        event.preventDefault();
    const nuevaRuta ={ 
            id: nombre,
            nombre: nombre,
            precio: Number (vpasaje),
            cupos:Number (cupo),
            }
        props.onAgregarRuta (nuevaRuta,categoria);
    } 

    return (
        
        <>

        <TransporteUrbano ListaRutaUrbana= {props.ListaRutaUrbana}/>
        
            <div className="formulario-rutas-container">
            <form >
                <table>
                    <tbody>
                    <tr>
                        <td>
                        Seleccione Tipo de Transporte
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <select 
                               value={categoria}
                               onChange={(event)=>{
                                  console.log(event.target.value);
                                  setCategoria(event.target.value);
                               }}
                            >
                                <option value="c1">Transporte Urbano</option>
                                <option value="c2">Transporte Rural</option>
                                <option value="c3">Transporte Intermunicipal</option>
                            </select>

                        </td>

                    </tr>
                    <tr>
                            <td>Ingrese destino</td>
                    </tr>
                    <tr>
                        <td><input 
                            type="text"
                             value={nombre}
                             onChange={(event)=>{
                                console.log(event.target.value);
                                setNombre(event.target.value);
                             }}
                            />
                        </td>
                    </tr>
                    <tr>
                            <td>Ingrese valor pasaje</td>
                    </tr>
                    <tr>
                        <td><input 
                            type="number"
                             value={vpasaje}
                             onChange={(event)=>{
                                console.log(event.target.value);
                                setVpasaje(event.target.value);
                             }}
                         />
                        </td>
                    </tr>
                    <tr>
                            <td>Cupos disponibles</td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                            type="number"
                             value={cupo}
                             onChange={(event)=>{
                                console.log(event.target.value);
                                setCupo(event.target.value);
                             }}
                         />
                        </td>
                    </tr>
                    <tr>
                        <button
                            onClick={agregarRuta}
                        >Añadir Ruta</button>
                    </tr>

                    </tbody>
                    
                    
                </table>

            </form>
        </div>

        </>


    );     
}

export default FormularioRutas;