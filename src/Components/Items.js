import React,{useState} from "react";
import {Rating, __esModule} from 'react-simple-star-rating'
export default function Items(props){
  const [rating, setRating] = useState(0) // initial rating value

   
   const {product,onAdd,items}=props
  

   console.log(product)

   const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
  
      let disable=false;
      for(let i=0;i<items.length;i++)
        {
           if(items[i].id===product.id)
            {
              disable=true
            }
        }


    return(
       
      <div className="col">
             <img src={product.image} class="card-img-top" alt={product.cardTitle} style={{"height":"420px","paddingTop":"20px"}}/>
               
               
               <div class="card-body" style={{"marginTop":"10px"}} >

                      <h5 class="card-title">{product.cardTitle}</h5>
                       
                      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      />

                      <p class="card-text">{product.cardText}</p>
                      <button class="btn btn-primary" onClick={()=>{onAdd(product)}}  disabled={disable}>Add to cart</button>
               
               </div>
            
            
      </div> 
   
)}