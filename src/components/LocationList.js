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
         
            <div className="row">
                {locations && locations.map(location => (

                <div className="container col-4 d-flex align-items-center " key={location._id}>
                <div className="rounded-circle bg-secondary d-inline-block" style={{ width: '100px', height: '100px' }}></div>

                    <div className="location-preview d-inline-block ml-3">
                        <h4>{ location.name }</h4>
                        <p>{location.description}</p>
                    </div>
                </div>    
                ))}
            </div>
        
         </div>
    

       
    );
}
 
export default LocationList;