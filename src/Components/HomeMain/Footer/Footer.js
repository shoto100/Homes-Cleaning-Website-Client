import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "The 100% Money Back Guarantee cleaning company specialised in high quality cleaning."}
    ]
    const ourAddress = [
        {name: "Bangladesh" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const support = [
        {name: "Terms & Conditions" , link: "/terms&conditions"},
        {name: "Privacy Policy" , link: "/privacyPoli"}
    ]
    const navigation = [
        {name: "Help" , link: "/help"},
        {name: "Blogs" , link: "/blogs"},
        {name: "Contact Us" , link: "/contactUs"},
        {name: "Request Quote" , link: "/requestQuote"},
        {name: "Login" , link: "/login"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="HOMES" menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Navigation" menuItems={navigation}/>
                    <FooterCol key={3} menuTitle="Support" menuItems={support}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} Satodhru Nondon,  All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
        
export default Footer;