import React from 'react'
import payment from '../../../../images/icons/payment.png';

const StudentPayment = () => {
  return (
    <section class="container">
    <h2 style={{color: 'Blue', display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold'}} className='mt-5'>Student's Invoice</h2>
    <div class="row mx-auto mt-5">
    <a href='/dueinvoice' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
        <div class="card bg-light shadow-sm">
           <div class="card-body py-4">
           <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                   <div className='px-3'>
                      <img style={{width:'64px', height:'64px'}} src={payment} alt=""/>
                   </div>
                   <div className='px-3'>
                     <h4 class="card-title">Due Invoice</h4>
                     <p class="card-text">Student Due Invoice</p>
                   </div>
               </div>
             
           </div>
        </div>
      </a>

      <a style={{textDecoration: 'none'}} href='/paidinvoice' class="col-sm-6 my-4 col1">
        <div class="card bg-light shadow-sm">
           <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                   <div className='px-3'>
                      <img style={{width:'64px', height:'64px'}} src={payment} alt=""/>
                   </div>
                   <div className='px-3'>
                     <h4 class="card-title">Paid Invoice</h4>
                     <p class="card-text">Student Paid Invoice</p>
                   </div>
               </div>
            
           </div>
        </div>
      </a>

        
    </div>
    
    </section>
  )
}

export default StudentPayment