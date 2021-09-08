import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(">>>inside product",props)

    const renderProduct = props.prodData.map((data) => {
        return(
            <div className="d-flex border p-3" key={data.id}>
                <img src={data.image}className="flex-shrink-0 me-3 mt-3"/>
                <div>
                    <h4>{data.name}</h4>
                    <h5>{data.uses}</h5>
                    <p>{data.description}</p>
                    <p>Rs.{data.cost}</p>
                </div>
            </div>
        )
    })
    return(
        <>
            <div className="container mt-3">
                {renderProduct}
            </div>
        </>
    )
}

export default Product;