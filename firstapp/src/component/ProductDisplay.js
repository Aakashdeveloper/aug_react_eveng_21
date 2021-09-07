import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(">>>inside product",props)
    return(
        <>
            <div class="container mt-3">
            <div class="d-flex border p-3">
                <img src="https://i.ibb.co/8BJhgK2/r6xkegcloxgn5eq8owwg.jpg"
                    class="flex-shrink-0 me-3 mt-3 rounded-circle"/>
                <div>
                    <h4>John Doe <small>Posted on February 19, 2016</small></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.</p>
                </div>
            </div>
            <div class="d-flex border p-3">
                <img src="https://i.ibb.co/fHQ8JY4/kclatp7d9dt0dwgu4zkq.jpg"
                    class="flex-shrink-0 me-3 mt-3 rounded-circle"/>
                <div>
                    <h4>John Doe <small>Posted on February 19, 2016</small></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Product;