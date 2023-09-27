import React from 'react';

const CreateNewSubject = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-4'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Create New Subject : </h3>
                      </div>
                   <div className="card-tools">
                    <button  id="w-change-close" type="button" className="btn btn-tool" data-card-widget="collapse">
                       </button>
                       {/* onClick={handlelist} */}
                       {/* active */}
                  </div>
                     </div>
                 </div>

                <div className='card-body' >
                {/* id='list' */}

                    <div className='row'>

                       

                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Subject Code : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Subject Name : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                        <div class={"col-sm-2 mx-auto p-2"}>
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
                        <div class={"col-sm-2 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Organization Type: </label>
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
                       <div class={"col-sm-2 p-2 mx-auto"}>
                       <div  className='pt-1 mx-auto'>
                            <button style={{color: 'white', fontSize: '20px' }} type="button" class="btn bg-secondary bg-gradient px-5">Submit</button>
                          </div>
                        </div>
                        {/* <div style={{paddingTop: '20px'}} class={"col-sm-2 mx-auto"}>
                           <button  type="button" class="btn btn-primary">Primary</button>
                        </div> */}

                   </div>
               </div>
            
         </div>
     </div>
           </div>

           <section className='py-5'>
             <h2 style={{color: 'white'}} className='px-3 py-2 bg-info bg-gradient'>Subject Information</h2>

          <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Subject Code</th>
      <th scope="col">Subject Name</th>
      <th scope="col">Class Code</th>
      <th scope="col">Organization Type</th>
      <th scope="col">Edit/Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>07-APR-22</td>
      <td>22221130015</td>
      <td>Tasmi Jahan</td>
      <td>Tasmi Jahan</td>
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
      
      <td>07-APR-22</td>
      <td>22221130015</td>
      <td>Tasmi Jahan</td>
      <td>Tasmi Jahan</td>
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
      
      <td>07-APR-22</td>
      <td>22221130015</td>
      <td>Tasmi Jahan</td>
      <td>Tasmi Jahan</td>
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
           </section>
        </div>
    );
};

export default CreateNewSubject;