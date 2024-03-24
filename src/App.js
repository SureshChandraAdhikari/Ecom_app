import Navigation from "./coustomer/components/Navigation/navigation";
import React from 'react'
import Home from "./coustomer/Pages/Home";
import Footer from "./coustomer/components/Footer/Footer";
import Product from "./coustomer/components/Product/Product";
import Productdetails from "./coustomer/components/Productdetails/Productdetails";
import Cart from "./coustomer/components/Carts/Cart";
import Checkout from "./coustomer/components/Checkout/Checkout";
import Order from "./coustomer/components/Order/Order";
import OrderDetails from "./coustomer/components/Order/OrderDetails";
import {Routes,Route} from "react-router-dom"
import CustomerRouters from "./Routers/CustomerRouters";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}/>
        </Routes>
     
    
   
    </div>
  )
}

export default App
