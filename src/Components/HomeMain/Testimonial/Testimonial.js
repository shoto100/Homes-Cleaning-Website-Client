import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './Testimonial.css'

const Testimonial = ({showReview}) => {
    return (
        <div className="col-md-4 col-sm-12 card-sm">
            <div className="card card-sm2" style={{background: "rgba(206, 145, 255, 0.31)", borderBottom: "5px solid #CE91FF !important", border: "none", marginBottom: "50px", height: "550px"}}>
                <div className="card-body">
                    <h1 style={{color: "#CE91FF"}}><FontAwesomeIcon icon={faQuoteLeft} /></h1>
                    <p className="card-text text-center p-5">{showReview.description}</p>
                </div>
                <div className="row author">
                    <div className=" col-sm-3"></div>
                    <div className=" col-sm-3">
                        <img className="me-3" src={showReview.photo} alt="" width="80"/>
                    </div>
                    <div className=" col-sm-4">
                        <div style ={{padding: "20px 0 20px"}}>
                            <h6 style={{fontWeight: "700"}}>{showReview.name}</h6>
                            <p className="m-0">{showReview.designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;