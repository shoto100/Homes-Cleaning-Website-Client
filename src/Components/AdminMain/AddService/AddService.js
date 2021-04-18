import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [services, setServices] = useState({});
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const serviceData = {
            img: imageURL,
            serviceName: data.serviceName,
            serviceType: data.serviceType,
            servicePrice: data.servicePrice
        };
        console.log(serviceData);

        fetch('https://afternoon-stream-14790.herokuapp.com/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => {
            alert("product successfully added");
            setServices(services);
        })
    }
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2ab4e9918f6e76ee1d27375bb1587084');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return (
        <div className="container add-service-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Service Name</label>
                        <input className="form-control" type="serviceName" {...register("serviceName")} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Service Type</label>
                        <input className="form-control" type="serviceType" {...register("serviceType")} />
                    </div>
                </div> <br/>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Service price</label>
                        <input className="form-control" type="servicePrice" {...register("servicePrice")} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Choose Image</label>
                        <input className="form-control" type="file" onChange={handleImageUpload} />
                    </div>
                </div> <br/>
                
                <input className="btn custom-btn-2" type="submit" />
            </form>
        </div>
    );
};

export default AddService;