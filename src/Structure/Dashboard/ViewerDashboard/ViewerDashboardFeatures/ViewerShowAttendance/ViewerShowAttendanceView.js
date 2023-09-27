import React from 'react'

const ViewerShowAttendanceView = () => {
  return (
    <>
    <div>
      <div className='container py-5 col-sm-12'>
        <div style={{display: 'flex', color: '#008080',paddingLeft: '25px'}}>
          <h3 style={{fontWeight: 'bold'}}>Today Attendance : 01-June-2022 </h3>
        </div>
        <div className=''>
        <div className='col-sm-12'>
        <div style={{marginTop: '80px', marginBottom: '60px'}}  class="progress blue">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">P-90%</div>
            </div>
        </div>
      
      </div>
        <section className='p-4 '>
        <table class="table table-striped">
  <thead>
    <tr >
      <th style={{color: 'Coral'}} className='' scope="col">Class</th>
      <th style={{color: 'BlueViolet'}} scope="col">Section</th>
      <th style={{color: 'blue'}} scope="col">Total Student</th>
      <th style={{color: 'Tomato'}} scope="col">Present</th>
      <th style={{color: 'red'}} scope="col">Absence</th>
    </tr>
  </thead>
  <tbody>
    <tr >
    <td><p className='p-2' style={{backgroundColor: 'Coral', width: '60px', textAlign: 'center', color: 'white'}}>Six</p></td>
      <td> <a style={{textDecoration: 'none'}} href='/classbasedstudentabsence'><p className='p-2' style={{backgroundColor: 'BlueViolet', width: '40px', textAlign: 'center', color: 'white'}}>A</p></a></td>
     
      <td ><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>100</p></td>
      <td ><p className='p-2' style={{backgroundColor: 'Tomato', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
      <td><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></td>
    </tr>
    <tr >

    <td><p className='p-1' style={{backgroundColor: 'Coral', width: '60px', textAlign: 'center', color: 'white'}}>Seven</p></td>
      
    <td> <a style={{textDecoration: 'none'}} href='/classbasedstudentabsence'><p className='p-2' style={{backgroundColor: 'BlueViolet', width: '40px', textAlign: 'center', color: 'white'}}>B</p></a></td>
      
      <td ><p className='p-1' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>100</p></td>
      <td ><p className='p-1' style={{backgroundColor: 'Tomato', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
      <td><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></td>
    </tr>
    <tr >

    <td><p className='p-1' style={{backgroundColor: 'Coral', width: '60px', textAlign: 'center', color: 'white'}}>Eight</p></td>
      
    <td> <a style={{textDecoration: 'none'}} href='/classbasedstudentabsence'><p className='p-2' style={{backgroundColor: 'BlueViolet', width: '40px', textAlign: 'center', color: 'white'}}>A</p></a></td>
      
      <td ><p className='p-1' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>100</p></td>
      <td ><p className='p-1' style={{backgroundColor: 'Tomato', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
      <td><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></td>
    </tr>

  </tbody>
</table>
      </section>
        </div>
    </div>

    <div className='container pb-5'>
     <div className='row'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-2'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Historical Attendance</h3>
                      </div>
                   <div className="card-tools">
                    <button  id="w-change-close" type="button" className="btn btn-tool" data-card-widget="collapse">
                       </button>
                  </div>
                     </div>
                 </div>

                <div className='card-body' >
                   <div className='row'>
                        <div class={"col-sm-6 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Class : </label>
                                <select class="form-control" id="class" name="class">

                                    <option>Select Class</option>
                                    <option>K.G</option>
                                    <option>Nursery</option>
                                    <option>Play</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                    <option>Four</option>
                                    <option>Five</option>
                                    <option>Six</option>
                                    <option>Seven</option>
                                    <option>Eight</option>
                                    <option>Nine</option>
                                    <option>Ten</option>
                                    <option>Eleven</option>
                                    <option>Twelve</option>
                                </select>

                            </div>
                        </div>
                        <div class={"col-sm-6 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Section : </label>
                                <select class="form-control" id="class" name="class">

                                    <option>Select Section</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </select>

                            </div>
                        </div>
                        <div class={"col-sm-5 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Start Date : </label>
                                <input type="date" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-5 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">End Date : </label>
                                <input type="date" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                          <div  className='pt-2 mx-auto'>
                            <button style={{color: 'white', fontSize: '16px' }} type="button" class="btn bg-secondary bg-gradient px-5">View Attendance</button>
                          </div>
                        </div>

                   </div>
               </div>
            
         </div>
     </div>
           </div>
     </div>

     <section className='container'>
    <h2 style={{color: 'white'}} className='px-2 py-2 bg-info bg-gradient'> 20-June-2022 : </h2>

 <table class="table table-striped">
<thead>
<tr>
<th style={{textAlign: 'center'}} scope="col">Period</th>
<th style={{textAlign: 'center'}} scope="col">Subject</th>
<th style={{textAlign: 'center'}} scope="col">Class Time</th>
<th style={{textAlign: 'center'}} scope="col">Attendance Time</th>
<th style={{textAlign: 'center'}} scope="col">Teacher Initial</th>
<th style={{textAlign: 'center'}} scope="col">Total Student</th>
<th  scope="col">Present</th>
<th  scope="col">Absent</th>
</tr>
</thead>
<tbody>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>Bangla</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>English</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>Math.</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>ICT</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
</tbody>
</table>
  </section>
     <section className='container'>
    <h2 style={{color: 'white'}} className='px-2 py-2 bg-info bg-gradient'> 21-June-2022 : </h2>

 <table class="table table-striped">
<thead>
<tr>
<th style={{textAlign: 'center'}} scope="col">Period</th>
<th style={{textAlign: 'center'}} scope="col">Subject</th>
<th style={{textAlign: 'center'}} scope="col">Class Time</th>
<th style={{textAlign: 'center'}} scope="col">Attendance Time</th>
<th style={{textAlign: 'center'}} scope="col">Teacher Initial</th>
<th style={{textAlign: 'center'}} scope="col">Total Student</th>
<th  scope="col">Present</th>
<th  scope="col">Absent</th>
</tr>
</thead>
<tbody>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>Bangla</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>English</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>Math.</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>ICT</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
</tbody>
</table>
  </section>
     <section className='container'>
    <h2 style={{color: 'white'}} className='px-2 py-2 bg-info bg-gradient'> 22-June-2022 : </h2>

 <table class="table table-striped">
<thead>
<tr>
<th style={{textAlign: 'center'}} scope="col">Period</th>
<th style={{textAlign: 'center'}} scope="col">Subject</th>
<th style={{textAlign: 'center'}} scope="col">Class Time</th>
<th style={{textAlign: 'center'}} scope="col">Attendance Time</th>
<th style={{textAlign: 'center'}} scope="col">Teacher Initial</th>
<th style={{textAlign: 'center'}} scope="col">Total Student</th>
<th  scope="col">Present</th>
<th  scope="col">Absent</th>
</tr>
</thead>
<tbody>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>Bangla</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>English</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>Math.</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
<tr>

<td style={{textAlign: 'center'}}>First</td>
<td style={{textAlign: 'center'}}>ICT</td>
<td style={{textAlign: 'center'}}>10.00 AM</td>
<td style={{textAlign: 'center'}}>10.10 AM</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>100</td>
<td><p className='p-2' style={{backgroundColor: 'blue', width: '40px', textAlign: 'center', color: 'white'}}>80</p></td>
<td><a style={{textDecoration: 'none'}} href='/studentabsence'><p className='p-2' style={{backgroundColor: 'red', width: '40px', textAlign: 'center', color: 'white'}}>20</p></a></td>
</tr>
</tbody>
</table>
  </section>
    </>
  )
}

export default ViewerShowAttendanceView