import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../Images/arrow-r.svg';
import img1 from '../../../Images/img-1.svg';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div className="main-header-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="main-header-head">You Deserve Better Cleaning.</h1>
                        <p className="main-header-content">We provide the best cleaning services in Bangladesh and let you enjoy your free time. 100% Money Back Guarantee. <br/> Hassle free. </p>

                        <div className="header-btn">
                            <a href="#0" className="btn custom-btn-2">
                                <Link to="/login" style={{color: '#FFF', textDecoration: 'none'}}>See Our Services</Link>
                            </a>
                            <a href="#0" className="learn-more">
                                Learn More
                                <img src={arrow} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-img">
                <img src={img1} alt=""/>
            </div>
        </div>
    );
};

export default MainHeader;