import React from 'react';
import './Homepage.css'
import About from '../About/About';
import HomeDoctor from '../Doctors/HomeDoctor/HomeDoctor';
import HomeService from '../Services/ServiceForHome/HomeService';
import Banner from '../Banner/Banner';
const HomePage = () => {
    return (
        <div className="body-container">
            <Banner></Banner>
            <h2 className="text-success border w-25 mx-auto p-2 rounded mb-5 my-5 ">Our Services </h2>
            <HomeService></HomeService>
            <HomeDoctor></HomeDoctor>
            <About></About>


        </div>

    );
};

export default HomePage;