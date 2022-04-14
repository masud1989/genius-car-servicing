import React from 'react';
import google from '../../images/social/google.png';
import facebook from '../../images/social/facebook.png';
import github from '../../images/social/github.png';


const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center"> 
                <div style={{height: '1px'}} className='bg-info w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-info w-50'></div>
            </div>
            <div>
                <button className='btn btn-info w-50 d-block mx-auto my-2 text-white'>
                    <img style={{width: '30px'}} src={google} alt=""/>
                    Google Sign In
                </button>
                <button  className='btn btn-info w-50 d-block mx-auto my-2 text-white'>
                    <img style={{width: '30px', marginRight: '10px'}} src={facebook} alt=""/>
                    Facebook Sign In
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2 text-white'>
                    <img style={{width: '30px', marginRight: '10px'}} src={github} alt=""/>
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;