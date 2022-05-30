import React from "react";
import Items from "./Items";
export default function Main(props)
{
    const {products,onAdd,items}=props
    console.log(products)

    return(
        
      
    <div className="container">
       
          <div className=" card text-center " >
           <div className="row row-cols-4">
            {products.map((product) =>(
                <Items key={product.id} product={product} onAdd={onAdd} items={items}/>

             ))}
         </div>
        </div>
        </div> 
     
      
       
       
       
    )
}