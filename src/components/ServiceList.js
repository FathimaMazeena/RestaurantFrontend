import{useEffect, useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceList = () => {

    const[services, setServices]= useState(null);

    useEffect(()=>{

        const fetchServices= async ()=>{
            const response= await fetch('/api/services');
            const json= await response.json();

            console.log(json);

            if(response.ok){
                setServices(json);
            }

        }

        fetchServices();

        

    }, []);


    return (  


    <div className="product-list">

       <h3 class="p-5">OUR SERVICES</h3>
         
            <div className="row">
                {services && services.map(service => (

                <div className="container col-4 d-flex align-items-center">
                <div className="rounded-circle bg-secondary d-inline-block" style={{ width: '100px', height: '100px' }}></div>

                    <div className="service-preview d-inline-block ml-3" key={service._id} >
                        <h4>{ service.name }</h4>
                        <p>{service.description}</p>
                    </div>
                </div>    
                ))}
            </div>
        
         </div>
    

       
    );
}
 
export default ServiceList;