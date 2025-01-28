import React from "react";
import AppOurCoffeeHeader from '../app-our-coffee-header/app-our-coffee-header';
import AppOurCoffeeAboutBeans from '../app-our-coffee-about-beans/app-our-coffee-about-beans';
import AppOurCoffeeGoods from '../app-our-coffee-goods/app-our-coffee-goods';
import AppFooter from '../app-footer/app-footer';
import data from "../goods/goods";


class OurCoffeePage extends React.Component {
    render() {
        return <div>
            <AppOurCoffeeHeader></AppOurCoffeeHeader>
            <AppOurCoffeeAboutBeans></AppOurCoffeeAboutBeans>
            <AppOurCoffeeGoods data={data}></AppOurCoffeeGoods>
            <AppFooter></AppFooter>
        </div>
    }
}

export default OurCoffeePage;