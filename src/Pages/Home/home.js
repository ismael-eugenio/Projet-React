import React from 'react';
import './home.css'
import Header from '../../Components/header/header';
import Trailer from '../../Components/Trailer/trailer';

import Cards from '../../Components/cards/cards';
import Footer from '../../Components/footer/footer';



function Home() {

    return (
     <>
        <Header/>
        <div id='banner'></div>
       
        <Trailer/>
        <Cards/>
        <Footer/>
     </> 

   
    )

}

export default Home;