import React from "react"
import AppHeader from '../app-header/app-header';
import AppAboutUs from '../app-about-us/app-about-us';
import AppOurBest from '../app-our-best/app-our-best';
import AppFooter from '../app-footer/app-footer';
import './main-page.css';

class MainPage extends React.Component {
    render() {
        return <div>
            <AppHeader></AppHeader>
            <AppAboutUs></AppAboutUs>
            <AppOurBest></AppOurBest>
            <AppFooter></AppFooter>
        </div>
    }
}

export default MainPage;