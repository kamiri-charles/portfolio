import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
    
    let [menu_icon, setMenuIcon] = useState('bx bx-menu-alt-left');
    
    const navbar = useRef();
    const menu = useRef();
    
    let open_menu = () => {
        if (menu.current.classList.contains('active')) {
            menu.current.classList.remove('active');
            setMenuIcon('bx bx-menu-alt-left');
        } else {
            menu.current.classList.add('active');
            setMenuIcon('bx bx-x');
        }
    }

    return (
        <div id="navbar" ref={navbar}>
            <div id="ham-menu" onClick={ open_menu }>
                <i className={menu_icon}></i>
            </div>
            
            <div className="navbar-left">
                <Link to="/">
                    <div className="name">Charles Kamiri</div>
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
            <div ref={menu} id='menu'>
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