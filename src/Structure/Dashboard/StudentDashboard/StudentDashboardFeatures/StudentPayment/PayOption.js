import React from 'react'
import bkash from '../../../../images/payment/bkash.png'
import nagad from '../../../../images/payment/nagad.png'

const PayOption = () => {
  return (
    <section class="container">
    <h2 style={{color: 'Blue', display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold'}} className='mt-5'>Payment Option</h2>
    <div class="row mx-auto mt-5">
    <a href='' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
        <div class="card bg-light shadow-sm">
           <div class="card-body py-4">
           <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                   <div className='px-3'>
                      <img style={{width:'100px', height:'70px'}} src={bkash} alt=""/>
                   </div>
                   <div className='px-3'>
                     <h4 class="card-title">Bkash</h4>
                    
                   </div>
               </div>
             
           </div>
        </div>
      </a>

      <a style={{textDecoration: 'none'}} href='' class="col-sm-6 my-4 col1">
        <div class="card bg-light shadow-sm">
           <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                   <div className='px-3'>
                      <img style={{width:'100px', height:'70px'}} src={nagad} alt=""/>
                   </div>
                   <div className='px-3'>
                     <h4 class="card-title">Nagad</h4>
                    
                   </div>
               </div>
            
           </div>
        </div>
      </a>

        
    </div>
    
    </section>
  )
}

export default PayOption