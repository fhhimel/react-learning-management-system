import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        // , margin: '200px 0px'
        <div style={{ display: 'flex', justifyContent: 'center', height: "100vh" }} className='bg-danger p-5 login_root'>
           <div style={{width: '450px', height:'450px',}} class="card p-4">
              <div class="card-body login-card-body">
                <h3 style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }} className="pb-4">Sign in</h3>
                <div class="input-group mb-3">
                    <input autocomplete="off" focusid="1" id="user_id" name="user_id" type="text" class="form-control"   placeholder="User ID / Email / Phone"/>
                    {/* <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-user"></span>
                        </div>
                    </div> */}
                </div>
                <div class="input-group mb-3">
                    <input focusid="2" id="password" name="password" type="password" class="form-control" placeholder="Password"/>
                                {/* <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                        </div>
                                        </div> */}
                </div>
                <div class="">
                    
                        <button style={{width: '100%'}} focusid="3" class="btn btn-block btn-primary mb-3">Sign in 
                        </button>
                    <div class="lockscreen-footer text-center">
                       <p className='text-danger'>Login credentials is not available for front end demo. Please click on the buttons given below for logging into different panels.</p>
                                    </div>
                </div>
                <br />

                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link to='/teacher-admin' className='px-3'><button style={{width: '100%'}} focusid="3" class="btn btn-block btn-outline-danger mb-3 ">Teacher
                        </button></Link>
                <Link to='/student-admin' className='px-3'>
                <button style={{width: '100%'}} focusid="3" class="btn btn-block btn-outline-success mb-3 px-1">Student
                        </button>
                </Link>
              <Link to='/viewer-school' className='px-3'>
              <button style={{width: '100%'}} focusid="3" class="btn btn-block btn-outline-info mb-3 px-1">Administrator
                        </button>
              </Link>
                </div>
                </div>
            </div>
    </div>
    );
};

export default Login;