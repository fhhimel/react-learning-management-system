import React from 'react';
import attendance from '../../images/icons/attendance.png'
import routine from '../../images/icons/routine.png'
import homework from '../../images/icons/homework.png'
import evaluation from '../../images/icons/evaluation.png'
import payment from '../../images/icons/payment.png'
import notices from '../../images/icons/notices.png'
import activities from '../../images/icons/activities.png'
import inventory from '../../images/icons/inventory.png'
import calendar from '../../images/icons/calendar.png'
import eSchool from '../../images/icons/onlineclass.png'
import profile from '../../images/profile/profile.png'

import signout from '../../images/icons/signout.png'
import { Link } from "react-router-dom";




const StudentDashboard = () => {
    return (
      <>
      <div style={{height: '80px'}} className='bg-info'>
         <div style={{display: 'flex' , justifyContent: 'space-between'}} className='container'>
           <div>
             <img style={{ width: "50px" }} className='pt-3' src={profile} alt=""/>
           </div>
           <div className='pt-4'>
              <h3 className='' style={{color: 'white', fontSize: '24px', fontWeight: 'bold'}}>Fahim Hasan Himel</h3>
           </div>
           <div>
             <Link to="/"><img style={{ width: "45px" }} className='pt-3' src={signout} alt=""/></Link>
           </div>
        </div>
         </div>
        <section class="container">
        <h2 style={{color: 'Blue', display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold'}} className='mt-4'>Student Dashboard</h2>
        <div class="row mx-auto mt-3">
        <Link to='/sudentshowacademiccalender' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={calendar} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Academic Calendar</h4>
                         <p class="card-text">Add Academic Calendar</p>
                       </div>
                   </div>
                 
               </div>
            </div>
          </Link>

          <Link style={{textDecoration: 'none'}} to='/studentroutine' class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
                   <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={routine} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Routine</h4>
                         <p class="card-text">Make All Students Class Routine</p>
                       </div>
                   </div>
                
               </div>
            </div>
          </Link>

          <Link style={{textDecoration: 'none'}} to='/studentviewattendance' class="col-sm-6 my-4 col1">
            <div class="card  bg-light shadow-sm">
               <div class="card-body py-4">
                    <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''>
                    <div className='px-3'>
                      <img style={{width:'64px', height:'64px'}} src={attendance} alt=""/>
                   </div>
                   
                 <div className='px-3'>
                   <h4 class="card-title">Attendance</h4>
                    <p class="card-text">Make All Students Attendance</p>
                 </div>
                    </div>
               </div>
            </div>
          </Link>
          <Link to='/studenthomework' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1 ">
            <div class="card  bg-light shadow-sm ">
               <div class="card-body py-4">
                   
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={homework} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Home Work</h4>
                         <p class="card-text">Give HomeWork To All Students</p>
                       </div>
                   </div>
                 
               </div>
            </div>
          </Link>
          <Link to='/studentevaluation' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={evaluation} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Evaluation</h4>
                         <p class="card-text">Make Students Evaluation</p>
                       </div>
                   </div>
                 
                 
               </div>
            </div>
          </Link>
          <Link to='/studentinvoice' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">

               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={payment} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Payment</h4>
                         <p class="card-text">Create Students Payment Data</p>
                       </div>
                   </div>
                 
               </div>
            </div>
          </Link>
          <a style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={notices} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Notices</h4>
                         <p class="card-text">Add Notices/Events</p>
                       </div>
                   </div>
                 
               </div>
            </div>
          </a>
   
          <a style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
                 <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={inventory} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Resources</h4>
                         <p class="card-text">Add Resources</p>
                       </div>
                   </div>
                 
               </div>
            </div>
          </a>
          <a style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">

               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={activities} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Activities</h4>
                         <p class="card-text">Student Activities</p>
                       </div>
                   </div>
                 
               </div>
            </div>
          </a>
          <a  style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
                 <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={eSchool} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">eSchool</h4>
                         <p class="card-text">Start Online Class</p>
                       </div>
                   </div>
                 
               </div>
            </div>
          </a>


            
        </div>
        
        </section>

     
      </>
    );
};

export default StudentDashboard;