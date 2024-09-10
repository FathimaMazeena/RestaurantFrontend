import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';

//pages and components
import Home from './pages/Home';
import ProductPage from './pages/Products';
import MenuPage from './pages/Menu';
import AboutUsPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar';

//import MenuList from './components/MenuList';

import Login from './pages/Login';
import Register from './pages/Register';
import MyReservations from './pages/MyReservations';
import MyPayments from './pages/MyPayments';
import MyProfile from './pages/MyProfile';
import MyOrders from './pages/MyOrders';
import MyCart from './pages/MyCart';
// import Admin from './pages/admin/Admin';
// import Staff from './pages/admin/Staff';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar/>

      <div className="pages">

        <Routes>

          <Route path="/" element={<Home/>}/>

          <Route path="/products" element={<ProductPage />}>
            <Route path=":/productId" element={<ProductPage/>}/>
          </Route>

          <Route path="/menu" element={<MenuPage/>}>
            <Route path=":/menuId" element={<ProductPage/>}/>
          </Route>
          
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/my-profile" element = {<MyProfile/>}/>
          <Route path = "/my-reservations" element={<MyReservations/>}/>
          <Route path = "/my-orders" element={<MyOrders/>}/>
          <Route path = "/my-payments" element={<MyPayments/>}/>
          <Route path = "/my-cart" element={<MyCart/>}/>
          {/* <Route path = "/admin-dashboard" element={<Admin/>}/>
          <Route path = "/staff-dashboard" element={<Staff/>}/> */}


          

        </Routes>

      </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
