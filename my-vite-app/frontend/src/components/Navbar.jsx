import '../components/css/Navbar.css'
import { Link } from 'react-router-dom';


var Navbar = () =>{
    
    return(
        <div className="navbar">
            <div className="logo">
                <h2>ONE-PIECE</h2>
            </div>
            <ul className='content'>
                <li><Link to={'/home'} style={{textDecoration: "none",color:"white"}}>Home</Link></li>
                <li><Link to={'/about'} style={{textDecoration: "none",color:"white"}}>About Us</Link></li>
                <li><Link to={'/contact'}style={{textDecoration: "none",color:"white"}}>Contact Us</Link></li>
                <li><Link to={'/location'}style={{textDecoration: "none",color:"white"}}>Location</Link></li>
                <li><Link to={'/useMemo'}style={{textDecoration: "none",color:"white"}}>UseMemo</Link></li>
                <li><Link to={'/login'} style={{textDecoration: "none",color:"white"}}>Log Out</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;