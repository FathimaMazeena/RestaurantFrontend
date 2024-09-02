import{useEffect, useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MenuPreview = () => {

    const[menus, setMenus]= useState(null);

    useEffect(()=>{

        const fetchMenus= async ()=>{
            const response= await fetch('api/menus/todays-menu');
            const json= await response.json();

            if(response.ok){
                setMenus(json);
            }

        }

        fetchMenus();

        

    }, []);

    return (  


        /*<div className="menu-list">
         <h3 className="p-5">TODAY'S SPECIAL</h3>
                <div className="row g-0 justify-content-around">
                    {menus && menus.map(menu => (
                        <div className="menu-preview card w-50" key={menu._id} style={{ width: '15rem' }}>
                            <img src={menu.image} alt={menu.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{menu.name}</h5>
                                <p><strong>Price: Rs.</strong>{menu.price}</p>
                                <p className="card-text">{menu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="#" className="row btn btn-outline-secondary col-2 m-5 p-2">Explore Our Menus</a>
        </div>*/

            <div className="menu-preview">
                <h3 className="p-5">TODAY'S SPECIAL</h3>
                <div className="row g-0 justify-content-around">
                    {menus && (
                        <div className="menu-preview card w-50" key={menus._id} style={{ width: '15rem' }}>
                            <img src={menus.image} alt={menus.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{menus.name}</h5>
                                <p><strong>Price: Rs.</strong>{menus.price}</p>
                                <p className="card-text">{menus.description}</p>
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/menu" className="row btn btn-outline-secondary col-2 m-5 p-2">Explore Our Menu</Link>
                {/*<a href="/menu" className="row btn btn-outline-secondary col-2 m-5 p-2">Explore Our Menus</a>*/}
            </div>
        
       
    );
}
 
export default MenuPreview;