import { Link } from 'react-router-dom';
import logo from './assets/greene.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="GFC logo" />
            <div className="links">
                <Link to="/" className="link">
                    <p>HOME</p>
                </Link>
                <Link to="/login" className="link">
                    <p>LOG IN</p>
                </Link>
            </div>
        </div>
    );
}
 
export default Navbar;