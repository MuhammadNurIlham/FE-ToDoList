import React from 'react';
// import { Redirect } from "react-router-dom";
import { redirect } from 'react-router-dom';
import CardHomeComponent from '../components/CardHomeComponent';
import NavbarComponent from '../components/NavbarComponent';

function HomePage() {
  const token = localStorage.getItem("token");
  const Redirect = redirect;
  if (!token) {
     Redirect('/');
  };


  return (
    <>
      <NavbarComponent />
      <div className='container'>
        <CardHomeComponent />
      </div>
    </>
  )
}

export default HomePage;