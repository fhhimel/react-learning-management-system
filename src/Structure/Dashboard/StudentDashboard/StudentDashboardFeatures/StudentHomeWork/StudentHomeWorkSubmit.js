import React from 'react'

const StudentHomeWorkSubmit = () => {
  return (
    <div className='container'>
    <div className='row mt-4'>
       <div className='-md-12'>
           <div className="">
           <div className="">
             <div className='d-flex justify-content-between px-4'>
             <div>
                 <h3 style={{color: 'LightSeaGreen', fontSize: '25px', fontWeight: '700'}} class="card-title pt-2">Introducing Self</h3>
                 <h5 style={{color: 'LightSeaGreen', fontSize: '18px', fontWeight: '400'}} class="card-title pt-2">Bangla</h5>
              </div>
         
             </div>
         </div>

    <div className='container'>
        <div className="mt-2">
         <div className="" style={{ background: "#EFEFEF", height: "", padding: "0" }}>
          <div className='row'>
            <div className='col-12 text-center'>
            <div className='row' style={{ background: "#fff", }}>
            
<div className='col-12'>
<div>
    <h5 style={{ textAlign: "left", color: 'black' }} className="py-3">Write a Paragraph about your self</h5>
</div>
 <div style={{display: 'flex', alignItem: 'center' }}>
    <i style={{color: 'black'}} class="fa-solid fa-person pt-1"></i>
    <p className='px-3' style={{ textAlign: "left", color: 'black' }}> Mst. Afroza Zahan</p>
  </div>
 <div style={{display: 'flex'}}>
 <i style={{color: 'black'}} class="fa-solid fa-clock  pt-1"></i>
 <p className='mx-2' style={{ textAlign: "left", color: 'red' }}> Last Date: 17-Feb-22 </p>
 <p className='' style={{ textAlign: "left" , color: 'black' }}>7 days left</p>
 </div>
<div>
 <p className='pt-4' style={{ textAlign: "left", color: 'black', fontSize: '24px', fontWeight: '500', color: 'blue' }}>Show Home Work Attachment File</p>
</div>
  <div style={{border: '1px solid red'}} className='my-5'>
      
         <div class="form-group p-5">
            <label style={{fontSize: '20px', fontWeight: '700'}} className='pb-3' for="exampleInputEmail1">Assignment Attachment : </label>
            <input style={{border: '1px solid blue', padding: '5px 10px'}} type="file" class="form-control" id="avatar" name="avatar"/>
          </div>
          <div class={"mx-auto"}>
             <div class="form-group pb-5">
              <button style={{fontSize: '24px', width: '50%'}} type="button" class="btn btn-secondary form-control">Submit</button>
           </div>
   </div>

          
    
  </div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>

     
    
 </div>
</div>
   </div>
</div>
  )
}

export default StudentHomeWorkSubmit