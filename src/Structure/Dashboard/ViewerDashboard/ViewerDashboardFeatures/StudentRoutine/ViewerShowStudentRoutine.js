import React from 'react'

const ViewerShowStudentRoutine = () => {
  return (
     <section className='container'>
            <div className='row'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-2'>
                     <div>
                         <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title py-2"> Student Routine </h3>
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

                        <div class={"col-sm-3 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Day : </label>
                                <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">
                                   <option>Select Day</option>
                                    <option>Saturday</option>
                                    <option>Sunday</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                
                                </select>

                            </div>
                        </div>
                        <div class={"col-sm-3 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Class : </label>
                                <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">
                                    <option>Select Class</option>
                                    <option>KG</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                
                                </select>

                            </div>
                        </div>
                        <div class={"col-sm-3 mx-auto p-2"}>
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
                        <div class={"col-sm-3 mx-auto p-2"}>
                            <div class="form-group">
                                <label className='pb-2' for="exampleSelect">Teacher Initial : </label>
                                <select style={{border: '1px solid blue'}} class="form-control" id="class" name="class">
                                   <option>Select Initial</option>
                                    <option>MKZ</option>
                                    <option>MSA</option>
                           
                                
                                </select>

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

           <div className='mt-5'>
        <div className="card card-primary mt-2">


<div className="card-body" style={{ background: "#EFEFEF", height: "", padding: "0" }}>
<div className='row'>
<div className='col-12 text-center'>
   <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

      {/* <div className='col-2'>
         <img style={{ width: "50px" }} src={profile} alt=""/>
      </div> */}
      <div className='col-12'>
         <div style={{display: 'flex'}}>
            <h5 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Sunday</h5>
            
         </div>
         <div style={{display: 'flex'}}>
          <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>First Period</h6>
            <h5 className='mx-2 text-warning' style={{ textAlign: "left",  }}> || </h5>
           <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>10:00 AM - 11:00 PM</h6>
          </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Subject : English</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Class : Seven</h6>
         </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Section : A</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99'  }}>Room : 110B</h6>
         </div>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Teacher Initial : AKM</h6>
         
      </div>
      
   </div>
   <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

      {/* <div className='col-2'>
         <img style={{ width: "50px" }} src={profile} alt=""/>
      </div> */}
      <div className='col-12'>
         <div style={{display: 'flex'}}>
            <h5 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Sunday</h5>
   
         </div>
         <div style={{display: 'flex'}}>
          <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>First Period</h6>
            <h5 className='mx-2 text-warning' style={{ textAlign: "left",  }}> || </h5>
           <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>10:00 AM - 11:00 PM</h6>
          </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Subject : English</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Class : Seven</h6>
         </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Section : A</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99'  }}>Room : 110B</h6>
         </div>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Teacher Initial : AKM</h6>
         
      </div>
      
   </div>
   <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

      {/* <div className='col-2'>
         <img style={{ width: "50px" }} src={profile} alt=""/>
      </div> */}
      <div className='col-12'>
         <div style={{display: 'flex'}}>
            <h5 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Sunday</h5>
         
         </div>
         <div style={{display: 'flex'}}>
          <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>First Period</h6>
            <h5 className='mx-2 text-warning' style={{ textAlign: "left",  }}> || </h5>
           <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>10:00 AM - 11:00 PM</h6>
          </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Subject : English</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Class : Seven</h6>
         </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Section : A</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99'  }}>Room : 110B</h6>
         </div>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Teacher Initial : AKM</h6>
         
      </div>
      
   </div>
   <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

      {/* <div className='col-2'>
         <img style={{ width: "50px" }} src={profile} alt=""/>
      </div> */}
      <div className='col-12'>
         <div style={{display: 'flex'}}>
            <h5 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Sunday</h5>
            
         </div>
         <div style={{display: 'flex'}}>
          <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>First Period</h6>
            <h5 className='mx-2 text-warning' style={{ textAlign: "left",  }}> || </h5>
           <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>10:00 AM - 11:00 PM</h6>
          </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Subject : English</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Class : Seven</h6>
         </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Section : A</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99'  }}>Room : 110B</h6>
         </div>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Teacher Initial : AKM</h6>
         
      </div>
      
   </div>
   <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

      {/* <div className='col-2'>
         <img style={{ width: "50px" }} src={profile} alt=""/>
      </div> */}
      <div className='col-12'>
         <div style={{display: 'flex'}}>
            <h5 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Sunday</h5>
            
         </div>
         <div style={{display: 'flex'}}>
          <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>First Period</h6>
            <h5 className='mx-2 text-warning' style={{ textAlign: "left",  }}> || </h5>
           <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>10:00 AM - 11:00 PM</h6>
          </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Subject : English</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Class : Seven</h6>
         </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Section : A</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99'  }}>Room : 110B</h6>
         </div>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Teacher Initial : AKM</h6>
         
      </div>
      
   </div>
   <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

      {/* <div className='col-2'>
         <img style={{ width: "50px" }} src={profile} alt=""/>
      </div> */}
      <div className='col-12'>
         <div style={{display: 'flex'}}>
            <h5 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Sunday</h5>
           
         </div>
         <div style={{display: 'flex'}}>
          <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>First Period</h6>
            <h5 className='mx-2 text-warning' style={{ textAlign: "left",  }}> || </h5>
           <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>10:00 AM - 11:00 PM</h6>
          </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Subject : English</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Class : Seven</h6>
         </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Section : A</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99'  }}>Room : 110B</h6>
         </div>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Teacher Initial : AKM</h6>
         
      </div>
      
   </div>
   <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

      {/* <div className='col-2'>
         <img style={{ width: "50px" }} src={profile} alt=""/>
      </div> */}
      <div className='col-12'>
         <div style={{display: 'flex'}}>
            <h5 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Sunday</h5>
           
         </div>
         <div style={{display: 'flex'}}>
          <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>First Period</h6>
            <h5 className='mx-2 text-warning' style={{ textAlign: "left",  }}> || </h5>
           <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>10:00 AM - 11:00 PM</h6>
          </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Subject : English</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left" , color: '#00CC99' }}>Class : Seven</h6>
         </div>
         <div style={{display: 'flex'}}>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Section : A</h6>
         <h5 className='mx-2 text-warning' style={{ textAlign: "left" }}> || </h5>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99'  }}>Room : 110B</h6>
         </div>
         <h6 className='' style={{ textAlign: "left", color: '#00CC99' }}>Teacher Initial : AKM</h6>
         
      </div>
      
   </div>
</div>
</div>
</div>
</div>
        </div>


     </section>
  )
}

export default ViewerShowStudentRoutine