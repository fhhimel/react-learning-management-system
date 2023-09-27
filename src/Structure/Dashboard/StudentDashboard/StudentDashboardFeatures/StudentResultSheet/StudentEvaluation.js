import React from 'react'
import evaluation from '../../../../images/icons/evaluation.png';

const StudentEvaluation = () => {
  return (
    <section class="container">
    <h2 style={{color: 'Blue', display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold'}} className='mt-4'>Student Evaluation</h2>
    <div class="row mx-auto mt-3">
    <a href='/studentresultsheet' style={{textDecoration: 'none'}} class="col-sm-6 my-4 col1">
        <div class="card bg-light shadow-sm">
           <div class="card-body py-4">
           <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                   <div className='px-3'>
                      <img style={{width:'64px', height:'64px'}} src={evaluation} alt=""/>
                   </div>
                   <div className='px-3'>
                     <h4 class="card-title">Marks Sheet</h4>
                   </div>
               </div>
             
           </div>
        </div>
      </a>

      <a style={{textDecoration: 'none'}} href='/finalgrade' class="col-sm-6 my-4 col1">
        <div class="card bg-light shadow-sm">
           <div class="card-body py-4">
               <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}} className=''> 
                   <div className='px-3'>
                      <img style={{width:'64px', height:'64px'}} src={evaluation} alt=""/>
                   </div>
                   <div className='px-3'>
                     <h4 class="card-title">Final Grade Sheet</h4>

                   </div>
               </div>
            
           </div>
        </div>
      </a>

        
    </div>
    
    </section>
  )
}

export default StudentEvaluation