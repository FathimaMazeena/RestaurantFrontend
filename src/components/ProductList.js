import{useEffect, useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



{/*const ProductList = ({products}) => {
    return ( 
        <div className="product-list">

      {products && products.map(product => (
        
        <div className="product-preview" key={product._id} >
        {/*<img src={product.image} alt={product.name} />
          <h4>{ product.name }</h4>
          <p><strong>Price:</strong>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}

        </div>
     );
}
*/}


const ProductList = ({ previewProducts, allProducts }) => {

    const products = previewProducts || allProducts;

    return ( 
        <div className="product-list">
            <div className="row g-0 justify-content-around">
                {products && products.map(product => (
                    <div className="product-preview card col-3" key={product._id} style={{ width: '15rem' }}>
                        <img src={product.image} alt={product.name} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p><strong>Price: Rs.</strong>{product.price}</p>
                            <p className="card-text">{product.description}</p>
                            <a href="#" className="btn btn-secondary">Add to cart</a>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

 
export default ProductList;

 

