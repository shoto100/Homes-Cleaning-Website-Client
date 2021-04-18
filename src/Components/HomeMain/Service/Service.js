import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    const {serviceName, servicePrice,serviceType, img, _id} = props.service;
    return (
        <div className="col-md-3 col-sm-12 card-sm">
            <div className="card custom-card" style={{width: "18rem", height: "530px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", border: "none"}}>
                <img src={img} className="card-img-top" alt=""/>
                <div className="card-body custom-card-body">
                    <h5 style={{fontWeight: "700"}} className="card-title">
                        {serviceName}
                    </h5>
                    <h6 style={{fontWeight: "700"}} className="card-title">
                        {servicePrice}$
                    </h6>
                    <p className="card-text">
                    {serviceType}
                    </p>
                    <a href="" className="btn custom-btn-2">
                        <Link to={`/booking/${_id}`} style={{color: '#FFF', textDecoration: 'none'}}>Booking Now</Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Service;