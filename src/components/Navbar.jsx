/* eslint-disable no-undef */
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'

let menu_icon = faBars;
const open_menu = () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
        menu_icon = faTimes;
    }
}

const Navbar = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 5 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
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
                {/* Projects */}
                <Link to='/projects'>
                    <div className="link">Projects</div>
                </Link>

                {/* Certification */}
                <Link to='/certification'>
                    <div className="link">Certification</div>
                </Link>

                {/* Contact */}
                <Link to='/contact'>
                    <div className="link">Contact</div>
                </Link>

            </div>

            {/* Mobile navbar */}
            <div id="menu">
                <Link to='/projects'>
                    <div className="link" onClick={open_menu}>Projects</div>
                </Link>

                <Link to='/certification'>
                    <div className="link" onClick={open_menu}>Certification</div>
                </Link>

                <Link to='/contact'>
                    <div className="link" onClick={open_menu}>Contact</div>
                </Link>

            </div>
        </div>
    )
}
export default Navbar;