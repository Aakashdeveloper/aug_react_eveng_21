import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './ProductDisplay';

const HomePage = () => {
    return(
        <div>
            <Header/>
            <Product/>
            <Footer year="2021" month="Sep"/>
        </div>
    ) 
}

export default HomePage;
