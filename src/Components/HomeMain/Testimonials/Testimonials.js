import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [showReview, setShowReview] = useState([]);
    useEffect(() => {
        fetch(`https://afternoon-stream-14790.herokuapp.com/allReview`)
          .then(res => res.json())
          .then(data => setShowReview(data))
      }, [])

    return (
        <section className="testimonials-wrapper">
            <hr/>
            <div className="testimonials-wrap">
                <div className="container">
                    <div className="testimonials-header">
                        <h2>Our Customer Testimonials</h2>
                    </div>
                    <div className="testimonial-card row">
                        {
                            showReview.map(showReview => <Testimonial showReview={showReview} key={showReview._id}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;