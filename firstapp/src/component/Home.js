import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './ProductDisplay';
import JSON from './db.json'

class HomePage extends Component {
    constructor(){
        super()

        this.state={
            products:JSON,
            filtered:JSON
        }
    }

    filterProduct = (data) => {
        console.log(data)
    }

    render(){
        // console.log(JSON)
        return(
            <>
                <Header userText={(userInput) => {this.filterProduct(userInput)}}/>
                <Product prodData={this.state.filtered}/>
                <Footer year="2021" month="Sep"/>
            </>
        )
    }
}


export default HomePage;
