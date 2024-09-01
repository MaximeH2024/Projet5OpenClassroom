import logoKasa from '../../assets/logo.png'
import { Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {

    const location = useLocation();
    const [navigation, setNavigation] = useState("");

    useEffect(() => {
        if (location.pathname === "/") {
            setNavigation("Home");
        } else if (location.pathname === "/apropos") {
            setNavigation("About");
        } else {
            setNavigation("")
        }
    }, [location]);
    
    return (
    <header>
        <div className='logo'>
            <img src={logoKasa} className='logo' alt="Logo Kasa"></img>
            <p>Ceci est Header</p>
        </div>
        <nav>
            <Link to="/" className={navigation === "Home" ? "underlined" : "no-underline"}>Accueil</Link>
            <Link to="/apropos" className={navigation === "About" ? "underlined" : "no-underline"}>A propos</Link>
        </nav>
    </header>
    )
}

export default Header;