import React from 'react';
import './Check.css'
import profile from '../../../images/profile/profile.png'

const Check = () => {
    // const button = document.getElementById("w-change-close");
    // const list = document.getElementById("list");
    // list.style.display = "none";
    // button.addEventListener("click", (event) => {
    //     if(list.style.display = "none"){
    //         list.style.display = "block"
    //     } else{
    //         list.style.display = "none"
    //     }
    // })
    const handlelist = () => {
        document.getElementById("list").classList.toggle("active");
    }

    return (
        <div className='content'>

            <div className='row'>
               <div className='col-md-12'>
                   <div className="card card-dark collapsed-card">
                   <div className="card-header">
                     <div className='d-flex justify-content-between px-4'>
                     <div>
                         <h3 class="card-title">Attendance</h3>
                      </div>
                   <div className="card-tools">
                    <button onClick={handlelist} id="w-change-close" type="button" className="btn btn-tool active" data-card-widget="collapse"><i  className="fas fa-plus icons" />
                       </button>
                  </div>
                     </div>
                 </div>

                <div className='card-body' id='list'>

                    <div className='row'>

                       
                       <div class={"col-sm-2 mx-auto"}>
                            <div class="form-group">
                                <label for="exampleSelect"> select Class</label>
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
                       <div class={"col-sm-2 mx-auto"}>
                            <div class="form-group">
                                <label for="exampleSelect"> select Class</label>
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
                       <div class={"col-sm-2 mx-auto"}>
                            <div class="form-group">
                                <label for="exampleSelect"> select Class</label>
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
                       <div class={"col-sm-2 mx-auto"}>
                            <div class="form-group">
                                <label for="exampleSelect"> select Class</label>
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
                       <div class={"col-sm-2 mx-auto"}>
                            <div class="form-group">
                                <label for="exampleSelect"> select Class</label>
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
                   </div>
               </div>
            
         </div>
     </div>
 </div>

 <div className="card card-primary mt-5">

    <div className="card-body" style={{ background: "#EFEFEF", height: "", padding: "0" }}>
        <div className='row'>
            <div className='col-12 text-center'>
               <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

                  <div className='col-2'>
                     <img style={{ width: "50px" }} src={profile} alt=""/>
                  </div>
                  <div className='col-8'>
                     <h5 className='ml-3' style={{ textAlign: "left" }}>Md. Siam Hasan</h5>
                     <p className='ml-3' style={{ textAlign: "left" }}>Roll: 1</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>ID: 22221130455</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>Phone: 01886396116</p>
                     
                  </div>
                  <div className='col-2'>
                    <label class="custom-control custom-switch mt-3">
                        <input type="checkbox"/>
                        <span class=""></span>
                    </label>
                  </div>
                  
               </div>
            </div>
            <div className='col-12 text-center'>
               <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

                  <div className='col-2'>
                     <img style={{ width: "50px" }} src={profile} alt=""/>
                  </div>
                  <div className='col-8'>
                     <h5 className='ml-3' style={{ textAlign: "left" }}>Md. Siam Hasan</h5>
                     <p className='ml-3' style={{ textAlign: "left" }}>Roll: 1</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>ID: 22221130455</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>Phone: 01886396116</p>
                     
                  </div>
                  <div className='col-2'>
                    <label class="custom-control custom-switch mt-3">
                        <input type="checkbox"/>
                        <span class=""></span>
                    </label>
                  </div>
                  
               </div>
            </div>
            <div className='col-12 text-center'>
               <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

                  <div className='col-2'>
                     <img style={{ width: "50px" }} src={profile} alt=""/>
                  </div>
                  <div className='col-8'>
                     <h5 className='ml-3' style={{ textAlign: "left" }}>Md. Siam Hasan</h5>
                     <p className='ml-3' style={{ textAlign: "left" }}>Roll: 1</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>ID: 22221130455</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>Phone: 01886396116</p>
                     
                  </div>
                  <div className='col-2'>
                    <label class="custom-control custom-switch mt-3">
                        <input type="checkbox"/>
                        <span class=""></span>
                    </label>
                  </div>
                  
               </div>
            </div>
            <div className='col-12 text-center'>
               <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

                  <div className='col-2'>
                     <img style={{ width: "50px" }} src={profile} alt=""/>
                  </div>
                  <div className='col-8'>
                     <h5 className='ml-3' style={{ textAlign: "left" }}>Md. Siam Hasan</h5>
                     <p className='ml-3' style={{ textAlign: "left" }}>Roll: 1</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>ID: 22221130455</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>Phone: 01886396116</p>
                     
                  </div>
                  <div className='col-2'>
                    <label class="custom-control custom-switch mt-3">
                        <input type="checkbox"/>
                        <span class=""></span>
                    </label>
                  </div>
                  
               </div>
            </div>
            <div className='col-12 text-center'>
               <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

                  <div className='col-2'>
                     <img style={{ width: "50px" }} src={profile} alt=""/>
                  </div>
                  <div className='col-8'>
                     <h5 className='ml-3' style={{ textAlign: "left" }}>Md. Siam Hasan</h5>
                     <p className='ml-3' style={{ textAlign: "left" }}>Roll: 1</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>ID: 22221130455</p>
                     <p className='ml-3' style={{ textAlign: "left" }}>Phone: 01886396116</p>
                     
                  </div>
                  <div className='col-2'>
                    <label class="custom-control custom-switch mt-3">
                        <input type="checkbox"/>
                        <span class=""></span>
                    </label>
                  </div>
                  
               </div>
            </div>
        </div>
    </div>
 </div>


         </div>
    );
};

export default Check;