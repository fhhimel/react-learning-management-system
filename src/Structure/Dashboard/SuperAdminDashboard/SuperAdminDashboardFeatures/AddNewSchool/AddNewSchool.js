import React from 'react';
import './AddNewSchool.css'

const AddNewSchool = () => {

    return (
        <div className='container'>

            <div className='row mt-4'>
               <div className=' col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-4'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">School-Type : </h3>
                      </div>
                   <div className="card-tools">
                    <button  id="w-change-close" type="button" className="btn btn-tool" data-card-widget="collapse">
                       </button>
                      
                  </div>
                     </div>
                 </div>

                <div className='card-body' >
            

                    <div className='row'>

                       
                       <div class={"col-sm-2 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">School Type : </label>
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
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">EIIN No. : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">School Name : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">School Short Name : </label>
                                <input type="text" class="form-control"/>
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

            <div className='row pt-4'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-4'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Address : </h3>
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

                       
                       <div class={"col-sm-2 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Division : </label>
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
                                <label className='pb-2' for="exampleSelect">District : </label>
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
                                <label className='pb-2' for="exampleSelect">Upazilla : </label>
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
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Street/Village : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Phone No. : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Email : </label>
                                <input type="email" class="form-control"/>
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
            <div className='row pt-4'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-4'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">School Head Details : </h3>
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
                               <label className='pb-2' for="exampleInputEmail1">School Head Name: </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Phone No : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Email : </label>
                                <input type="email" class="form-control"/>
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
            <div className='row mt-4'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-4'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">School Admin Details : </h3>
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
                               <label className='pb-2' for="exampleInputEmail1">School Admin Name : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Phone No : </label>
                                <input type="text" class="form-control"/>
                             </div>
                        </div>
                       <div class={"col-sm-2 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control"/>
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

           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='pt-2 mx-auto'>
             <button style={{color: 'white', fontSize: '25px' }} type="button" class="btn bg-secondary bg-gradient py-2 px-5">Submit</button>
           </div>


           <section className='py-5'>
             <h2 style={{color: 'white'}} className='px-5 py-2 bg-info bg-gradient'>School Information : </h2>

          <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">School Type</th>
      <th scope="col">EIIN No.</th>
      <th scope="col">School Name</th>
      <th scope="col">School Short Name</th>
      <th scope="col">Division</th>
      <th scope="col">District</th>
      <th scope="col">Upazilla</th>
      <th scope="col">School Phone No.</th>
      <th scope="col">School Email</th>
      <th scope="col">School Head Name</th>
      <th scope="col">S.Head Phone No</th>
      <th scope="col">S.Head Email</th>
      <th scope="col">School Admin Name</th>
      <th scope="col"> School Admin Phone No</th>
      <th scope="col"> School Admin Email</th>
      <th scope="col">Status</th>
      <th scope="col">Edit/Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>07-APR-22</td>
      <td>22221130015</td>
      <td>Tasmi Jahan</td>
      <td>2</td>
      <td>English</td>
      <td>K.G</td>
      <td>A</td>
      <td>Present</td>
      <td>07-APR-22</td>
      <td>22221130015</td>
      <td>Tasmi Jahan</td>
      <td>2</td>
      <td>English</td>
      <td>K.G</td>
      <td>A</td>
      <td>Present</td>
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
      <td>2</td>
      <td>English</td>
      <td>K.G</td>
      <td>A</td>
      <td>Present</td>
      <td>07-APR-22</td>
      <td>22221130015</td>
      <td>Tasmi Jahan</td>
      <td>2</td>
      <td>English</td>
      <td>K.G</td>
      <td>A</td>
      <td>Present</td>
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
      <td>2</td>
      <td>English</td>
      <td>K.G</td>
      <td>A</td>
      <td>Present</td>
      <td>07-APR-22</td>
      <td>22221130015</td>
      <td>Tasmi Jahan</td>
      <td>2</td>
      <td>English</td>
      <td>K.G</td>
      <td>A</td>
      <td>Present</td>
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

export default AddNewSchool;