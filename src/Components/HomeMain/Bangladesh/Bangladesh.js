import React from 'react';
import bangladesh from '../../../Images/img-bd.svg'
import './Bangladesh.css'

const Bangladesh = () => {
    return (
        <div className="ban-wrapper">
            <hr/>
            <div className="ban-wrap">
                <div className="container">
                    <div className="row d-flex align-items-center">
                    <div className="col-md-6 com-sm-12">
                        <h1 className="ban-header">We are all over Bangladesh.</h1>
                        <p className="ban-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit earum impedit nostrum alias cupiditate praesentium sequi neque nobis voluptates ea eaque odio quae qui vel ut magnam, cumque, officiis modi. Voluptas asperiores quidem ducimus unde, placeat impedit deleniti saepe odio!</p>
                    </div>
                    <div className="col-md-4 com-sm-12">
                        <img src={bangladesh} className="img-fluid" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bangladesh;