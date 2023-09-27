import React from 'react';
import './Attendance.css';
import profile from '../../../../images/profile/profile.png'

const Attendance = () => {

    return (
        <section>
           <div className='content container pt-4'>

            <div className='row'>
                <div className='col-md-12'>
                  <div className="card card-dark collapsed-card">
                    <div className="card-header">
         <div className='d-flex justify-content-between px-4'>
         <div>
             <h2 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold'}} class="card-title text-info py-2">Attendance</h2>
          </div>
         </div>
     </div>
     

     <div>
     <div className='row'  style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>

{/* <div className='col-2'>
   <img style={{ width: "50px" }} src={profile} alt=""/>
</div> */}
<div className='col-12 p-4 border'>
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
   <div>
      <button type="button" class="btn btn-secondary">Take Attendance</button>
   </div>
   
</div>
<div className='col-12 p-4 border  border-top-0 border-right-0 border-left-0'>
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
   <div>
      <button type="button" class="btn btn-secondary">Take Attendance</button>
   </div>
   
</div>
<div className='col-12 p-4 border  border-top-0 border-right-0 border-left-0'>
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
   <div>
      <button type="button" class="btn btn-secondary">Take Attendance</button>
   </div>
   
</div>

</div>
     </div>

</div>
</div>
</div>




</div>
<div className="card card-primary mt-5 container">


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
          <div className='container my-5'>
              <a style={{ background: "#1ABED4", color: "#fff", fontSize: "20px", display: 'flex' , justifyContent: 'center' }} type="submit" className="btn btn-block" >SUBMIT</a>
               </div>
</section>
    );
};

export default Attendance;
