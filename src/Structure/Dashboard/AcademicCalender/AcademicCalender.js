import React from 'react'

const AcademicCalender = () => {
  return (
    <div className='container pt-4'>
    <div className='row'>
       <div className='col-md-12'>
           <div className="card card-dark collapsed-card">
           <div className="card-header">
             <div className='d-flex justify-content-between px-4'>
             <div>
                 <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Academic Calender</h3>
              </div>
           <div className="card-tools">
           
              
          </div>
             </div>
         </div>

        <div className='card-body' >
       

            <div className='row'>

               

               <div class={"col-sm-4 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Schedule Type : </label>
                        <input style={{border: '1px solid blue'}} type="text" class="form-control"/>
                     </div>
                </div>
               <div class={"col-sm-4 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Schedule Date : </label>
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
     <h2 style={{color: 'white', fontSize: '30px', fontWeight: 'bold'}} className='px-3 py-2 bg-info bg-gradient'>Organization Information</h2>

  <table class="table table-striped">
<thead>
<tr>
<th scope="col">Schedule Type</th>
<th scope="col">Schedule Date</th>
</tr>
</thead>
<tbody>
<tr>

<td>Admission & Registration</td>
<td>January 01-10, 2022</td>


</tr>
<tr>

<td>Class Start </td>
<td>January 15, 2022</td>


</tr>
<tr>

<td>First Semester</td>
<td>February 1, 2022</td>

</tr>
<tr>

<td>Second Semester</td>
<td>March, 2022</td>


</tr>
<tr>

<td>Second Semester</td>
<td>April 01-10, 2022</td>


</tr>
<tr>

<td>Admission & Registration</td>
<td>January 01-10, 2022</td>


</tr>


</tbody>
</table>
   </section>
</div>
  )
}

export default AcademicCalender