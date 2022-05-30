import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import sty

export default function NavBar(props){
  const {items}=props

return(

  <div>

    <nav class="navbar navbar-expand-lg bg-light">
    
      <div class="container-fluid ">

          <a class="navbar-brand" href="#">Amazon</a>

           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
               <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
             
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
       
              <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
              </li>
        
              <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
          
                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
           
                    <li><a class="dropdown-item" href="#">All products</a></li>
                    <li><hr class="dropdown-divider"/></li>    

                    <li><a class="dropdown-item" href="#">Popular Items</a></li>
            
                    <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                 </ul>
               </li>
          </ul>

          <div class="d-flex  border" >
                     
               <Link to="/cart" className=' d-flex flex-row'>

              <div>
               
               <FontAwesomeIcon icon={solid('cart-arrow-down')} size="3x" pull="left" style={{"fontSize":"30px","paddingTop":"15px"}} />
                 <div style={{"position":"absolute","paddingLeft":"8px","paddingBottom":"4px"}}>
               <sup className='border border-danger px-2 rounded bg-danger' style={{"color":"white"}}>{items.length}</sup>
               </div>
               </div>
               <h4 style={{"paddingTop":"11px"}}>Cart</h4>
               </Link> 
          </div>

        </div>
      </div>
    </nav>
  </div>
)
}