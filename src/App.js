import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import Contato from './Pages/contato/contato';
import Photos from './Pages/photos.js/photos';
import Comentarios from './Pages/comentários/comentarios';



function App() {
    return(

        <BrowserRouter>
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contato' element={<Contato/>} />
            <Route path='/photos' element={<Photos/>} />
           <Route path='/comentarios' element={<Comentarios/>} />        
            </Routes>
        </BrowserRouter>




)
  

}

export default App;
