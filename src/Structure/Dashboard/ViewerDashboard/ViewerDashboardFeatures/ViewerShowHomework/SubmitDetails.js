import React from 'react'

const SubmitDetails = () => {
  return (
    <section className='container'>
    <h2 style={{color: 'white', backgroundColor: 'gray'}} className='px-2 py-2'>Home Work Submitted Details: </h2>

 <table class="table table-striped">
<thead>
<tr>
<th style={{textAlign: 'center'}} scope="col">Student ID</th>
<th style={{textAlign: 'center'}} scope="col">Student Name</th>
<th style={{textAlign: 'center'}} scope="col">Status</th>
</tr>
</thead>
<tbody>
<tr>

<td style={{textAlign: 'center'}}>400122010101</td>
<td style={{textAlign: 'center'}}>Tanzina Bithi</td>
<td style={{textAlign: 'center'}}>Submitted</td>
</tr>
</tbody>
</table>
  </section>
  )
}

export default SubmitDetails