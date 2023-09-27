import React from 'react'

const HomeWorkShow = () => {
  return (
    <section className='py-5 container'>
    <h2 style={{color: 'white'}} className='px-2 py-2 bg-info bg-gradient'>Home Work : </h2>

 <table class="table table-striped">
<thead>
<tr>
<th scope="col">Student ID</th>
<th scope="col">Name</th>
<th scope="col">Status</th>
<th scope="col">Submission Date</th>
<th scope="col">Home Work File</th>
</tr>
</thead>
<tbody>
<tr>

<td>0132874777</td>
<td>Tasmi Jahan</td>
<td>Submit</td>
<td>10 Feb 2022 </td>
<td style={{color: 'blue'}}>Open File</td>
</tr>
<tr>

<td>0132874777</td>
<td>Tasmi Jahan</td>
<td>Submit</td>
<td>10 Feb 2022 </td>
<td style={{color: 'blue'}}>Open File</td>
</tr>
<tr>

<td>0132874777</td>
<td>Tasmi Jahan</td>
<td>Submit</td>
<td>10 Feb 2022 </td>
<td style={{color: 'blue'}}>Open File</td>
</tr>



</tbody>
</table>
  </section>
  )
}

export default HomeWorkShow