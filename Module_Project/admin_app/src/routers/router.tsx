import React from 'react'
import MainLayout from '../layouts/main/Main.Layout'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../pages/home/Home.page'
import NotFoundPage from '../pages/notFound/NotFound.Page'
import UserPage from '../pages/user/User.Page'
import ProductPage from '../pages/product/Product.Page'
import CustomerPage from '../pages/customer/Customer.Page'


const Router:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/user" element={<HomePage/>}>
        <Route path="customers" element={<CustomerPage/>}/>
        <Route path="products" element={<ProductPage/>}/>
        </Route>
        <Route path="/admin" element={<HomePage/>}>
        <Route path="users" element={<CustomerPage/>}/>
        <Route path="customers" element={<CustomerPage/>}/>
        <Route path="products" element={<ProductPage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default Router