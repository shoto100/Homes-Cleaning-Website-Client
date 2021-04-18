import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCommentAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import {  Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';
import './Booking.css';
import { useParams } from 'react-router';
import { serviceContext } from '../../../App';


const Booking = () => {
    const { serviceId } = useParams();
    const [ service, setService ] = useContext(serviceContext);

    const serviceInfo = service.find(service => service._id === serviceId);

    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">
                <Router>
                    <div className="row">
                        <div className="col-md-3 booking-menu">
                            <Link to="/booking" className="p-3 mb-2 nav-link"><FontAwesomeIcon icon={faShoppingCart} />&nbsp; Book</Link>
                            <Link to="/bookingList" className="p-3 mb-2 nav-link"><FontAwesomeIcon icon={faFolder} />&nbsp; Booking List</Link>
                            <Link to="/review" className="p-3 mb-2 nav-link"><FontAwesomeIcon icon={faCommentAlt} />&nbsp; Review</Link>
                        </div>
                        <div className="col-md-9">
                            <div className="container" style={{padding: "43px 0 300px", backgroundColor: "#f4f2fc", borderRadius: "5px"}}>
                                <Switch>
                                    <Route exact path="/">
                                        <Book serviceInfo={serviceInfo} />
                                    </Route>
                                </Switch>
                                <Switch>
                                    <Route path="/booking">
                                        <Book serviceInfo={serviceInfo} />
                                    </Route>
                                </Switch>
                                <Switch>
                                    <Route path="/bookingList" component={BookingList} />
                                </Switch>
                                <Switch>
                                    <Route path="/review" component={Review} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        </div>
    );
};

export default Booking;