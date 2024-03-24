import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from '../coustomer/Pages/Home'
import Cart from '../coustomer/components/Carts/Cart'
import Navigation from '../coustomer/components/Navigation/navigation'
import Footer from '../coustomer/components/Footer/Footer'
import Product from '../coustomer/components/Product/Product'
import ProductDetails from '../coustomer/components/Productdetails/Productdetails'
import Checkout from '../coustomer/components/Checkout/Checkout'
import Order from '../coustomer/components/Order/Order'
import OrderDetails from '../coustomer/components/Order/OrderDetails'
const CustomerRouters = () => {
  return (
    <div>
          <div> <Navigation /></div>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart />}></Route>
              <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
              <Route path='/product/:productid' element={<ProductDetails />}></Route>
              <Route path='/checkout' element={<Checkout />}></Route>
              <Route path='/account/order' element={<Order />}></Route>
              <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
              
             
             
              
              {/* <Order/> */}
              {/* <OrderDetails/> */}


        </Routes>
        <div>
            <Footer />
        </div>
        </div>
  )
}

export default CustomerRouters