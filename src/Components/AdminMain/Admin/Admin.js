import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCommentAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import { HashRouter, Link, Route } from 'react-router-dom';
import OrderList from '../OrderList/OrderList';
import ManageServices from '../ManageServices/ManageServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddService from '../AddService/AddService';

const Admin = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">
                <HashRouter>
                    <div className="row">
                        <div className="col-md-3 booking-menu">
                            <Link to="/orderList" className="p-3 mb-2 nav-link"><FontAwesomeIcon icon={faShoppingCart} />&nbsp; Order List</Link>
                            <Link to="/addServices" className="p-3 mb-2 nav-link"><FontAwesomeIcon icon={faFolder} />&nbsp; Add Service</Link>
                            <Link to="/makeAdmin" className="p-3 mb-2 nav-link"><FontAwesomeIcon icon={faCommentAlt} />&nbsp; Make Admin</Link>
                            <Link to="/manageServices" className="p-3 mb-2 nav-link"><FontAwesomeIcon icon={faCommentAlt} />&nbsp; Manage Services</Link>
                        </div>
                        <div className="col-md-9">
                            <div className="container" style={{padding: "43px 0 300px", backgroundColor: "#f4f2fc", borderRadius: "5px", fontFamily: "'Oxygen', sans-serif"}}>
                            <Route exact path="/" component={OrderList} />
                            <Route exact path="/orderList" component={OrderList} />
                            <Route path="/addServices" component={AddService} />
                            <Route path="/makeAdmin" component={MakeAdmin} />
                            <Route path="/manageServices" component={ManageServices} />
                            </div>
                        </div>
                    </div>
                </HashRouter>
            </div>
        </div>
    );
};

export default Admin;