import React, { useState } from "react";



export default function Cart(props){
  const[count,setCount]=useState(1)
    const {items,remove}=props
    console.log(items)
    console.log(items.length)

    return(
    
      <div className="container">
        <div className="row row-col-2">
        <div className="col-8 border " style={{"marginTop":"30px"}}>
             <h1>My Cart</h1>
        <div className="" >
           
           {items.length!=0 ? items.map((item)=>
               
              <div key ={item.id} class="card " style={{"width":"100%"}}>
                <div className="row">
                   <img src={item.image} class="card col-4" alt="image not found" style={{"height":"200px","border":"none"}}/>
               
                         <div class="card-body col-6 ">

                             <h5 class="card-title">{item.cardTitle}</h5>
                             <p class="card-text">{item.cardText}</p>
                          

                          </div>
                  </div>
                  <div style={{"marginTop":"20px"}}>
                  <span> <button className="rounded" onClick={()=>setCount(count+1)}>+</button></span>
                  <span> {count}</span>
                  <span><button className="rounded" onClick={()=>setCount(count-1)}>-</button></span>
                  <span><button class="btn btn-secondary"   style={{"marginLeft":"150px","border":"none"}}>save for later</button></span>
                  <span><button class="btn btn-secondary"  onClick={()=>{remove(item);}} style={{"marginLeft":"50px","border":"none"}}>Remove</button></span>
                  </div>
              </div>  
             
               
           ):"Cart is empty"} 

        </div>
        </div>
        {/* <div className="col border" style={{"marginTop":"30px","marginLeft":"20px"}}>
          <h2>Price</h2>

        </div> */}

    </div>
    </div>  
    )
}