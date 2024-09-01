import logoFooter from '../../assets/logo-footer.png'
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div>
                <img src={logoFooter} alt="Logo Kasa Footer"></img>
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer