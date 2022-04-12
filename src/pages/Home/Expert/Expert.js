import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className=" col-sm-12 col-md-4 col-lg-3 mt-3 mx-3 ">
            <div class="card p-2" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-success">{name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-danger">Hire Me</a>
            </div>
        </div>
        </div>
    );
};

export default Expert;