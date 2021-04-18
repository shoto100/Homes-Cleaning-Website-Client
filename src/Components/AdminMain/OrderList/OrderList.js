import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [showOrder, setShowOrder] = useState([])
    useEffect(() => {
        fetch(`https://afternoon-stream-14790.herokuapp.com/showOrder`)
          .then(res => res.json())
          .then(data => setShowOrder(data))
      }, [])
      console.log(showOrder);
    return (
        <div className="order-list-wrapper">
            <div className="container">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Pay With</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    showOrder.map(od =>
                    <tr key={od._id}>
                        <td>{od.name || "none"}</td>
                        <td>{od.email || "none"}</td>
                        <td>{od.shipment.serviceName}</td>
                        <td>Credit Card</td>
                        <td>pending</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
            
        </div>
    );
};

export default OrderList;