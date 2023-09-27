import React from 'react'
import './Navber.css';
import navlogo from '../../images/logo/logo.png'
import { Link } from "react-router-dom";
const Navber = () => {
  return (
    <>
    <section >
    <nav style={{backgroundColor: '#FFFFFFD4'}} class="navbar navbar-expand-lg  shadow bg-info ">
  <div class="container">
    <img style={{width:'80px', height: '68px' }} src={navlogo} alt=""/>
   
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span  class="navbar-toggler-icon"><i style={{color: 'gray'}} class="fa-solid fa-align-justify"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto pr-4">
        <li class="nav-item px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item  px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} class="nav-link " href="#">About</a>
        </li>
        <li class="nav-item  px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item  px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} class="nav-link " href="#">Contact</a>
        </li>
        <li class="nav-item  px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} class="nav-link " href="#">Gallery</a>
        </li>
        <li class="nav-item  px-3">
          <Link style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} class="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </section>
    </>
  )
}

export default Navber