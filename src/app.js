import MainPage from "./components/main-page/main-page";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OurCoffeePage from './components/our-coffee-page/our-coffee-page';
import LogoHeader from './images/beans.png'
import ForYourPleasure from './components/for-your-pleasure/for-your-pleasure'
import AboutItGoods from './components/app-about-it-goods/app-about-it-goods'
import data from './components/goods/goods'


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <nav className='headerMenu'>
                        <ul>
                            <li className='itemLogo'>
                                <img className='headerLogo' src={LogoHeader} alt='Logo' />
                                <Link to='/Coffee-Shop/'>Coffee house</Link>
                            </li>
                            <li>
                                <Link to='/Coffee-Shop/our-coffee'>Our coffee</Link>
                            </li>
                            <li>
                                <Link to='/Coffee-Shop/for-your-pleasure'>For your pleasure</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path='/Coffee-Shop/' element={<MainPage />} />
                        <Route path='/Coffee-Shop/our-coffee' element={<OurCoffeePage />} />
                        <Route path='/Coffee-Shop/for-your-pleasure' element={<ForYourPleasure />} />
                        <Route path='/Coffee-Shop/app-about-it-goods/:id' element={<AboutItGoods data={data} />} />
                    </Routes>
                </div>
            </Router>

        );

    }
}

export default App;