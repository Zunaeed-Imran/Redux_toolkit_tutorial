import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/Navbar';
import Add_book from '../features/book/Add_book';
import Books_view from '../features/book/Books_view';

const Index = () => {


  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/show-books' element={<Books_view/>} />
        <Route path='/add-book' element={<Add_book/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index;
