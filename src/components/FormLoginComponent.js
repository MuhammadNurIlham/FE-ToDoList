import React, { useContext, useState } from 'react';
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

function FormLoginComponent() {
    // style for button
    const styleButton = {
        color: '#FFFFFF',
        fontSize: '14px',
        fontFamily: 'Poppins',
        fontStyle: 'normal'
    };

    // style for title
    const style = {
        color: '#5D5871',
        fontSize: '20px',
        fontFamily: 'Poppins',
        fontStyle: 'normal'
    };

    // style for form input
    const styleInput = {
        background: '#FFFFFF',
        borderRadius: '5px',
        border: '1px solid #E6EAEC',
        boxSizing: 'border-box'
    };

    // change title for this page
    const title = "Login";
    document.title = "Todolist | " + title;

    let navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/');
    };

    const [state, dispatch] = useContext(UserContext);

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        email: "",
        userName: "",
        password: "",
    });

    const { email, userName, password } = form;

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            const data = await API.post('/login', form);
            const alertLogin = (
                <Alert variant="success" className="py-1">
                    Login Success
                </Alert>
            );
            setMessage(alertLogin);
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: data.data.data
            });
            console.log("this state", state);
            navigate('/home');


        } catch (error) {
            console.log(error);
            const alertLogin = (
                <Alert variant="danger" className="py-1">
                    Login Failed
                </Alert>
            );
            navigate('/');
            setMessage(alertLogin);
        };
    });

    return (
        <div>
            <GreetingAtom />
            <TitleAtom title="Sign-In" style={style} />

            <div className='row'>
                <div className='col'>

                    {message && message}
                    <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>

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
                            title="Sign In"
                            variant="primary"
                            type="submit"
                            style={styleButton}
                        />

                    </Form>
                    <p className='question py-3 text-center'>Don't have an account yet?{' '}
                        <span className='question1 fw-bold'
                            style={{ color: '#1571DE' }}
                            onClick={() => navigateToRegister()}
                        >
                            Sign Up
                        </span>
                    </p>

                </div>
            </div>

        </div>
    );
}

export default FormLoginComponent;