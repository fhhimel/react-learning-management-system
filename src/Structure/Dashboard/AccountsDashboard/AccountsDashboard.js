import React from 'react';
import payment from '../../images/icons/payment.png'
import profile from '../../images/profile/profile.png'

const AccountsDashboard = () => {
  return (
    <>
    <section class="container">
    <h2 style={{color: 'Blue', display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold'}} className='mt-5'>Accounts Dashboard</h2>
    <div class="row mx-auto mt-5">
      <a href='/createinvoice' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
        <div class="card bg-light shadow-sm">
           <div class="card-body py-4">

           <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                   <div className='px-3'>
                      <img style={{width:'64px', height:'64px'}} src={payment} alt=""/>
                   </div>
                   <div className='px-3'>
                     <h4 class="card-title">Create Invoice</h4>
                     <p class="card-text">Create Payment Invoice</p>
                   </div>
               </div>
             
           </div>
        </div>
      </a>
    </div>
    
    </section>

    <div className='container my-2'>
      <div style={{display: 'flex', justifyContent: 'end'}}>
        <i style={{fontSize: '30px', color: 'blue'}} class="fa-solid fa-angle-left"></i>
         <h5 style={{color: 'blue'}} className='px-2'>LogOut</h5>
      </div>
    </div>
  </>
  )
}

export default AccountsDashboard