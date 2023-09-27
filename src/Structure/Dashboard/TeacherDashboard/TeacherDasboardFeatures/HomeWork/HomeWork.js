import React from 'react'
import './HomeWork.css';

const HomeWork = () => {
  return (
    <div className='container '>

    <div className='row mt-4'>
       <div className=' col-md-12'>
           <div className="card card-dark collapsed-card">
           <div className="card-header">
             <div className='d-flex justify-content-between px-4'>
             <div>
                 <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Create Home Work  </h3>
              </div>
           
             </div>
         </div>

        <div className='card-body' >
        

            <div className='row'>

            <div class={"col-sm-3 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Topic : </label>
                        <input style={{border: '1px solid blue'}} type="text" class="form-control"/>
                     </div>
                </div>
            <div class={"col-sm-6 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Assignment Details : </label>
                       <textarea style={{width: '100%', border: '1px solid blue'}} class="form-control" rows="4" cols="50"></textarea>
                     </div>
                </div>
                <div class={"col-sm-3 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Assignment Attachment : </label>
                       <input style={{border: '1px solid blue', padding: '3px'}} type="file" class="form-control" id="avatar" name="avatar"/>
                     </div>
                </div>

               
               <div class={"col-sm-2 mx-auto p-2"}>
                    <div class="form-group">
                        <label className='pb-2' for="exampleSelect">Class : </label>
                        <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

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
                        <label className='pb-2' for="exampleSelect">Section : </label>
                        <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                            <option>Select Section</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            
                            
                        </select>

                    </div>
                </div>
               <div class={"col-sm-2 mx-auto p-2"}>
                    <div class="form-group">
                        <label className='pb-2' for="exampleSelect">Academic Session : </label>
                        <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                            <option>Select Session</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            
                            
                        </select>

                    </div>
                </div>
               <div class={"col-sm-2 mx-auto p-2"}>
                    <div class="form-group">
                        <label className='pb-2' for="exampleSelect">Subject : </label>
                        <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                            <option>Select Subject</option>
                            <option>Bangla</option>
                            <option>English</option>
                            <option>Physics</option>
                            
                            
                        </select>

                    </div>
                </div>
                <div class={"col-sm-2 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Start Date : </label>
                       <input style={{border: '1px solid blue'}} type="date" class="form-control"/>
                     </div>
                </div>
                <div class={"col-sm-2 p-2 mx-auto"}>
                    <div class="form-group">
                       <label className='pb-2' for="exampleInputEmail1">Due Date : </label>
                       <input style={{border: '1px solid blue'}} type="date" class="form-control"/>
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
<th scope="col">Home Work Meterial</th>
<th scope="col">Assignment Details</th>
<th scope="col">Class</th>
<th scope="col">Section</th>
<th scope="col">Academic Session</th>
<th scope="col">Subject </th>
<th scope="col">Start Date </th>
<th scope="col">Due Date</th>
<th scope="col">View HomeWork</th>
<th scope="col">Edit/Delete</th>
</tr>
</thead>
<tbody>
<tr>

<td><a style={{color: 'blue'}}>Download Attachment</a></td>
<td style={{color: 'blue'}}>Write a Paragraph about your self</td>
<td style={{color: 'blue'}}>Seven</td>
<td style={{color: 'blue'}}>A</td>
<td style={{color: 'blue'}}>2022</td>
<td style={{color: 'blue'}}>Bangla</td>
<td style={{color: 'blue'}}>24-April-2020</td>
<td style={{color: 'blue'}}>05-May-2020</td>
<td> <a href='/homeworkshow' style={{textDecoration: 'none', color: 'blue'}}> View Home Work</a></td>
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

<td><a style={{color: 'blue'}}>Download Attachment</a></td>
<td style={{color: 'blue'}}>Write a Paragraph about your self</td>
<td style={{color: 'blue'}}>Seven</td>
<td style={{color: 'blue'}}>A</td>
<td style={{color: 'blue'}}>2022</td>
<td style={{color: 'blue'}}>Bangla</td>
<td style={{color: 'blue'}}>24-April-2020</td>
<td style={{color: 'blue'}}>05-May-2020</td>
<td> <a href='/homeworkshow' style={{textDecoration: 'none', color: 'blue'}}> View Home Work</a></td>
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

<td><a style={{color: 'blue'}}>Download Attachment</a></td>
<td style={{color: 'blue'}}>Write a Paragraph about your self</td>
<td style={{color: 'blue'}}>Seven</td>
<td style={{color: 'blue'}}>A</td>
<td style={{color: 'blue'}}>2022</td>
<td style={{color: 'blue'}}>Bangla</td>
<td style={{color: 'blue'}}>24-April-2020</td>
<td style={{color: 'blue'}}>05-May-2020</td>
<td> <a href='/homeworkshow' style={{textDecoration: 'none', color: 'blue'}}> View Home Work</a></td>
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
  )
}

export default HomeWork