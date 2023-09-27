import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Banner from '../Banner/Banner'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navber from '../Navber/Navber'
import NewsLetter from '../NewsLetter/NewsLetter'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
         <Navber/>
        <Header></Header>
        <Services></Services>
        <ContactUs></ContactUs>
        <NewsLetter></NewsLetter>
        <Footer></Footer>




    </div>
  )
}

export default Home












// <header style={{backgroundColor: '#778899', position: 'fixed'}} id="header" class="fixed-top bg-gradient ">
//     <div class="container d-flex align-items-center">

    
//      <h1 class="logo me-auto"><a style={{color: 'white'}} href="index.html">ePathShala</a></h1>
     
      
//       <a href="index.html" class="logo me-auto"><img alt="" class="img-fluid"/></a>

//       <nav id="navbar" class=" navbar">
//         <ul>
//           <li><a style={{color: 'white'}} class="nav-link" href="#hero">Home</a></li>
//           <li><a style={{color: 'white'}} class="nav-link" href="#about">About</a></li>
//           <li><a style={{color: 'white'}} class="nav-link" href="#services">Services</a></li>
//           <li><a style={{color: 'white'}} class="nav-link" href="#portfolio">Portfolio</a></li>
//           <li><a style={{color: 'white'}} class="nav-link" href="#team">Team</a></li>
//           <li class="dropdown"><a className='active' href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
//             <ul>
//               <li><a href="#">Drop Down 1</a></li>
//               <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
//                 <ul>
//                   <li><a href="#">Deep Drop Down 1</a></li>
//                   <li><a href="#">Deep Drop Down 2</a></li>
//                   <li><a href="#">Deep Drop Down 3</a></li>
//                   <li><a href="#">Deep Drop Down 4</a></li>
//                   <li><a href="#">Deep Drop Down 5</a></li>
//                 </ul>
//               </li>
//               <li><a href="#">Drop Down 2</a></li>
//               <li><a href="#">Drop Down 3</a></li>
//               <li><a href="#">Drop Down 4</a></li>
//             </ul>
//           </li>
//           <li><a style={{color: 'white'}} class="nav-link scrollto active" href="#contact">Contact</a></li>
//           <li><a style={{color: 'white'}} class="nav-link scrollto active" href="#contact">login</a></li>
//         </ul>
//         <i class="bi bi-list mobile-nav-toggle "></i>
//         <i class="fa-solid fa-align-justify mobile-nav-toggle"></i>
//       </nav>

//     </div>
//   </header>