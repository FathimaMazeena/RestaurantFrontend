import { useEffect, useState } from 'react';
import React from 'react';
import ProductList from '../components/ProductList';
import {Link} from 'react-router-dom';


const ProductPreview = () => {
    

    const[products, setProducts]= useState(null);

    useEffect(()=>{

        const fetchProducts= async ()=>{
            const response= await fetch('/api/products/preview');
            const json= await response.json();

            if(response.ok){
                setProducts(json);
            }

        }

        fetchProducts();

        

    }, []);

    return (
        <div className="product-preview">
            <h3 class="p-5">OUR PRODUCTS</h3>
            <ProductList previewProducts={products} />
            <Link to="/products" className="btn btn-outline-secondary col-2 m-5 p-2">More Products</Link>
        </div>
    );
};

export default ProductPreview;








