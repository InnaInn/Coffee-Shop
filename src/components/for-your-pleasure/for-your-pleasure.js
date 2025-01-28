import React from "react";
import AppForYourPleasureHeader from "../app-for-your-pleasure-header/app-for-your-pleasure-header";
import AppForYourPleasureAboutOurGoods from "../app-for-your-pleasure-about-our-goods/app-for-your-pleasure-about-our-goods";
import AppForYourPleasureGoods from "../app-for-your-pleasure-goods/app-for-your-pleasure-goods";
import AppFooter from '../app-footer/app-footer';
import data from "../goods/goods";

class ForYourPleasure extends React.Component {
    render() {
        return <div>
            <AppForYourPleasureHeader></AppForYourPleasureHeader>
            <AppForYourPleasureAboutOurGoods></AppForYourPleasureAboutOurGoods>
            <AppForYourPleasureGoods data={data}></AppForYourPleasureGoods>
            <AppFooter></AppFooter>
        </div>
    }
}

export default ForYourPleasure; 