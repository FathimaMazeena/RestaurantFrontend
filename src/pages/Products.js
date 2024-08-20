import{useEffect, useState} from 'react';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

const Product = () => {

    
    const[products, setProducts]= useState(null);

    useEffect(()=>{

        const fetchProducts= async ()=>{
            const response= await fetch('/api/products');
            const json= await response.json();

            if(response.ok){
                console.log(json);
                setProducts(json);
            }

        }

        fetchProducts();

        

    }, []);


    return(
        <div className="product">
            <h1 className="p-5">All Products</h1>
            <ProductList allProducts={products}/>
        </div>
    );
}

export default Product;