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

    /*
    var a = [1,2,3,4,8,5,7,3,9,1,5]
    a.filter((data) => {return data>4})
    */

    filterProduct = (userData) => {
        console.log(userData);
        const output = this.state.products.filter((data) => {
            return ((data.name.toLowerCase().indexOf(userData.toLowerCase())>-1) || (data.description.toLowerCase().indexOf(userData.toLowerCase())>-1));
        })
        this.setState({filtered:output})
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
