import React from 'react';

const CreateNewPeriod = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-4'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Create New Period : </h3>
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
                               <label className='pb-2' for="exampleInputEmail1">Serial Number : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Start Tine : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">End Time : </label>
                               
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                       <div  className='pt-1 mx-auto'>
                            <button style={{color: 'white', fontSize: '20px' }} type="button" class="btn bg-secondary bg-gradient px-5">Submit</button>
                          </div>
                        </div>


                   </div>
               </div>
            
         </div>
     </div>
           </div>

           <section className='py-5'>
             <h2 style={{color: 'white'}} className='px-3 py-2 bg-info bg-gradient'>School Period Information</h2>

          <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Serial Number</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      <th scope="col">Edit/Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>07-APR-22</td>
      <td>22221130015</td>
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

export default CreateNewPeriod;