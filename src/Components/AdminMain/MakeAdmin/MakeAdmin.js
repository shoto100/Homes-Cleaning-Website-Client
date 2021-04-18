import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    // const [admin, setAdmin] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const addAdmin = {
            email: data.makeAdmin
        }

        fetch(`https://afternoon-stream-14790.herokuapp.com/addAdmin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(addAdmin)
        })
        .then(res => {
            alert("Admin Added successfully");
        })
    };
    return (
        <div className="row">
                <div className="col-md-6">
                <h5 style={{ fontWeight: "700", padding: "0 0 20px 30px"}}>Make Admin</h5>
                    <form onSubmit={handleSubmit(onSubmit)} style={{padding: "0 0 0px 30px"}}>
                        <input className="form-control col-4" {...register("makeAdmin")} placeholder="Enter Email Address"/> <br/>
                        {errors.makeAdmin && <span>This field is required</span>}

                        
                        <input className="btn custom-btn-2" type="submit" />
                    </form>
                </div>
            </div>
    );
};

export default MakeAdmin;