import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/">
                <button className="home-btn">Home</button>
            </Link>
            <h2>Simple Note Editor</h2>
        </div>
     );
}
 
export default Navbar;