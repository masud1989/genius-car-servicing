import React from 'react';
import notfound from '../../../src/images/banner_error_404.jpg';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row mx-auto">
            <h2 className="text-primary text-center">Sorry! URL is wrong..</h2>
            <img className="mx-auto" src={notfound} alt=""/>
            </div>
        </div>
    );
};

export default NotFound;