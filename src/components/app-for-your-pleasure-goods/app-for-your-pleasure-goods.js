import React from "react";
import './app-for-your-pleasure-goods.css';
import Item3 from '../../images/item3.jpeg';
import data from "../goods/goods";
import RenderListGoods from "../renderListGoods/renderListGoods";



class AppForYourPleasureGoods extends React.Component {
    render() {
        return <div>
            <div className="containerGoods">

                <RenderListGoods data={data} />
            </div>
        </div>
    }
}

export default AppForYourPleasureGoods;