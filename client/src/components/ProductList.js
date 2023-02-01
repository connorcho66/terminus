import React from "react";

export default function ProductList({products}){
    return (
        <div>
        {products.map(p => 
           <p key={p._id}>
            {p.name}
           </p> )}
        </div>
    )
}