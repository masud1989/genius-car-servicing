import React from 'react';
import Banar from '../Banar/Banar';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banar></Banar>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;