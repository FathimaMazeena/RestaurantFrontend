import{useEffect, useState} from 'react';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

const Menu = () => {

    
    const [menus, setMenus] = useState([]);
    const [products, setProducts] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            const response = await fetch('api/menus');
            const json = await response.json();
            if (response.ok) {
                setMenus(json);
            }
        }

        const fetchProducts = async () => {
            const response = await fetch('api/products');
            const json = await response.json();
            if (response.ok) {
                setProducts(json);
            }
        }

        const fetchDishes = async () => {
            const response = await fetch('api/dishes');
            const json = await response.json();
            if (response.ok) {
                setDishes(json);
            }
        }

        // Fetch all data
        fetchMenus();
        fetchProducts();
        fetchDishes();
    }, []);

    useEffect(() => {
        // Combine all items into one array
        const combinedItems = [...menus, ...products, ...dishes];
        setAllItems(combinedItems);
    }, [menus, products, dishes]);


    return (
        <div className="menu-list">
            <h3 className="p-5">Menu</h3>
            <div className="row g-0 d-flex justify-content-around">
                {allItems && allItems.map(item => (
                    <div className="menu-preview card col-4 m-3" key={item._id} style={{ width: '15rem' }}>
                        <img src={item.image} alt={item.name} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p><strong>Price: Rs.</strong>{item.price}</p>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;