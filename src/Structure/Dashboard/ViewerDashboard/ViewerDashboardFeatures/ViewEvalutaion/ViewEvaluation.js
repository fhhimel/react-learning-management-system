import React from 'react'

const ViewEvaluation = () => {
  return (
    <section className='container'>
    <div className='row mt-4'>
   <div className=' col-md-12'>
       <div className="card card-dark collapsed-card">
       <div className="card-header">
         <div className='d-flex justify-content-between px-2'>
         <div>
             <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Student Result Sheet</h3>
          </div>
         </div>
     </div>

    <div className='card-body' >
    {/* id='list' */}

        <div className='row'>
            <div class={"col-sm-5 mx-auto p-2"}>
                <div class="form-group">
                    <label className='pb-2' for="exampleSelect">Student Id : </label>
                    <input style={{border: '1px solid blue'}} class="form-control" id="class" name="class" placeholder='Student Id'/>
               </div>
            </div>
        
        <div class={"col-sm-5 mx-auto p-2"}>
                <div class="form-group">
                    <label className='pb-2' for="exampleSelect">Session : </label>
                    <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">
                        <option>Select Session</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                   </select>
               </div>
            </div>
                   <div class={"col-sm-2 p-3 mx-auto"}>
                     <div  className=' mx-auto'>
                       <button style={{color: 'white', fontSize: '20px' }} type="button" class="btn bg-secondary bg-gradient px-5">Submit</button>
                     </div>
             </div>
           </div>
   </div>
</div>
</div>
 </div>

 <div className='py-5'>
   <div style={{textAlign: 'center', color: 'LightSeaGreen'}}>
       <h4>Sirajganj Collectrate School & College</h4>
   </div>
   <div style={{textAlign: 'center', color: 'LightSeaGreen'}}>
       <h4>Address: Sirajganj</h4>
   </div>

    <div className='row mt-4 mx-1'>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>ID : 123467</h5>
       </div>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>Name : Tasmi Jahan</h5>
       </div>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>Session : 2022</h5>
       </div>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>Class : Seven</h5>
       </div>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>Section : A</h5>
       </div>
    </div>

<table  class="table  mt-5">
<thead >
<tr>
 <th style={{textAlign: 'center'}} className='' scope="col-2">Subject</th>
 <th style={{textAlign: 'center'}} scope="col-2">Monthly Class Test (Average 20%)</th>
 <th colspan="2"  style={{textAlign: 'center'}} scope="">Half Yearly Exam
      <td style={{textAlign: 'center'}} className='px-2'>Sub</td>
      <td style={{textAlign: 'center'}} className='px-2'>MCQ</td>
 </th>
 <th colspan="2"  style={{textAlign: 'center'}} scope="">Final Exam
      <td style={{textAlign: 'center'}} className='px-2'>Sub</td>
      <td style={{textAlign: 'center'}} className='px-2'>MCQ</td>
 </th>
 
 <th  style={{textAlign: 'center'}} scope="col-2">Converted Marks (half+final)/2 (70%)</th>
 <th  style={{textAlign: 'center'}} scope="col-2">Attendance (5%)</th>
 <th  style={{textAlign: 'center'}} scope="col-2">Extra Curriculum (5%)</th>
 <th  style={{textAlign: 'center'}} scope="col-2">Total Marks (100%)</th>
 <th  style={{textAlign: 'center'}} scope="col-2">Grade</th>
 <th  style={{textAlign: 'center'}} scope="col-2">Grade Point</th>
</tr>
</thead>
<tbody>
<tr>
 <td style={{textAlign: 'center'}}>2022</td>
 <td style={{textAlign: 'center'}}>Bangla</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>7</td>
 <td style={{textAlign: 'center'}}>5</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>A+</td>
 <td style={{textAlign: 'center'}}>5.00</td>
</tr>
<tr>
 <td style={{textAlign: 'center'}}>2022</td>
 <td style={{textAlign: 'center'}}>Bangla</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>7</td>
 <td style={{textAlign: 'center'}}>5</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>A+</td>
 <td style={{textAlign: 'center'}}>5.00</td>
</tr>
<tr>
 <td style={{textAlign: 'center'}}>2022</td>
 <td style={{textAlign: 'center'}}>Bangla</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>7</td>
 <td style={{textAlign: 'center'}}>5</td>
 <td style={{textAlign: 'center'}}>90</td>
 <td style={{textAlign: 'center'}}>A+</td>
 <td style={{textAlign: 'center'}}>5.00</td>
</tr>


</tbody>
</table>

<div style={{margin: '70px 0px', padding: '40px 0px' , border: '1px solid black', borderRadius: '5px' }}>
  <div>
      <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold', textAlign: 'center'}}>Yearly Calculation</h3>
  </div>
  <div className='row mt-4'>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>Total Marks : 100</h5>
       </div>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>Total Grade Point : 5.00</h5>
       </div>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>Grade Point Average : 100%</h5>
       </div>
       <div className='col-sm-3 p-2'>
          <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>Position in Section : 05</h5>
       </div>
    </div>
</div>
</div>
</section>
  )
}

export default ViewEvaluation