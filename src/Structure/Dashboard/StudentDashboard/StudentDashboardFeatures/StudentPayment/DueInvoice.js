import React from 'react'

const DueInvoice = () => {
  return (
    <section className='container'>
    <h2 style={{color: 'white'}} className='px-3 py-2 bg-info bg-gradient'>Due Invoice</h2>

 <table class="table table-striped">
<thead>
<tr>
<th scope="col">Invoice ID</th>
<th scope="col">Sector Name</th>
<th scope="col">Amount</th>
<th scope="col">Due Date</th>
<th scope="col">Pay Now</th>
</tr>
</thead>
<tbody>

<tr>
<td>87487fch33</td>
<td>Registration</td>
<td>1200</td>
<td>30-June-2022</td>
<td>
    <a href='/payoption'><button style={{backgroundColor: 'tomato', color: 'white'}}>Pay Now</button></a>
</td>
</tr>


</tbody>
</table>
  </section>
  )
}

export default DueInvoice