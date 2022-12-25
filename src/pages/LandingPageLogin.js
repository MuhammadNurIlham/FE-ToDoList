import React from 'react';
import TodolistAtom from '../components/atoms/TodolistAtom';
import CardComponent from '../components/CardComponent';
import FormLoginComponent from '../components/FormLoginComponent';


function LandingPageLogin() {
    return (
        <div className='container landing-page py-5'>
            <div className='row'>
                <div className='vector1'></div>

                <div className='col-md-8'>
                    <TodolistAtom />
                    <CardComponent />
                </div>

                <div className='col bg-white'>
                    <FormLoginComponent />
                </div>

            </div>
        </div>
    )
}

export default LandingPageLogin;