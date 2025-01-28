import React from "react";
import './app-our-coffee-header.css';
import BackgroundImageOurCoffee from '../../images/Mask Group-1.jpeg';


class AppOurCoffeeHeader extends React.Component {
    render() {
        return <div>
            <div className="containerOurCoffeeHeader">
                <img className='backgroundImage' src={BackgroundImageOurCoffee} alt="Background" />
                <div className="contentOurCoffeeHeader">
                    <h1 className="titleOurCoffee">Our Coffee</h1>
                </div>
            </div>
        </div>
    }
}

export default AppOurCoffeeHeader;