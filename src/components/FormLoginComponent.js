import React from 'react';
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
    }

    return (
        <div>
            <GreetingAtom />
            <TitleAtom title="Sign-In" style={style} />
            <div className='row'>
                <div className='col'>
                    <FormInputAtom
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="example@mail.com"
                        style={styleInput}
                    />
                    <FormInputAtom
                        label="User Name"
                        type="text"
                        name="username"
                        placeholder="Your username"
                        style={styleInput}
                    />
                    <FormInputAtom
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="******"
                        style={styleInput}
                    />
                    <ButtonAtom
                        title="Sign In"
                        variant="primary"
                        type="submit"
                        style={styleButton}
                    />
                    <p className='question py-3 text-center'>Don't have an account yet? <span className='question fw-bold' style={{ color: '#1571DE' }}>Sign Up</span></p>
                </div>
            </div>
        </div>
    );
}

export default FormLoginComponent;