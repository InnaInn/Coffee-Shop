import React from "react"
import Item3 from '../../images/item3.jpeg';
import { Link } from 'react-router-dom';




const RenderOneGoods = ({ name, production, price, id }) => {
    return (
        <Link className="itemTitle" to={`/app-about-it-goods/${id}`}>
            <div className="rectangleBlockGoods">
                <img className="itemOne" src={Item3} alt={name} />
                <h4>{name}</h4>
                <p className="priceTitle">{production}</p>
                <p className="priceTitle">{price + '$'}</p>
            </div>
        </Link>
    );
};


export default RenderOneGoods;
