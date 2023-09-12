import "./css/App.css"
import 'react-toastify/dist/ReactToastify.css';

// import React from 'react'
import { ToastContainer } from "react-toastify"
import { Routes, Route } from "react-router-dom"
import LoginPage from "./components/Login/LoginPage"
import Layout from "./components/Layout/Layout"
import HomePage from "./components/Home/HomePage"
import Errorpage from "./components/Error/ErrorPage"
import Products from "./components/Product/Products"
import Blogs from "./components/Product/Blogs"
import Contact from "./pages/Contact"
import Compare from "./pages/Compare"
import Wishlist from "./pages/Wishlist"
import RegisterPage from "./components/Login/RegisterPage"
import LoginWithOtp from "./components/Login/LoginWithOtp"
import BlogPage from "./pages/SingleBlogPage"
import SingleProductPage from "./pages/SingleProductPage"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
        pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:id' element={<BlogPage />} />
          <Route path='/product/:id' element={<SingleProductPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otplogin" element={<LoginWithOtp />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path='/compare' element={<Compare />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  )
}

export default App