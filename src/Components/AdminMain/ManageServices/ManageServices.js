import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`https://afternoon-stream-14790.herokuapp.com/services`)
          .then(res => res.json())
          .then(data => setServices(data))
      }, [])
      console.log(services);
      const handleDeleteProduct = (e, id) => {
        fetch(`https://afternoon-stream-14790.herokuapp.com/${id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
          .then(res => res.json())
          .then(data => {
            alert("product deleted");
            if (data) {
                e.target.parentNode.style.display = "none";
                setServices(services);
            }
          })
      }

    return (
        <div className="order-list-wrapper">
            <div className="container">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th> Service Name</th>
                    <th>Service Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    services.map(pd =>
                        <tr key={pd._id}>
                        <td>{pd.serviceName}</td>
                        <td>{pd.servicePrice}</td>
                        <td>{pd.productPrice}</td>
                        <td>
                            <button className="btn btn-success" size="sm" variant="success"><FontAwesomeIcon icon={faPencilAlt} /></button>
                            <button onClick={() => handleDeleteProduct(pd._id)} size="sm" variant="danger" className="ml-3 btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
            
        </div>
    );
};

export default ManageServices;