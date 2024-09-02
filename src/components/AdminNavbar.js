import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminNavbar = () => {
    return ( 

        <ul className="sidebar-nav">
            <li className="sidebar-item"><Link className="sidebar-link" to="#"><i className="lni lni-user"></i>Profile</Link></li>
            <li className="sidebar-item"><Link className="sidebar-link" to="#"><i className="lni lni-user"></i>Profile</Link></li>
            <li className="sidebar-item"><Link className="sidebar-link" to="#"><i className="lni lni-user"></i>Profile</Link></li>
            <li className="sidebar-item"><Link className="sidebar-link" to="#"><i className="lni lni-user"></i>Profile</Link></li>
            
        </ul>
     );
}
 
export default AdminNavbar;