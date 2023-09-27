import React from 'react'
import './TeacherProfile.css'
import sir from '../../../images/profile/profile.png';

const TeacherProfile = () => {
  return (
    <div>

    <div class="container my-5 p-3 d-flex justify-content-center"> 
      <div class="card p-5">
           <div class=" image d-flex flex-column justify-content-center align-items-center"> 
              <img src={sir} height="100" width="100" />
              <span style={{fontSize: '24px', fontWeight: '700'}} class="name mt-3">Dr. Fizar Ahmed</span> 
              <span style={{fontSize: '16px', fontWeight: '400'}} class="idd my-2">Contact : 0170000000</span> 
              <span class="idd">Email : email@gmail.com</span> 
            </div>
      </div>
    </div>
        </div>
  )
}

export default TeacherProfile