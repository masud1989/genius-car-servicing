import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {id: 1, name: 'Sohel', img: expert1},
        {id: 2, name: 'Md. Mithu', img: expert2},
        {id: 3, name: 'Rana', img: expert3},
        {id: 4, name: 'Tomal Ahmed', img: expert4},
        {id: 5, name: 'Tarek', img: expert5},
        {id: 6, name: 'Tushar', img: expert6},
    ]

    return (
        <div className="container mt-10">
            <h2 className="text-primary mt-5 text-center">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert =><Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;