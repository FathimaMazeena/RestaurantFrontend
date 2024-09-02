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

const Home = () => {


    return(
        <div className="home">
            <MenuPreview/>
            <ServicePreview/>
            <CategoryPreview/>
            <LocationPreview/>
            <DishPreview/>
            <Offer/>
            <ProductPreview/>
            <QueryForm/> 
           
            
            
        </div>
    )
}

export default Home;