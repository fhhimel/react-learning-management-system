import React from 'react'

const StudentResultSheet = () => {
  return (
    <section className='container'>
    <div className='row mt-4'>
      <div className=' col-md-12'>
          <div className="card card-dark collapsed-card">
          <div className="card-header">
            <div className='d-flex justify-content-between px-2'>
            <div>
                <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title pt-2">Marks Sheet</h3>
             </div>
            </div>
        </div>

       <div className='card-body' >
       {/* id='list' */}

           <div className='row'>
           
           <div class={"col-sm-3 mx-auto p-2"}>
                   <div class="form-group">
                       <label className='pb-2' for="exampleSelect">Select Session : </label>
                       <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">
                           <option>Select Session</option>
                           <option>2022</option>
                           <option>2021</option>
                           <option>2020</option>
                           <option>2019</option>
                      </select>
                  </div>
               </div>
               <div class={"col-sm-3 mx-auto p-2"}>
                   <div class="form-group">
                       <label className='pb-2' for="exampleSelect">Exam Type : </label>
                       <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">
                           <option>Select Exam Type</option>
                           <option>Quiz-1</option>
                           <option>Quiz-2</option>
                           <option>Quiz-3</option>
                           <option>Final</option>
                      </select>
                  </div>
               </div>

           <div class={"col-sm-3 mx-auto p-2"}>
                   <div class="form-group">
                       <label className='pb-2' for="exampleSelect">Student Id : </label>
                       <input style={{border: '1px solid blue'}} class="form-control" id="class" name="class" placeholder='Student Id'/>
                  </div>
               </div>
             <div class={"col-sm-3 p-3 mx-auto"}>
                        <div  className='mx-auto'>
                          <button style={{color: 'white', fontSize: '20px' }} type="button" class="btn bg-secondary bg-gradient px-5">Submit</button>
                        </div>
                </div>
              </div>
      </div>
   </div>
</div>
</div>


 <div className='py-5'>
      <h2 style={{color: 'LightSeaGreen', fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}} className='px-3 py-2'>Marks Sheet</h2>
      <div style={{textAlign: 'center', color: 'LightSeaGreen'}}>
          <h4>Sirajganj Collectrate School & College</h4>
      </div>
      <div style={{textAlign: 'center', color: 'LightSeaGreen'}}>
          <h4>Address: Sirajganj</h4>
      </div>

       <div className='row mt-4 mx-1'>
          <div className='col-sm-3 p-2'>
             <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500'}}>ID : 123467</h5>
          </div>
          <div className='col-sm-3 p-2'>
             <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500'}}>Name : Tasmi Jahan</h5>
          </div>
          <div className='col-sm-3 p-2'>
             <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500'}}>Class : Seven</h5>
          </div>
          <div className='col-sm-3 p-2'>
             <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500'}}>Section : A</h5>
          </div>
          <div className='col-sm-3 p-2'>
             <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500'}}>Session : 2022</h5>
          </div>
          <div className='col-sm-3 p-2'>
             <h5 style={{color: 'gray', fontSize: '25px', fontWeight: '500'}}>Exam Name : Quiz-1</h5>
          </div>
       </div>

<table class="table table-striped mt-5">
<thead>
  <tr>
    <th scope="col">S/N</th>
    <th scope="col">Subject</th>
    <th scope="col">Marks Obtained</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>2022</td>
    <td>Bangla</td>
    <td>90</td>
  </tr>
  <tr>
    <td>2022</td>
    <td>Bangla</td>
    <td>90</td>
  </tr>
  <tr>
    <td>2022</td>
    <td>Bangla</td>
    <td>90</td>
  </tr>
</tbody>
</table>
</div>
</section>
  )
}

export default StudentResultSheet