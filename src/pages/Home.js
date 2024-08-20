import Offer from "./Offers";
import CategoryList from "../components/CategoryList";
import ServiceList from "../components/ServiceList";
import MenuList from "../components/MenuList";
import LocationList from "../components/LocationList";
import DishList from "../components/DishList";
import ProductPreview from "../previews/ProductPreview";

const Home = () => {


    return(
        <div className="home">
            <MenuList/>
            <ServiceList/>
            <CategoryList/>
            <LocationList/>
            <DishList/>
            <Offer/>
            <ProductPreview/>
           
            
            
        </div>
    )
}

export default Home;