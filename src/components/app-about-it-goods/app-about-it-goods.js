import React from "react";
import './app-about-it-goods.css';
import { useParams } from 'react-router-dom';
import data from "../goods/goods";
import BackgroundImageOurCoffee from '../../images/Mask Group-1.jpeg';
import PictureCoffee from '../../images/81tGmkXdGLL.jpeg';
import LineBeansLogoHeaderBlack from '../../images/Beans logo.svg'
import AppFooter from "../app-footer/app-footer";



const AboutItGoods = () => {
    const { id } = useParams();
    const product = data.find(item => item.id === parseInt(id));
    return <div>
        <div className="containerOurCoffeeHeader">
            <img className='backgroundImage' src={BackgroundImageOurCoffee} alt="Background" />
            <div className="contentOurCoffeeHeader">
                <h1 className="titleOurCoffee">Our Coffee</h1>
            </div>
        </div>
        <div className="conteinerAboutOurBeans">
            <div className="imgBackground">
                <img className='PictureCoffee' src={PictureCoffee} alt="Background" />
            </div>
            <div className="contentAboutBeansGoods">
                <h2>About it</h2>
                <img className='lineBeansLogoHeaderBlack' src={LineBeansLogoHeaderBlack} alt="LineBeansLogoHeader" />
                <div className="aboutOurBeansContentGoods">
                    <br></br>
                    <p><b>Name:</b> {product.name} </p>
                    <p><b>Country:</b> {product.production} </p>
                    <p className="productDescription"><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br></br>
                    <p><b>Price:</b> <span class="price">{product.price + '$'}</span></p>
                </div>

            </div>
        </div>
        <div>
        </div>
        <AppFooter></AppFooter>
    </div>;
};


export default AboutItGoods;