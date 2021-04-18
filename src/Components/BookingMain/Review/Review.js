import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ loggedInUser, setLoggedInUser ] = useContext(userContext);
    const [ reviews, setReviews ] = useState(null); 

    const onSubmit = data => {
        const reviewData = {
            ...loggedInUser,
            name: data.name,
            designation: data.designation,
            description: data.description
        };
        console.log(reviewData);

        fetch('https://afternoon-stream-14790.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => {
            alert("review successfully added");
            setReviews(reviews);
        })
    };

    
    return (
        <div className="container"  style={{fontFamily: "'Oxygen', sans-serif"}}>
            <div className="row">
                <div className="col-md-6" style={{}}>
                <h5 style={{padding: "0 0 20px 0px", fontWeight: "700"}}>Review Our Company</h5>
                    <form onSubmit={handleSubmit(onSubmit)}  style={{padding: "0 0 20px 0px"}}>
                        <input className="form-control col-4" {...register("name")}  placeholder="Your Name"/> <br/>
                        {errors.name && <span>This field is required</span>}

                        <input className="form-control" {...register("designation")} placeholder="Your Company's Name & Designation"/> <br/>
                        {errors.designation && <span>This field is required</span>}
                        
                        <input style={{height: "100px"}} className="form-control" {...register("description")} placeholder="Your Description"/> <br/>
                        {errors.description && <span style={{color: "red"}}>This field is required</span>}

                        
                        <input className="btn custom-btn-2" type="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;