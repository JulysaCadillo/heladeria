import React from "react";

const PrecioHelados=({nombre},{precio})=> {
    

    return (
        <div className="PrecioHelados">
            <h3> HELADOS: {nombre}</h3>
           
            <p>Descripcion del helado: tamaño pequeño tradicional</p>
            
        </div>
    )
}
    
    
export default  PrecioHelados;