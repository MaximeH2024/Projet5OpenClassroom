import logoKasa from '../../assets/logo.png'
import { Link, } from 'react-router-dom';
import '../Header/Header.scss';

function Header() {

    return (
    <header>
        <div className='logo'>
            <img src={logoKasa} alt="Kasa"></img>
        </div>
        <nav>
            <Link to="/" className="nav">Accueil</Link>
            <Link to="/apropos" className="nav">A propos</Link>
        </nav>
    </header>
    )
}

export default Header;