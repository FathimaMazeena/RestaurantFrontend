import{useEffect, useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LocationList = () => {

    const[locations, setLocations]= useState(null);

    useEffect(()=>{

        const fetchLocations= async ()=>{
            const response= await fetch('/api/locations');
            const json= await response.json();

            if(response.ok){
                setLocations(json);
            }

        }

        fetchLocations();


    }, []);

    return (  


    <div className="location-list">

       <h3 className="p-5">LOCATIONS</h3>
         
       <div className="row g-0 justify-content-around">
                    {locations && locations.map(location => (
                        <div className="location-preview card w-50" key={location._id} style={{ width: '15rem' }}>
                            <img src={location.image} alt={location.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{location.name}</h5>
                                <p className="card-text">{location.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
        
         </div>
    

       
    );
}
 
export default LocationList;