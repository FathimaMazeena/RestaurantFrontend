import{useEffect, useState} from 'react';
import OfferList from '../components/offerList';


const Offer = () => {

    const[offers, setOffers]= useState(null);

    useEffect(()=>{

        const fetchOffers= async ()=>{
            const response= await fetch('/api/offers');
            const json= await response.json();

            console.log(json);

            if(response.ok){
                setOffers(json);
            }

        }

        fetchOffers();

        

    }, []);



    return(
        <div className="offer">
          <OfferList offers={offers}/>
        </div>
    );
}

export default Offer;