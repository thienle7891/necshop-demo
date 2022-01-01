
import FooterEnd from './FooterEnd';
import './style.css';

const Footer = () => {

    return (
        <div className="grid">

            <div className="footer">
                <div className="grid wide row">
                    <div className="col l-3 m-6 c-12">
                        <div className="footerItem">
                            <h2>ABOUT NECSHOP</h2>
                            <p>Porem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercita
                            </p>
                            <h4>Click to read more</h4>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="footerItem">
                            <h2>QUESTIONS?</h2>
                            <h3>Shipping</h3>
                            <h3>Customer Service / FAQ’s</h3>
                            <h2>INFORMATION</h2>
                            <h3>Our Story</h3>
                            <h3>Read Our Blog</h3>

                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="footerItem">
                            <h2>WHY NECSHOP?</h2>
                            <h3>Free shipping</h3>
                            <h3>30 day returns</h3>
                            <h3>Official stockist of all brands</h3>
                            <h3>Secure checkout</h3>
                            <h3>The best customer service</h3>
                        </div>

                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="footerItem">
                            <h2>CONTACT NECSHOP</h2>
                            <div>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>
                                    <h5>8901 Marmora Road,</h5>
                                    <h5>Glasgow, D04 89GR.</h5>
                                </span>
                            </div>
                            <div>
                                <i className="fas fa-phone"></i>
                                <span>
                                    <h5>+1 800 559 6580</h5>
                                    <h5>+1 504 889 9898</h5>
                                </span>
                            </div>
                            <div>
                                <i className="far fa-envelope"></i>
                                <h3>mail@demolink.org</h3>
                            </div>

                        </div>

                    </div>

                </div>
                <FooterEnd></FooterEnd>
            </div>
        </div>
         
       
    )
};

export default Footer;