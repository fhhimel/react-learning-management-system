import React from 'react'

const CreateNewExam = () => {
  return (
    <section className='container'>
    <div className='row mt-4'>
        <div className=' col-md-12'>
            <div className="card card-dark collapsed-card">
            <div className="card-header">
              <div className='d-flex justify-content-between px-2'>
              <div>
                  <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Create New Exam : </h3>
               </div>
              </div>
          </div>

         <div className='card-body' >
         {/* id='list' */}

             <div className='row'>

                
                <div class={"col-sm-4 mx-auto p-2"}>
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
                <div class={"col-sm-4 mx-auto p-2"}>
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
                <div class={"col-sm-4 mx-auto p-2"}>
                     <div class="form-group">
                         <label className='pb-2' for="exampleSelect">Class : </label>
                         <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                             <option>Select Class</option>
                             <option>one</option>
                             <option>two</option>
                             <option>three</option>
                             <option>four</option>
                             
                         </select>

                     </div>
                 </div>
                <div class={"col-sm-4 mx-auto p-2"}>
                     <div class="form-group">
                         <label className='pb-2' for="exampleSelect">Section : </label>
                         <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                             <option>Select Section</option>
                             <option>A</option>
                             <option>B</option>
                             <option>C</option>
                             <option>D</option>
                             
                         </select>

                     </div>
                 </div>
                <div class={"col-sm-4 mx-auto p-2"}>
                     <div class="form-group">
                         <label className='pb-2' for="exampleSelect">Subject : </label>
                         <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                             <option>Select Subject</option>
                             <option>Bangla</option>
                             <option>English</option>
                             <option>Math.</option>
                             <option>Physics</option>
                             
                         </select>

                     </div>
                 </div>
                <div class={"col-sm-4 p-2 mx-auto"}>
                     <div class="form-group">
                        <label className='pb-2' for="exampleInputEmail1">Full Marks : </label>
                         <input style={{border: '1px solid blue'}} type="number" class="form-control"/>
                      </div>
                 </div>
                <div class={"col-sm-4 p-2 mx-auto"}>
                     <div class="form-group">
                        <label className='pb-2' for="exampleInputEmail1">Converted Marks to Final Grade : </label>
                         <input style={{border: '1px solid blue'}} type="text" class="form-control"/>
                      </div>
                 </div>
                <div class={"col-sm-4 p-2 mx-auto"}>
                     <div class="form-group">
                        <label className='pb-2' for="exampleInputEmail1">Exam Date : </label>
                         <input style={{border: '1px solid blue'}} type="date" class="form-control"/>
                      </div>
                 </div>
                 <div class={"col-sm-4 p-4 mx-auto"}>
                   <div  className='pt-2 mx-auto'>
                     <button style={{color: 'white', fontSize: '20px' }} type="button" class="btn bg-secondary bg-gradient px-5">Submit</button>
                   </div>
           </div>
               

            </div>
        </div>
     
  </div>
</div>
    </div>

    <div className='py-5'>
      <h2 style={{color: 'white', fontSize: '30px', fontWeight: 'bold'}} className='px-3 py-2 bg-info bg-gradient'>Marks Entry Sheet</h2>

   <table class="table table-striped">
<thead>
<tr>
<th scope="col">Session</th>
<th scope="col">Exam Type</th>
<th scope="col">Class</th>
<th scope="col">Section</th>
<th scope="col">Subject</th>
<th scope="col">Full Marks</th>
<th scope="col">Converted Marks To Final Grade</th>
<th scope="col">Exam Date</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>2022</td>
<td>Quiz-1</td>
<td>Seven</td>
<td>A</td>
<td>Bangla</td>
<td>60</td>
<td>50%</td>
<td>30-May-2022</td>
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
<td>2022</td>
<td>Quiz-1</td>
<td>Seven</td>
<td>A</td>
<td>Bangla</td>
<td>60</td>
<td>50%</td>
<td>30-May-2022</td>
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
<td>2022</td>
<td>Quiz-1</td>
<td>Seven</td>
<td>A</td>
<td>Bangla</td>
<td>60</td>
<td>50%</td>
<td>30-May-2022</td>
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
</section>
  )
}

export default CreateNewExam