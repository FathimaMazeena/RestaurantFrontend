import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const OfferList = ({offers}) => {
    return ( 
        <div className="offer-list">

           <h3 class="p-5">SPECIAL OFFERS AND PROMOTIONS</h3>

            <div className="container card col-8 text-start p-3 mb-5">
                <div className="card-body">
                    
                        {offers && offers.map(offer => (

                        <div className="offer-preview" key={offer._id} >
                            <h4>{ offer.title }</h4>
                            <p>{offer.description}</p>
                            <a href="#" className="btn btn-secondary">Claim Offer</a>
                        </div>
                        ))}

                </div>
            
            </div>
            
            

        </div>
     );
}


 
export default OfferList;