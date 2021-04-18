import React, { useContext } from 'react';
import Service from '../Service/Service';
import './Services.css';
import { serviceContext } from '../../../App';

const Services = () => {
    const [service, setService] = useContext(serviceContext);

    return (
        <section className="services-wrapper">
            <hr/>
            <div className="services-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h1> Choose your service</h1>
                            <h4 className="serv-content">Find the perfect plan for you — 100% Money Back Guarantee</h4>
                        
                            <div className="service-card-wrapper">
                                <div className="row">
                                    {
                                        service.map(service => <Service service={service}></Service>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;