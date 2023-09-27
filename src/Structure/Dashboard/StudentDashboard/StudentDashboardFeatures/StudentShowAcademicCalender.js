import React from 'react'

const StudentShowAcademicCalender = () => {
  return (
    <section className='container'>
    <h2 style={{color: 'white', backgroundColor: 'gray' , fontSize: '30px', fontWeight: 'bold'}} className='px-3 py-2'>School Academic Calendar</h2>

 <table class="table table-striped">
<thead>
<tr>
<th style={{textAlign: 'center'}} scope="col">Schedule Type</th>
<th style={{textAlign: 'center'}} scope="col">Schedule Date</th>
</tr>
</thead>
<tbody>
<tr>

<td style={{textAlign: 'center'}}>Admission & Registration</td>
<td style={{textAlign: 'center'}}>January 01-10, 2022</td>


</tr>
<tr>

<td style={{textAlign: 'center'}}>Class Start </td>
<td style={{textAlign: 'center'}}>January 15, 2022</td>


</tr>
<tr>

<td style={{textAlign: 'center'}}>First Semester</td>
<td style={{textAlign: 'center'}}>February 1, 2022</td>

</tr>
<tr>

<td style={{textAlign: 'center'}}>Second Semester</td>
<td style={{textAlign: 'center'}}>March, 2022</td>


</tr>
<tr>

<td style={{textAlign: 'center'}}>Second Semester</td>
<td style={{textAlign: 'center'}}>April 01-10, 2022</td>


</tr>
<tr>

<td style={{textAlign: 'center'}}>Admission & Registration</td>
<td style={{textAlign: 'center'}}>January 01-10, 2022</td>


</tr>


</tbody>
</table>
  </section>
  )
}

export default StudentShowAcademicCalender