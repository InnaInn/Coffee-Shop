import React from "react";
import './app-our-coffee-about-beans.css';
import PictureWithGirl from '../../images/Mask Group.png';
import LineBeansLogoHeaderBlack from '../../images/Beans logo.svg'



class AppOurCoffeeAboutBeans extends React.Component {
    render() {
        return <div>
            <div className="conteinerAboutOurBeans">
                <div className="imgBackground">
                    <img className='pictureWithGirl' src={PictureWithGirl} alt="Background" />
                </div>
                <div className="contentAboutBeans">
                    <h2>About our beans</h2>
                    <img className='lineBeansLogoHeaderBlack' src={LineBeansLogoHeaderBlack} alt="LineBeansLogoHeader" />
                    <p className="aboutOurBeansContent">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p className="aboutOurBeansContent">
                        Afraid at highly months do things on at. Situation recommend objection do intention<br></br>
                        so questions. <br></br>
                        As greatly removed calling pleased improve an.<br></br>Last ask him cold feel <br></br>
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>

                </div>
            </div>
            <hr></hr>
        </div>
    }
}

export default AppOurCoffeeAboutBeans;