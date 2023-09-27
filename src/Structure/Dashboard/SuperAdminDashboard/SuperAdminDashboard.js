import React from 'react';
import school from '../../images/icons/school.png';
import organization from '../../images/icons/organization.png';
import class1 from '../../images/icons/class.png';
import section from '../../images/icons/section.png';
import period from '../../images/icons/clock.png';
import subject from '../../images/icons/subject.png';



const SuperAdminDashboard = () => {
    return (
        <section class="container">
        <h2 style={{color: 'Blue', display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold'}} className='mt-5'>Super Admin Dashboard</h2>
        <div class="row mx-auto mt-5">
        <a style={{textDecoration: 'none'}} href='/add-school' class="col-sm-12 col-md-6 my-4 col1">
           <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={school} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4  class="card-title">Add New School</h4>
                    
                       </div>
                   </div>
                 
               </div>
            </div>
         
        </a>
        <a style={{textDecoration: 'none'}} href='/add-organization' class="col-sm-12 col-md-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={organization} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Create New Organization Type</h4>
                        
                       </div>
                   </div>
                 
               </div>
            </div>
        </a>
        <a style={{textDecoration: 'none'}} href='/create-class' class="col-sm-12 col-md-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={class1} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Create New Class</h4>
                         
                       </div>
                   </div>
                 
               </div>
            </div>
        </a>
        <a style={{textDecoration: 'none'}} href='/create-section' class="col-sm-12 col-md-6  my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={section} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Create New Section</h4>
                         
                       </div>
                   </div>
                 
               </div>
            </div>
        </a>
        <a style={{textDecoration: 'none'}} href='/create-period' class="col-sm-12 col-md-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={period} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Create New Period</h4>
                         
                       </div>
                   </div>
                 
               </div>
            </div>
        </a>
        <a style={{textDecoration: 'none'}} href='/create-subject' class="col-sm-12 col-md-6 my-4 col1">
            <div class="card bg-light shadow-sm">
               <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                       <div className='px-3'>
                          <img style={{width:'64px', height:'64px'}} src={subject} alt=""/>
                       </div>
                       <div className='px-3'>
                         <h4 class="card-title">Create New Subject</h4>
                         
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

export default SuperAdminDashboard;