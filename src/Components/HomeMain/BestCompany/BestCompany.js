import React from 'react';
import img2 from '../../../Images/img-2.svg';
import './BestCompany.css'

const BestCompany = () => {
    return (

        <section className="best-company-wrapper">
            <hr/>
            <div className="best-company-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 content-text">
                            <h2>Best cleaning company in Bangladesh</h2>
                            <p>HOMES is a cleaning company specialising in high quality cleaning and great customer care. Our young, reliable
                                   and familiar employees put the joy back into cleaning by coming to you
                                  and doing the work for you. So you can sit back,
                                 relax and get on with your day.</p>
                        </div>
                        <div className="col-md-5">
                            <img src={img2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestCompany;