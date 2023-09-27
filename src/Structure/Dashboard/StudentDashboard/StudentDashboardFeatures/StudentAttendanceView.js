import React from 'react';
import './StudentAttendanceView.css'

const StudentAttendanceView = () => {
 
    return (
     <>
     <section>
     <div className='content'>

<div className='row m-4'>
    <div className='col-md-12'>
      <div className="card card-dark collapsed-card">
        <div className="card-header">
<div className='d-flex justify-content-between px-4'>
<div>
 <h2 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title text-info py-2"> Sutdent Attendance Summary</h2>
</div>
</div>
</div>

<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='card-body py-5 ' id='list'>

<div style={{width:'500px'}} className='row bg-light'>

 <div className='p-3'>
   <div style={{display: 'flex'}} className=''>
     <div style={{width: '100%'}}>
      <div class="form-group">
          <label style={{fontSize: '20px', fontWeight: 'bolder' }} className='p-2' for="exampleInputEmail1">Start Date : </label>
          <br/>
          <input type="date" class="form-control"/>
      </div>
     </div>
     <div style={{width: '100%'}} >
       <div class="form-group">
          <label style={{fontSize: '20px', fontWeight: 'bolder' }} className='p-2' for="exampleInputEmail1">End Date : </label>
          <br/>
          <input type="date" class="form-control"/>
        </div>
     </div>
   </div>


<div class={" mx-auto"}>
    <div class="form-group">
        <label style={{fontSize: '20px', fontWeight: 'bolder' }} className='p-2' for="exampleSelect">Period : </label>
        <select class="form-control" id="class" name="class">

            <option>Select Period</option>
            <option>First</option>
            <option>Second</option>
        </select>

    </div>
</div>
<div class={"mx-auto"}>
                <div class="form-group">
                    <label style={{fontSize: '20px', fontWeight: 'bolder' }} className='p-2' for="exampleSelect">Subject : </label>
                    <select class="form-control" id="class" name="class">

                       <option>Select Subject</option>
                        <option>Bangla</option>
                        <option>English</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>Higher Mathematics	</option>
                        <option>Psychology</option>
                        <option>Geography</option>
                        <option>Statics</option>
                        <option>Chemistry</option>
                        <option>Information and Communication Technology</option>
                        
                    </select>

                </div>
            </div>

<div class={" mx-auto"}>
    <div class="form-group p-3">
     <button style={{fontSize: '24px'}} type="button" class="btn btn-secondary form-control">View Attendance </button>

    </div>
</div>
 </div>
</div>
</div>

</div>
</div>
</div>




</div>
     </section>


      <div className='row'>
        <div className='col-sm-6'>
        <div style={{marginTop: '80px', marginBottom: '60px'}}  class="progress blue">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
            </div>
        </div>
        <div className='col-sm-6'>
        <section className='p-4 '>
        <table class="table table-striped">
  <thead>
    <tr >
      <th className='' scope="col">Date</th>
      <th scope="col">Bangla</th>
      <th scope="col">English</th>
      <th scope="col">Physics</th>
      <th scope="col">Chemistry</th>
      <th scope="col">Biology</th>
      <th scope="col">Geography</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      
      <td className='mx-auto'>07-APR-22</td>
      <td>p</td>
      <td>p</td>
      <td>P</td>
      <td>P</td>
      <td>P</td>
      <td>P</td>
    </tr>
    <tr>
      
      <td>07-APR-22</td>
      <td>P</td>
      <td>A</td>
      <td>P</td>
      <td>P</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      
      <td>07-APR-22</td>
      <td>A</td>
      <td>A</td>
      <td>A</td>
      <td>P</td>
      <td>P</td>
      <td>A</td>
    </tr>
    <tr>
      
      <td>07-APR-22</td>
      <td>A</td>
      <td>P</td>
      <td>A</td>
      <td>P</td>
      <td>A</td>
      <td>A</td>
    </tr>
  </tbody>
</table>
      </section>
        </div>
      </div>
      <section>
     
        <div style={{display: 'flex'}}>
        <div className='px-4'>
            <h3 className='text-primary'>Total Days : 365</h3>
          </div>
          <div>
          <div className='px-4'>
            <h3 className='text-warning'>Present : 300 </h3>
          </div>
          <div className='px-4'>
            <h3 className='text-danger'>Absent : 65</h3>
          </div>
          </div>
        </div>
      </section>
     </>
    );
};

export default StudentAttendanceView;