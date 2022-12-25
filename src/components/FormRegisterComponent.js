import React from 'react';
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

    const styleInput = {
        background: '#FFFFFF',
        borderRadius: '5px',
        border: '1px solid #E6EAEC',
        boxSizing: 'border-box'
    }

    return (
        <div>
            <GreetingAtom />
            <TitleAtom title="Sign-Up" style={style} />
            
            <div className='row'>
                <div className='col'>
                    <FormInputAtom
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        style={styleInput}
                    />
                    <FormInputAtom
                        label="Phone"
                        type="text"
                        name="phone"
                        placeholder="+62"
                        style={styleInput}
                    />
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
                        title="Sign Up"
                        variant="primary"
                        type="submit"
                        style={styleButton}
                    />
                    <p className='question py-3 text-center'>Already have an account? <span className='question1 fw-bold' style={{ color: '#1571DE' }}>Login</span></p>
                </div>
            </div>
        </div>
    );
}

export default FormRegisterComponent;