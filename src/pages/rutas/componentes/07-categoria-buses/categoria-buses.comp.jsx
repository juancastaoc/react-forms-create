import React from 'react';
import './categoria-buses.style.css'; 

const CategoriaBuses = (props) => {
    return (
        <div className="categoria-buses-container">

            {props.NombreCategoriaBuses}
            

        </div>
    );     
}
export default CategoriaBuses;