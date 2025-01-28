import React from "react";
import './app-our-best.css';
import BackgroundOurBest from '../../images/Mask Group-2.jpeg';
import Item1 from '../../images/item1.jpeg';
import Item2 from '../../images/item2.jpeg';
import Item3 from '../../images/item3.jpeg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


class AppOurBest extends React.Component {
    render() {
        return <div>
            <div className='containerOurBest'>
                <img className='backgroundImageOurBest' src={BackgroundOurBest} alt="Background Image" />
                <div className='contentOurBest'>
                    <h2 className='contentOurBestTitle'>Our best</h2>
                    <div className='ourBestItem'>
                        <Link to='/Coffee-Shop/our-coffee' className="itemTitle">
                            <div className='rectangleBlock'>
                                <img className='itemOne' src={Item1} alt="Item1" />
                                <h4>Solimo Coffee Beans 2 kg</h4>
                                <p className="priceTitle"> 10.73$</p>

                            </div>
                        </Link>
                        <Link to='/Coffee-Shop/our-coffee' className="itemTitle">
                            <div className='rectangleBlock'>
                                <img className='itemOne' src={Item2} alt="Item1" />
                                <h4>Presto Coffee Beans 1 kg</h4>
                                <p className="priceTitle">15.99$</p>
                            </div>
                        </Link>
                        <Link to='/Coffee-Shop/our-coffee' className="itemTitle">
                            <div className='rectangleBlock'>
                                <img className='itemOne' src={Item3} alt="Item1" />
                                <h4>AROMISTICO Coffee 1 kg</h4>
                                <p className="priceTitle">6.99$</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default AppOurBest;