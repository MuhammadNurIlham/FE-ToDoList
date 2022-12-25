import React from 'react';
import TodolistAtom from '../components/atoms/TodolistAtom';
import CardComponent from '../components/CardComponent';
// import GreetingAtom from "../components/atoms/GreetingAtom";
// import TitleAtom from '../components/atoms/TitleAtom';
// import FormLoginComponent from '../components/FormLoginComponent';
import FormRegisterComponent from '../components/FormRegisterComponent';


function LandingPage() {
    return (
        <div className='container landing-page py-5'>
            <div className='row'>
                <div className='vector1'></div>

                <div className='col-md-8'>
                    <TodolistAtom />
                    <CardComponent />
                </div>

                <div className='col bg-white'>
                    {/* <FormLoginComponent /> */}
                    <FormRegisterComponent />
                </div>

            </div>
        </div>
    )
}

export default LandingPage;