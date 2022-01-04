import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';


const SignUp = () => {
    const { signInpopup, signUpWithEmailPass, setEmail, setPassword } = UseAuth();

    // const [setEmail] = useState('');
    // const [setPassword] = useState('');
    const [eror, setEror] = useState('')

    // const handleRegister = e => {
    //     e.preventDefault();
    //     signUpWithEmailPass(auth, email, password);
    // if (password.length < 6) {
    //     setEror('You must Add 6 charecter pass')
    //     return;
    // }
    // }
    const handleEmail = e => {
        setEmail(e.target.value);
        // e.preventDefault();
    }
    const handlepass = e => {
        setPassword(e.target.value);
        e.preventDefault();
    }

    return (
        <div>
            <h3 className="text-primary">Sign Up please</h3>
            <div className="shadow-lg p-3 mb-5 bg-white rounded w-50 mx-auto secondary" >
                <Form.Floating className="mb-3 w-50 mx-auto">
                    <Form.Control
                        onBlur={handleEmail}
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        required
                    />
                    <label htmlFor="floatingInputCustom">Enter Your Email address</label>
                </Form.Floating>
                <Form.Floating className="mb-3 w-50 mx-auto">
                    <Form.Control
                        onBlur={handlepass}
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <label htmlFor="floatingPasswordCustom">Enter your Password</label>
                </Form.Floating>
                <div>{eror}</div>
                <Button onClick={signUpWithEmailPass} className=" my-2" variant="primary px-5 py-2">SignUp</Button>
                <br /><br />
                <Button onClick={signInpopup} variant="outline-danger" className="mb-5">SignUp with Google</Button>
                <br />
                <p>Already User  <Link to="/login">LogIn</Link></p>
            </div>


        </div>
    );
};

export default SignUp;