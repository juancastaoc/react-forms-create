import React, { useState } from 'react';
import ComponentePrincipal from './componentes/00-componente-principal/componente-principal.comp';



const PaginaTransporte = () =>  { 

    let ListaBuses = [
        {
          id:"b1",
          nombre:'Buseta Intermunicipal',
          buses:[
              {
                  id:"b1r1",
                  nombre:"Chevrolet-NPR",
                  precio:"2500",
                  cupos:1  
              },
              {
                  id:"b1r2",
                  nombre:"Kodiak",
                  precio:"2600",
                  cupos:1  
              },
              
              
              
          ]
        },
        {
          id:"b2",
          nombre:'Buseta Urbana',
          buses:[
              {
                  id:"b2r1",
                  nombre:"Chevrolet-NPR",
                  precio:"2500",
                  cupos:1  
              },            
      ]
     
        },
        {
            id:"b3",
            nombre:'Jeep',
            buses:[
                {
                    id:"b3r3",
                    nombre:"Jeep",
                    precio:"2200",
                    cupos:1  
                },            
        ]
       
          },
        

    ]

 


      
  let ListaRutaUrbana = [
          {
            id:"c1",
            nombre:'Transporte Urbano',
            rutas:[
                {
                    id:"c1r1",
                    nombre:"Villapilar-Maltería",
                    precio:"2.500",
                    cupos:1  
                },
                {
                    id:"c1r2",
                    nombre:"Villapilar-Sultana",
                    precio:"2.500",
                    cupos:1  
                },
                
                
                
            ]
          },
          {
            id:"c2",
            nombre:'Transporte Rural',
            rutas:[
                {
                    id:"c2r1",
                    nombre:"Villapilar-Bajo Tablazo",
                    precio:"2.600",
                    cupos:1  
                },
                

        ]
          },
          {
            id:"c3",
            nombre:'Transporte Intermunicipal',
            rutas:[
                {
                    id:"c3r1",
                    nombre:"Manizales-Salamina",
                    precio:"14000",
                    cupos:1  
                },
                

        ]
          },          

      ]




      
      

      const [rutas, setRutas]= useState (ListaRutaUrbana);
      const [buses, setBuses]= useState (ListaBuses);
 
    
   return (
    <>
        <ComponentePrincipal 
            ListaRutaUrbana ={rutas}
            ListaBuses={buses}

            onAgregarRuta= {(ObjRuta, categoriaId)=>{
                // creo nuevo arreglo de rutas
                const nuevasRutas = [];
                for (let i=0; i<rutas.length; i++ ){
                    if (rutas [i].id !== categoriaId){
                        nuevasRutas.push (rutas[i]);      
                    }
                    else{
                        nuevasRutas.push(
                            {
                                ...rutas[i],
                                rutas:[...rutas[i].rutas,ObjRuta]    
                             } 
                        );

                   }
                        
                }
                // cambiar el arreglo de rutas a traves de la función setrutas
                setRutas(nuevasRutas);
                console.log ([nuevasRutas]);
    }}

    onAgregarBus= {(ObjBus, categoriaId)=>{
        // creo nuevo arreglo de buses
        const nuevosBuses = [];
        for (let i=0; i<buses.length; i++ ){
            if (buses [i].id !== categoriaId){
                nuevosBuses.push (buses[i]);      
            }
            else{
                nuevosBuses.push(
                    {
                        ...buses[i],
                        buses:[...buses[i].buses,ObjBus]    
                     } 
                );

           }
                
        }
        // cambiar el arreglo de rutas a traves de la función setbuses
        setBuses(nuevosBuses);
        console.log ([nuevosBuses]);
}}



    
    
         />
    </> 

    );    
}

export default PaginaTransporte;