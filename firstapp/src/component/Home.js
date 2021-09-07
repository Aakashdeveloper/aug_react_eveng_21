import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './ProductDisplay';
import JSON from './db.json'

class HomePage extends Component {
    constructor(){
        super()

        this.state={
            products:JSON
        }
    }

    render(){
        // console.log(JSON)
        return(
            <>
                <Header/>
                <Product prodData={this.state.products}/>
                <Footer year="2021" month="Sep"/>
            </>
        )
    }
}


export default HomePage;
