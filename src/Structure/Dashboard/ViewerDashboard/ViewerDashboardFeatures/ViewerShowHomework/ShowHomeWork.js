import React from 'react'

const ShowHomeWork = () => {
  return (
    <>

    <div className='container'>
    <div className='row'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-2'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2">Student Home Work</h3>
                      </div>
                     </div>
                 </div>

                <div className='card-body' >
              
                    <div className='row'>

                       

                    <div class={"col-sm-6 mx-auto p-2"}>
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
                    <div class={"col-sm-6 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Subject : </label>
                                <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                                    <option>Select Subject</option>
                                    <option>Bangla</option>
                                    <option>English</option>
                                    <option>Math.</option>
                                
                                </select>

                            </div>
                        </div>
                    <div class={"col-sm-6 mx-auto p-2"}>
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
                    <div class={"col-sm-6 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Teacher Initial: </label>
                                <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">

                                    <option>Select Initial</option>
                                    <option>AkM</option>
                                    <option>MDA</option>
                                    <option>SKD</option>
                                
                                </select>

                            </div>
                        </div>
                       <div class={"col-sm-6 p-2 mx-auto"}>
                            <div class="form-group">
                               <label className='pb-2' for="exampleInputEmail1">Date : </label>
                                <input style={{border: '1px solid blue'}} type="date" class="form-control"/>
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
    </div>
    <section className='container mt-5'>

    <h2 style={{color: 'white', backgroundColor: 'gray' }} className='px-2 py-2'>Student Home Sheet</h2>
  

 <table class="table table-striped">
<thead>
<tr>
<th style={{textAlign: 'center'}} scope="col">class</th>
<th style={{textAlign: 'center'}} scope="col">Subject</th>
<th style={{textAlign: 'center'}} scope="col">Section</th>
<th style={{textAlign: 'center'}} scope="col">Teacher Initial</th>
<th style={{textAlign: 'center'}} scope="col">Topic</th>
<th style={{textAlign: 'center'}} scope="col">Home Work</th>
<th style={{textAlign: 'center'}} scope="col">Submission Details</th>
<th style={{textAlign: 'center'}} scope="col"> Start Date</th>
<th style={{textAlign: 'center'}} scope="col">Due Date</th>
</tr>
</thead>
<tbody>
<tr>
<td style={{textAlign: 'center'}}>Six</td>
<td style={{textAlign: 'center'}}>Bangla</td>
<td style={{textAlign: 'center'}}>A</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/teacherprofile'>MZA</a></td>
<td style={{textAlign: 'center'}}>hgsadxasfjgcjasac</td>
<td style={{textAlign: 'center', color: 'blue'}}>Show Home Work</td>
<td style={{textAlign: 'center'}}><a style={{textDecoration: 'none'}} href='/submitdetails'>Submission Details</a></td>
<td style={{textAlign: 'center'}}>1-July-2022</td>
<td style={{textAlign: 'center'}}>20-July-2022</td>
</tr>
</tbody>
</table>
  </section>    
    </>
  )
}

export default ShowHomeWork