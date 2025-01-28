import React from "react";
import RenderOneGoods from "../renderOneGoods/renderOneGoods";



const RenderListGoods = ({ data }) => {
    const elements = data.map(item => (
        <RenderOneGoods
            key={item.id}
            id={item.id}
            name={item.name}
            production={item.production}
            price={item.price}
        />
    ));
    return (
        <div className='ourBestItemGoods'>
            {elements}
        </div>
    );
};


export default RenderListGoods;

