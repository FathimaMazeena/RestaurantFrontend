import Offer from "./Offers";
import CategoryList from "../components/CategoryList";
import ServiceList from "../components/ServiceList";
import MenuList from "../components/MenuList";
import LocationList from "../components/LocationList";
import DishList from "../components/DishList";
import ProductPreview from "../previews/ProductPreview";
import QueryForm from "../components/QueryForm";
import LocationPreview from "../previews/LocationPreview";
import ServicePreview from "../previews/ServicePreview";
import CategoryPreview from "../previews/CategoryPreview";
import MenuPreview from "../previews/MenuPreview";
import DishPreview from "../previews/DishPreview";
import ReservationForm from "../components/ReservationForm";

const Home = () => {


    return(
        <div className="home">
            <MenuPreview/>
            <ProductPreview/>
            <Offer/>
            <ReservationForm/>
            <DishPreview/>
            <ServicePreview/>
            <CategoryPreview/>
            <LocationPreview/>
            <QueryForm/> 
            
           
            
            
        </div>
    )
}

export default Home;