import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import ShowOrder from '../ShowOrder/ShowOrder';

const BookingList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch(`https://afternoon-stream-14790.herokuapp.com/allOrder?email=`+loggedInUser.email)
          .then(res => res.json())
          .then(data => setOrders(data))
      }, [])
      console.log(orders);
    return (
        <div className="bookinglist-wrapper"   style={{fontFamily: "'Oxygen', sans-serif"}}>
            <h5 style={{padding: "0 0 20px 30px", fontWeight: "700"}}>Your Bookings</h5>
            <div className="container">
                <div className="row">
                    {
                        orders.map(order => <ShowOrder order={order}></ShowOrder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;