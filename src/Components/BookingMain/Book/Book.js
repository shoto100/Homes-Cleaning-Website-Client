import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { serviceContext, userContext } from '../../../App';
import ProcessPayment from '../../BookingMain/ProcessPayment/ProcessPayment'

const Book = ({serviceInfo}) => {
    const [ loggedInUser, setLoggedInUser ] = useContext(userContext);
    const [ service, setService ] = useContext(serviceContext);
    const [bookData, setBookData] = useState(null);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setBookData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const orderDetails = { 
            ...loggedInUser, 
            // products: savedCart, 
            shipment: bookData, 
            paymentId,
            orderTime: new Date() 
        };
        console.log(orderDetails);

        
        fetch(`https://afternoon-stream-14790.herokuapp.com/addOrder`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(orderDetails)
        })
        .then(res => {
            alert("product successfully purchased");
        })
      }

    return (
        <div className="container"  style={{fontFamily: "'Oxygen', sans-serif"}}>
            <div className="row">
                <div className="col-md-6" style={{display: bookData ? 'none': 'block'}}>
                <h5 style={{padding: "0 0 20px 0px", fontWeight: "700"}}>Book Your Services</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control col-4" defaultValue={loggedInUser.name} {...register("name")} /> <br/>
                        <input className="form-control" defaultValue={loggedInUser.email} {...register("email")} /> <br/>
                        <input className="form-control" defaultValue={serviceInfo.serviceName} {...register("serviceName")} /> <br/>
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}

                        
                        <input className="btn custom-btn-2" type="submit" />
                    </form>
                </div>
                <div className="col-md-6" style={{display: bookData ? 'block': 'none'}}>
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default Book;