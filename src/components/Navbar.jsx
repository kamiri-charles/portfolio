import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Navbar.scss';

let menu_icon = faBars;

const open_menu = () => {
    const menu = document.getElementById('mobile-nav');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
        menu_icon = faTimesCircle;
    }
}

const Navbar = () => {
    return (
        <div id="navbar">
            <div id="ham-menu" onClick={ open_menu }>
                <FontAwesomeIcon icon={ menu_icon } />
            </div>
            <div className="navbar-left">
                <div className="name">
                    Charles Kamiri
                </div>
            </div>

            <div className="navbar-right">
                <div className="link">Skills</div>
                <div className="link">Projects</div>
                <div className="link">Certification</div>
                <div className="link">Contact</div>
            </div>

            {/* Mobile navbar */}
            <div id="mobile-nav">
                <div className="link">Skills</div>
                    <div className="link">Projects</div>
                    <div className="link">Certification</div>
                    <div className="link">Contact</div>
                </div>
        </div>
    )
}
export default Navbar;