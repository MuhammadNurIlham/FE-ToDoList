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

    return (
        <div className='container'>
            <GreetingAtom />
            <TitleAtom title="Sign-In" style={style} />
            <div className='row'>
                <div className='col-md-4'>
                    <FormInputAtom
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="example@mail.com"
                    />
                    <FormInputAtom
                        label="User Name"
                        type="text"
                        name="username"
                        placeholder="Your username"
                    />
                    <FormInputAtom
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="******"
                    />
                    <ButtonAtom
                        title="Sign In"
                        variant="primary"
                        type="submit"
                        style={styleButton}
                    />
                    <p className='question'>Don't have an account yet? <span className='question fw-bold' style={{ color: '#1571DE' }}>Sign Up</span></p>
                </div>
            </div>
        </div>
    );
}

export default FormLoginComponent;