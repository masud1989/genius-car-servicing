import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin';

const Register = () => {
   
   const [ createUserWithEmailAndPassword,
            user,
            loading,
            error,
        ] = useCreateUserWithEmailAndPassword(auth);

   const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(user){
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.name.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }

    return (
            <div className="container w-50 mx-auto mt-5">
            <h2 className="text-info">Please Register </h2>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control name="name"  type="text" placeholder="Enter Your Name" required />
                <Form.Text className="text-muted">
                Name will be saved.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control name="password"   type="password" placeholder="Password" required />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control name="confirm-password"  type="password" placeholder="Confirm Password" required />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="info" type="submit">
                Register
            </Button>
            </Form>
            <p>Already Registered?.. <Link to="/login" onClick={navigateLogin} className="text-warning text-decoration-none">Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;