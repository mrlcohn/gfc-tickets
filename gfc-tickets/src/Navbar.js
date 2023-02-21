import { Link } from 'react-router-dom';
import logo from './assets/greene.png';

const Navbar = ({ user, onLogout }) => {
    return (
        <div className="navbar">
            <img src={logo} alt="GFC logo" />
            <div className="links">
                <Link to="/" className="link">
                    <p>HOME</p>
                </Link>
                {user.length == 0 &&
                <Link to="/login" className="link">
                    <p>LOG IN</p>
                </Link>}
                {user.length > 0 &&
                <Link to="/logout" className="link" onClick={onLogout}>
                    <p>LOG OUT</p>
                </Link>}
            </div>
        </div>
    );
}
 
export default Navbar;