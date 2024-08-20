import {Link} from 'react-router-dom';

const Navbar = ()=>{

    return(
        

        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <a href="#" class="navbar-brand">
            <img src="/images/restaurant.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
            DIVINE DINING</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navitems"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse justify-content-center" id="navitems">
            <ul class="navbar-nav">
            <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Cart</a></li>
            
        </ul>
        </div>
            
      </nav>

    )
}

export default Navbar;

 {/*<header>
            <div className="container">
                <Link to="/">
                <h1>Divine Dining</h1>
                </Link>

                <div className="links">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/login">Login</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </header>*/}