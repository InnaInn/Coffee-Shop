import './app-header.css';
import React from "react";
import BackgroundImage from '../../images/Main bg.jpeg';
import LogoHeader from '../../images/beans.png'
import LineBeansLogoHeaderWhite from '../../images/Beans logo-1.svg'
import { Link } from 'react-router-dom';

class AppHeader extends React.Component {
    render() {
        return <div>
            <div className='containerHeader'>
                <img className='backgroundImage' src={BackgroundImage} alt="Background" />
                <nav className='headerMenu'>
                    <ul>
                        <li className='itemLogo'>
                            <img className='headerLogo' src={LogoHeader} alt='Logo' />
                            <Link to='/'>Coffee house</Link>
                        </li>
                        <li>
                            <Link to='/our-coffee'>Our coffee</Link>
                        </li>
                        <li>
                            <Link to='/for-your-pleasure'>For your pleasure</Link>
                        </li>
                    </ul>
                </nav>
                <div className='contentHeader'>
                    <h1 className="headerText"> Everything You Love About Coffee</h1>
                    <img className="lineBeansLogoHeaderWhite" src={LineBeansLogoHeaderWhite} alt="LineBeansLogoHeader" />
                    <p className="headerTextSecondary">We makes every day full of energy and taste</p>
                    <p className="headerTextSecondary">Want to try our beans?</p>
                    <Link className='moreInfoHeaderBtn' to='/our-coffee'>More</Link>
                </div>
            </div>
        </div>
    }
}


export default AppHeader;