import React from "react";
import './app-footer.css';
import LogoFooter from '../../images/beans-2.png'
import LineBeansLogoHeaderBlack from '../../images/Beans logo.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



class AppFooter extends React.Component {
    render() {
        return <div>
            <footer>
                <div className="containerFooter">
                    <nav className='footerMenu' >
                        <ul>
                            <li><img className='headerLogo' src={LogoFooter} alt="Logo" /> <Link to='/Coffee-Shop/'>Coffee house</Link></li>
                            <li><Link to='/Coffee-Shop/our-coffee'>Our coffee</Link></li>
                            <li><Link to='/Coffee-Shop/for-your-pleasure'>For your pleasure</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <img className='logoBeansFooter' src={LineBeansLogoHeaderBlack} alt="LineBeansLogoHeader" />
                    </div>
                </div>
            </footer>
        </div>
    }
}

export default AppFooter;