import React from "react";
import './app-for-your-pleasure-header.css';
import Background from '../../images/background1.jpg';

class AppForYourPleasureHeader extends React.Component {
    render() {
        return <div>
            <div className="containerOurCoffeeHeader">
                <img className='backgroundImage' src={Background} alt="Background" />
                <div className="contentOurCoffeeHeader">
                    <h1 className="titleOurCoffee">For your pleasure</h1>
                </div>
            </div>
        </div>
    }
}

export default AppForYourPleasureHeader; 