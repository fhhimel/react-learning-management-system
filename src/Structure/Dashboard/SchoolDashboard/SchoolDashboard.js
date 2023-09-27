import React from 'react';
import calendar from '../../images/icons/calendar.png';
import organization from '../../images/icons/organization.png';
import class1 from '../../images/icons/class.png';
import section from '../../images/icons/section.png';
import period from '../../images/icons/clock.png';
import subject from '../../images/icons/subject.png';
import routine from '../../images/icons/routine.png';
import student from '../../images/icons/student.png';
import teacher from '../../images/icons/teacher.png';
import accounts from '../../images/icons/accounts.png';
import evaluation from '../../images/icons/evaluation.png';
const SchoolDashboard = () => {
    return (
        <section class="container">
        <h2 style={{color: 'Blue', display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold'}} className='mt-5'>School Dashboard</h2>
        <div class="row mx-auto mt-5">
        <a href='/academic-calender' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
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
        </a>
        <a style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={organization} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Organization Type</h4>
                         <p class="card-text">Add Organization Type</p>
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
                          <img style={{width:'64px', height:'64px'}} src={class1} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Class</h4>
                         <p class="card-text">Create Class</p>
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
                          <img style={{width:'64px', height:'64px'}} src={section} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Section</h4>
                         <p class="card-text">Create Section</p>
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
                          <img style={{width:'64px', height:'64px'}} src={period} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Period</h4>
                         <p class="card-text">Create Period</p>
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
                          <img style={{width:'64px', height:'64px'}} src={subject} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Subject</h4>
                         <p class="card-text">Add Subject</p>
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
                          <img style={{width:'64px', height:'64px'}} src={routine} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Routine</h4>
                         <p class="card-text">Create Routine</p>
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
                          <img style={{width:'64px', height:'64px'}} src={student} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Student</h4>
                         <p class="card-text">Add Student</p>
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
                          <img style={{width:'64px', height:'64px'}} src={teacher} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Teacher</h4>
                         <p class="card-text">Add Teacher</p>
                       </div>
                   </div>
                 
               </div>
            </div>
        </a>
        <a href='/createnewexam' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
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
          </a>
        <a href='/paymentsector' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={accounts} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Payment</h4>
                         <p class="card-text">Create Payment Sector</p>
                       </div>
                   </div>
                 
               </div>
            </div>
        </a>


            
        </div>

        <div className='container my-2'>
          <div style={{display: 'flex', justifyContent: 'end'}}>
            <i style={{fontSize: '30px', color: 'blue'}} class="fa-solid fa-angle-left"></i>
             <h5 style={{color: 'blue'}} className='px-2'>LogOut</h5>
          </div>
        </div>
        
        </section>
    );
};

export default SchoolDashboard;