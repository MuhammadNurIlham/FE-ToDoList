import React, { useState, useContext } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Alert } from 'bootstrap';

import { API } from '../config/API';
import { UserContext } from '../context/UserContext';

import ButtonAtom from './atoms/ButtonAtom';
import FormInputAtom from './atoms/FormInputAtom';
import GreetingAtom from './atoms/GreetingAtom';
import TitleAtom from './atoms/TitleAtom';

function FormRegisterComponent() {
    // for style button
    const styleButton = {
        color: '#FFFFFF',
        fontSize: '14px',
        fontFamily: 'Poppins',
        fontStyle: 'normal'
    };

    // for style title
    const style = {
        color: '#5D5871',
        fontSize: '20px',
        fontFamily: 'Poppins',
        fontStyle: 'normal'
    };

    // style for input
    const styleInput = {
        background: '#FFFFFF',
        borderRadius: '5px',
        border: '1px solid #E6EAEC',
        boxSizing: 'border-box'
    };

    // change title for this page
    const title = "Register";
    document.title = "Todolist | " + title;

    let navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login')
    }

    const [state, dispatch] = useContext(UserContext);

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        userName: "",
        password: "",
    });

    const { name, phone, email, userName, password } = form;

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            // Config Content-Type
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            // data body
            const body = JSON.stringify(form);

            // insert data user to database
            const response = await API.post('/register', body, config);

            // for notification
            if (response.data.status === "Success") {
                const alertRegister = (
                    <Alert variant="success" className="py-1">
                        Success
                    </Alert>
                );
                setMessage(alertRegister);
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    userName: "",
                    password: "",
                });
                navigateToLogin();
            } else {
                const alertRegister = (
                    <Alert variant="danger" className="py-1">
                        Failed
                    </Alert>
                );
                setMessage(alertRegister);
            }
        } catch (error) {
            console.log(error);
            const alertRegister = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alertRegister);
        };
    });


    return (
        <div>
            <GreetingAtom />
            <TitleAtom title="Sign-Up" style={style} />

            <div className='row'>
                <div className='col'>

                    {message && message}
                    <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>

                        <FormInputAtom
                            placeholder="Your Name"
                            label="Name"
                            type="text"
                            name="name"
                            value={name}
                            style={styleInput}
                            onChange={handleOnChange}
                        />
                        <FormInputAtom
                            placeholder="+62"
                            label="Phone"
                            type="text"
                            name="phone"
                            value={phone}
                            style={styleInput}
                            onChange={handleOnChange}
                        />
                        <FormInputAtom
                            placeholder="example@mail.com"
                            label="Email"
                            type="email"
                            name="email"
                            value={email}
                            style={styleInput}
                            onChange={handleOnChange}
                        />
                        <FormInputAtom
                            placeholder="Your username"
                            label="User Name"
                            type="text"
                            name="userName"
                            value={userName}
                            style={styleInput}
                            onChange={handleOnChange}
                        />
                        <FormInputAtom
                            placeholder="******"
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            style={styleInput}
                            onChange={handleOnChange}
                        />
                        <ButtonAtom
                            title="Sign Up"
                            variant="primary"
                            type="submit"
                            style={styleButton}
                        />

                    </Form>

                    <p className='question py-3 text-center'>
                        Already have an account?{' '}
                        <span className='question1 fw-bold'
                            style={{ color: '#1571DE' }}
                            onClick={() => navigateToLogin()}
                            >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FormRegisterComponent;