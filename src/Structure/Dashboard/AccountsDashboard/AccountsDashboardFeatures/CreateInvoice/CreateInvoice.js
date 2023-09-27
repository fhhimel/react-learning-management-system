import React from 'react';
import profile from '../../../../images/profile/profile.png';

const CreateInvoice = () => {
  return (
    <div className='container pt-4'>
    <div className='row'>
       <div className='col-md-12'>
           <div className="card card-dark collapsed-card">
           <div className="card-header">
             <div className='d-flex justify-content-between px-2'>
             <div>
                 <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Create Invoice</h3>
              </div>
           <div className="card-tools">
           
              
          </div>
             </div>
         </div>

        <div className='card-body' >
       

            <div className='row'>


            <div class={"col-sm-6 mx-auto p-2"}>
                            <div class="form-group">
                                <label  className='pb-2' for="exampleSelect">Sector Name: </label>
                                <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                                    <option>Select Sector Name</option>
                                    <option>Final</option>
                                    <option>Registration</option>
                                    <option>Admission</option>
                                </select>

                            </div>
                        </div>
                <div class={"col-sm-6 p-2 mx-auto"}>
                <div class="form-group">
                                <label  className='pb-2' for="exampleSelect">Class: </label>
                                <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                                    <option>Select Class</option>
                                    <option>KG</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>

                            </div>
                </div>
               <div class={"col-sm-6 p-2 mx-auto"}>
               <div class="form-group">
                                <label  className='pb-2' for="exampleSelect">Section: </label>
                                <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                                    <option>Select Section</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </select>

                            </div>
                </div>
               <div class={"col-sm-6 p-2 mx-auto"}>
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
     <h2 style={{color: 'white', fontSize: '30px', fontWeight: 'bold'}} className='px-3 py-2 bg-info bg-gradient'>Student Details</h2>

  <table class="table table-striped">
<thead>
<tr>
   <th scope="col">
       <label class="custom-control custom-switch mt-3">
            <input type="checkbox"/>
            <span class="px-2">Select All</span>
        </label>
   </th>
   <th scope="col">Student ID</th>
   <th scope="col">Student Name</th>
</tr>
</thead>
<tbody>

  <tr>
    <td>
    <th  scope="col">
    <label class="custom-control custom-switch mt-3">
            <input type="checkbox"/>
            <span class=""></span>
      </label>
   </th>
    </td>
    <td>68686765</td>
    <td>shfgakjashkj</td>
  </tr>
  <tr>
    <td>
    <th  scope="col">
    <label class="custom-control custom-switch mt-3">
            <input type="checkbox"/>
            <span class=""></span>
      </label>
   </th>
    </td>
    <td>68686765</td>
    <td>shfgakjashkj</td>
  </tr>
  <tr>
    <td>
    <th  scope="col">
    <label class="custom-control custom-switch mt-3">
            <input type="checkbox"/>
            <span class=""></span>
      </label>
   </th>
    </td>
    <td>68686765</td>
    <td>shfgakjashkj</td>
  </tr>




</tbody>
</table>
   </section>

   <div className='row'>
       <div className='col-md-12'>
           <div className="card card-dark collapsed-card">
           <div className="card-header">
             <div className='d-flex justify-content-between px-2'>
             <div>
                 <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Create Invoice Amount</h3>
              </div>
           <div className="card-tools">
           
              
          </div>
             </div>
         </div>

        <div className='card-body' >
       

            <div className='row'>


            <div class={"col-sm-5 mx-auto p-2"}>
                <div class="form-group">
                    <label className='pb-2' for="exampleInputEmail1">Amount : </label>
                        <input style={{border: '1px solid blue'}} type="number" class="form-control"/>
                 </div>
            </div>
            <div class={"col-sm-5 mx-auto p-2"}>
                <div class="form-group">
                    <label className='pb-2' for="exampleInputEmail1">Due Date : </label>
                        <input style={{border: '1px solid blue'}} type="date" class="form-control"/>
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

   <div className='pt-5'>
             <h2 style={{color: 'white', fontSize: '30px', fontWeight: 'bold'}} className='px-3 py-2 bg-info bg-gradient'>Student Invoice Sheet</h2>

          <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Student ID</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Section</th>
      <th scope="col">Sector Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Due Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>400122010101</td>
      <td>ytryutytr</td>
      <td>Six</td>
      <td>A</td>
      <td>Registration</td>
      <td>500</td>
      <td>1-June-2022</td>
      <td>
         <div className='.d-flex'>
           <div>
             <button style={{color: 'white'}} className='bg-success'>Edit</button>
           </div>
          <div>
            <button style={{color: 'white'}} className='bg-danger'>Delete</button>
          </div>
         </div>
      </td>
    </tr>
    <tr>
      <td>400122010101</td>
      <td>ytryutytr</td>
      <td>Six</td>
      <td>A</td>
      <td>Registration</td>
      <td>500</td>
      <td>1-June-2022</td>
      <td>
         <div className='.d-flex'>
           <div>
             <button style={{color: 'white'}} className='bg-success'>Edit</button>
           </div>
          <div>
            <button style={{color: 'white'}} className='bg-danger'>Delete</button>
          </div>
         </div>
      </td>
    </tr>
    <tr>
      <td>400122010101</td>
      <td>ytryutytr</td>
      <td>Six</td>
      <td>A</td>
      <td>Registration</td>
      <td>500</td>
      <td>1-June-2022</td>
      <td>
         <div className='.d-flex'>
           <div>
             <button style={{color: 'white'}} className='bg-success'>Edit</button>
           </div>
          <div>
            <button style={{color: 'white'}} className='bg-danger'>Delete</button>
          </div>
         </div>
      </td>
    </tr>


  </tbody>
</table>
          </div>
    </div>
  )
}

export default CreateInvoice