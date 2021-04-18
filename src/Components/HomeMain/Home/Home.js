import React from 'react';
import Footer from '../Footer/Footer';
import BestCompany from '../BestCompany/BestCompany';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Bangladesh from '../Bangladesh/Bangladesh';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BestCompany></BestCompany>
            <Services></Services>
            <Testimonials></Testimonials>
            <Bangladesh></Bangladesh>
            <Footer></Footer>
        </div>
    );
};

export default Home;