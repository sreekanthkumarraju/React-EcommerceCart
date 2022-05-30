
import './App.css';
import NavBar from './Components/NavBar';
import data from './data';
import Main from './Components/Main';
import Header from './Components/Header';
import Cart from './Components/Cart';

import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';

function App() {


  const [items,updateItems]=useState([])

  const {products}=data  //destructuring
  console.log(products)

  const onAdd=(product)=>
  {
       updateItems((prevState)=>([...items,{...product}]))
        console.log(product)
     

  }
  console.log(items)

  const remove=(item)=>{
   
    console.log(item)
    updateItems(items.filter((x) => x.id !==item.id));
     
  } 
 console.log(items)
  return (

    <Routes>
      <Route path='/' element={

    <div>

       <NavBar items={items}/>
       <Header/>
          <Main products={products} onAdd={onAdd} remove={remove} items={items}/>   
      
         

    </div>
      }>  </Route>
      <Route path='/cart' element={ <Cart items={items} remove={remove}/> }></Route>
    </Routes>
  );
}

export default App;
