import React from 'react';
import './app-footer.css';
import LogoFooter from '../../images/beans-2.png';
import LineBeansLogoHeaderBlack from '../../images/Beans logo.svg';
import { Link } from 'react-router-dom';

class AppFooter extends React.Component {
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    render() {
        return (
            <footer>
                <div className="containerFooter">
                    <nav className='footerMenu'>
                        <ul>
                            <li>
                                <img className='headerLogo' src={LogoFooter} alt="Logo" />
                                <Link to='/Coffee-Shop/' onClick={this.scrollToTop}>Coffee house</Link>
                            </li>
                            <li><Link to='/Coffee-Shop/our-coffee' onClick={this.scrollToTop}>Our coffee</Link></li>
                            <li><Link to='/Coffee-Shop/for-your-pleasure' onClick={this.scrollToTop}>For your pleasure</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <img className='logoBeansFooter' src={LineBeansLogoHeaderBlack} alt="LineBeansLogoHeader" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default AppFooter;
