import logo from './assets/greene.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="GFC logo" />
            <div className="links">
                <p>HOME</p>
                <p>LOG IN</p>
            </div>
        </div>
    );
}
 
export default Navbar;