import React from 'react';
import './ShowOrder.css'

const ShowOrder = ({order}) => {
    console.log(order);
    return (
        <div className="col-md-4">
            <div className="show-order-wrap">
                <div className="row">
                    <div className="col-md-8">
                        <h6>{order.shipment.serviceName}</h6>
                    </div>
                    <div className="col-md-4">
                        <p>pending</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowOrder;