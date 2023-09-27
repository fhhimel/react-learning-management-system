import React from 'react'

const Payment = () => {
  return (
    <div className='container pt-4'>
    <div className='row'>
       <div className='col-md-12'>
           <div className="card card-dark collapsed-card">
           <div className="card-header">
             <div className='d-flex justify-content-between px-4'>
             <div>
                 <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Create Payment Sector Name</h3>
              </div>
           <div className="card-tools">
           
              
          </div>
             </div>
         </div>

        <div className='card-body' >
       

            <div className='row'>

               

               <div class={"col-sm-4 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Sector Code : </label>
                        <input style={{border: '1px solid blue'}} type="text" class="form-control"/>
                     </div>
                </div>
               <div class={"col-sm-4 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Sector Name : </label>
                        <input style={{border: '1px solid blue'}} type="text" class="form-control"/>
                     </div>
                </div>
               <div class={"col-sm-2 p-2 mx-auto"}>
                  <div  className='pt-2 mx-auto'>
                    <button style={{color: 'white', fontSize: '20px' }} type="button" class="btn bg-secondary bg-gradient px-5">Submit</button>
                  </div>
                </div>
               

           </div>
       </div>
    
 </div>
</div>
   </div>

   <section className='py-5'>
     <h2 style={{color: 'white', fontSize: '30px', fontWeight: 'bold'}} className='px-3 py-2 bg-info bg-gradient'>Payment Sector Name</h2>

  <table class="table table-striped">
<thead>
<tr style={{textAlign: 'center'}}>
<th scope="col">Sector Code</th>
<th scope="col">Sector Name</th>
</tr>
</thead>
<tbody>

  <tr style={{textAlign: 'center'}}>
    <td>00AA#3RR</td>
    <td>Registration</td>
  </tr>
  <tr style={{textAlign: 'center'}}>
    <td>00AA#3RR</td>
    <td>Admission</td>
  </tr>



</tbody>
</table>
   </section>
    </div>
  )
}

export default Payment