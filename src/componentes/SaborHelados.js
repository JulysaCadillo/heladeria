import React from "react";
import PrecioHelados from "./PrecioHelados";

const SaborHelados=()=>(
    <div className="saborhelados">
        <div>
            <h2>LISTADO DE HELADOS</h2>
        </div>
        
        <div>
            <PrecioHelados nombre="CHOCOLATE">/></PrecioHelados>
            <p> precio=s/ 12.00</p>
            
            <PrecioHelados nombre="FRESA" ></PrecioHelados>
            <p> precio=s/ 12.00</p>
            <PrecioHelados nombre="VAINILLLA" ></PrecioHelados>
            <p> precio=s/ 12.00</p>
     
        </div>
        

    
    </div>
  
    
);
export default SaborHelados; 
 
