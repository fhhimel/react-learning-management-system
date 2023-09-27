import React from 'react'

const ClassBasedStudentAbsence = () => {
  return (
    <section className='container'>
    <h2 style={{color: 'white'}} className='px-2 py-2 bg-info bg-gradient'>Student Attendance Information : </h2>

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
  )
}

export default ClassBasedStudentAbsence