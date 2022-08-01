import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    useEffect(() => {
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            window.scrollY > 5 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
        })
    })
    return (
        <div id="navbar">
            <div id="ham-menu" onClick={ open_menu }>
                <FontAwesomeIcon icon={ menu_icon } />
            </div>
            <div className="navbar-left">
                <Link to="/">
                    <div className="name">
                        Charles Kamiri
                    </div>
                </Link>
            </div>

            <div className="navbar-right">
                <Link to='skills'>
                    <div className="link">Skills</div>
                </Link>

                <Link to='projects'>
                    <div className="link">Projects</div>
                </Link>

                <Link to='certification'>
                    <div className="link">Certification</div>
                </Link>

                <Link to='contact'>
                    <div className="link">Contact</div>
                </Link>

            </div>

            {/* Mobile navbar */}
            <div id="mobile-nav">
                <Link to='skills'>
                    <div className="link" onClick={open_menu}>Skills</div>
                </Link>

                <Link to='projects'>
                    <div className="link" onClick={open_menu}>Projects</div>
                </Link>

                <Link to='certification'>
                    <div className="link" onClick={open_menu}>Certification</div>
                </Link>

                <Link to='contact'>
                    <div className="link" onClick={open_menu}>Contact</div>
                </Link>

            </div>
        </div>
    )
}
export default Navbar;