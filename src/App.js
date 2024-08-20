import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';

//pages and components
import Home from './pages/Home';
import ProductPage from './pages/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>

          <Route
          path="/"
          element={<Home/>}
          />

          <Route path="/products" element={<ProductPage />} />

        </Routes>
      </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
