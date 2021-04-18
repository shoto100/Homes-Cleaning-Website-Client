import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../Images/logo.svg';
import './Navbar.css';

const Navbar = () => {

    const [ loggedInUser, setLoggedInUser ] = useContext(userContext);
    const [admin, setAdmin] = useState([]);
    const [active, setActive] = useState(" ")
    const handleReload = () => {
        window.location.reload(false);
    }

    useEffect(() => {
        fetch(`https://afternoon-stream-14790.herokuapp.com/allAdmin`)
          .then(res => res.json())
          .then(data => {
              const currentAdmin = data.find(data => data.email === loggedInUser.email);
              setAdmin(currentAdmin);
          })
      }, [])

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light transparent py-4 custom-nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt=""/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item ms-5">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/home" style={{color: "#000 ", textDecoration: "none"}}>Home</Link></a>
                            </li>
                            <li class="nav-item ms-5">
                                <a class="nav-link active" href="#">About us</a>
                            </li>
                            <li class="nav-item ms-5">
                                <a class="nav-link active" href="#">Projects</a>
                            </li>
                            <li class="nav-item ms-5">
                                <a class="nav-link active" href="#">Contact us</a>
                            </li>
                            {
                                admin ?
                                <li class="nav-item ms-5" style={{display: "block"}}>
                                <a class="nav-link active" href="#">
                                <Link to="/admin" style={{color: "#000 ", textDecoration: "none"}}>Admin</Link>
                                </a>
                                </li>  :
                                <li class="nav-item ms-5" style={{display: "none"}}>
                                <a class="nav-link active" href="#">
                                <Link to="/admin" style={{color: "#000 ", textDecoration: "none"}}>Admin</Link>
                                </a>
                            </li>  
                            }
                            
                        </ul>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item ms-5">
                                <a class="nav-link btn custom-btn-2 " href="#">Get Started</a>
                            </li>
                             {
                                (loggedInUser.name) 
                                ?  <div className="d-flex">
                                        <li class="nav-item ms-2" >
                                        <a class="nav-link btn custom-btn-2 " href="#"  style={{fontWeight: "bold",  borderRadius: "5px"}}>{loggedInUser.name}</a>
                                    </li>
                                     <li class="nav-item ms-2" >
                                        <a class="nav-link btn custom-btn-2 " href="#"  style={{fontWeight: "bold",  borderRadius: "5px"}} onClick={handleReload}>Log out</a>
                                    </li>

                                    </div> 
                                :   <li class="nav-item ms-2">
                                        <a class="nav-link btn custom-btn-2 " href="#"><Link to="/login" style={{color: "#fff ", textDecoration: "none"}}>Log in</Link></a>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;