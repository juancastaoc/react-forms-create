import React, { useState } from 'react';
import InformacionBuses from '../06-informacion-buses/informacion-buses.comp';
import './formulario-buses.style.css'; 



const FormularioBuses = (props) => {

    const [categoria,setCategoria]= useState ('b3');
    const [nombre,setNombre]= useState ('');
    const [vpasaje,setVpasaje]= useState ('0');
    const [cupo,setCupo]= useState ('0');

    const agregarBus = (event)=>{
        event.preventDefault();
    const nuevoBus ={ 
            id: nombre,
            nombre: nombre,
            precio: Number (vpasaje),
            cupos:Number (cupo),
            }
        props.onAgregarBus (nuevoBus,categoria);
    } 

    return (
        
        <>

        <InformacionBuses ListaBuses= {props.ListaBuses}/>
        
            <div className="formulario-buses-container">
            <form >
                <table>
                    <tbody>
                    <tr>
                        <td>
                        Seleccione medio de Transporte
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
                                <option value="b1">Buseta Intermunicipal</option>
                                <option value="b2">Buseta Urbana</option>
                                <option value="b3">Jeep</option>
                            </select>

                        </td>

                    </tr>
                    <tr>
                            <td>Marca vehículo</td>
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
                            <td>Cilindraje</td>
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
                            <td>Vehículo en Mantenimieto</td>
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
                            onClick={agregarBus}
                        >Agregar Vehículo</button>
                    </tr>

                    </tbody>
                    
                    
                </table>

            </form>
        </div>

        </>


    );     
}

export default FormularioBuses;