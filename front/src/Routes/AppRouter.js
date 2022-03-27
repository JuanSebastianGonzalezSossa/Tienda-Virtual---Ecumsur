import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProductListPage } from '../Components/ProductListPage';
import { ProductDisplayPage } from '../Components/ProductDisplayPage';
import { Navbar } from '../Components/Navbar';
import { Error404 } from '../Components/Error404';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />
        <Route exact path="/ProductDisplayPage/:id/:name/:description/:brand/:category/:price/:countInStock/:rating/:numReviews" element={<ProductDisplayPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
