import { Link } from 'react-router-dom';

import {HamburgerMenu} from './HamburgerMenu';

import logo from "../assets/solutek-02.svg"


export const Head = () => {
    return(
        <div >
            <div className='line-horizontal' />
            <div className='communication'>
                <div className='communication-data'>
                    <div className='communication-menu'>
                        <ul className="menu">
                            <li><Link className="menu-item">CONTÁCTENOS</Link></li>
                            <li className='barra'></li>
                            <li><Link className="menu-item">joseluisbracho0@gmail.com</Link></li>
                            <li className='barra'></li>
                            <li><Link className="menu-item">+58 (424) 6518602</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='communication-language'></div>
            </div>
            <div className='logo'>
                <img src={logo} alt="Stickman" className='logo-img'/>
            </div>
            <nav>
		        <ul class="menu-horizontal">
			        <li><Link to="/">Home</Link></li>
			        <li>
			        	<Link to="/ecosystem">Ecosystem</Link>
			        </li>
			        <li>
			        	<Link to="/services">Services</Link>
			        </li>
			        <li>
                        <Link to="/industries">Industries</Link>
                    </li>
			        <li><Link to="/consulting">Consulting Team</Link></li>
		        </ul>
	        </nav>
            <HamburgerMenu />
        </div>
    )
};