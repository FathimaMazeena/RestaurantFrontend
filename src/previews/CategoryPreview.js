
import{useEffect, useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryPreview = () => {

    const[categories, setCategories]= useState(null);

    useEffect(()=>{

        const fetchCategories= async ()=>{
            const response= await fetch('/api/categories');
            const json= await response.json();

            if(response.ok){
                setCategories(json);
            }

        }

        fetchCategories();

        

    }, []);

    return (  


    <div className="category-preview">

       <h3 class="p-5">WHAT WE OFFER</h3>
         
            <div className="row">
                {categories && categories.map(category => (

                <div className="container col-4 d-flex align-items-center">
                <div className="rounded-circle bg-secondary d-inline-block" style={{ width: '100px', height: '100px' }}></div>

                    <div className="category-preview d-inline-block ml-3" key={category._id} >
                        <h4>{ category.name }</h4>
                        <p>{category.description}</p>
                    </div>
                </div>    
                ))}
            </div>
        
         </div>
    

       
    );
}
 
export default CategoryPreview;