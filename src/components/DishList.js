import{useEffect, useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const DishList = () => {

    

    const[dishes, setDishes]= useState(null);

    useEffect(()=>{

        const fetchDishes= async ()=>{
            const response= await fetch('/api/dishes/preview');
            const json= await response.json();

            if(response.ok){
                setDishes(json);
            }

        }

        fetchDishes();

        

    }, []);

    return ( 
        <div className="dish-list">
            <h3 class="p-5">POPULAR DISHES</h3>
            <div className="row g-0 justify-content-around">
                {   dishes && dishes.map(dish => (
                    <div className="dishes-preview card col-3" key={dish._id}sh style={{ width: '15rem' }}>
                        <img src={dish.image} alt={dish.name} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{dish.item}</h5>
                            <p><strong>Price: Rs.</strong>{dish.price}</p>
                            <p className="card-text">{dish.description}</p>
                
                        </div>
                    </div>
                ))}
               
            </div>
            <a href="#" className="btn btn-outline-secondary col-2 m-5 p-2">Explore More Dishes</a>
        </div>
    );
}

 
export default DishList;

 

