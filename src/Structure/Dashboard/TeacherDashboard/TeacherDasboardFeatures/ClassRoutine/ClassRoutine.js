import React from 'react';

const ClassRoutine = () => {
    return (
        <div
        class="content-wrapper"
        style={{
            marginBottom: "50px"
        }}>

        <section class="content-header">

        </section>

        <section class="content">
            <div class="row">

                <div class="col-md-12">

                    <div className="card card-dark collapsed-card">
                        <div className="card-header">
                            <h3 class="card-title">Attendance</h3>
                            <div className="card-tools">
                                <button id="w-change-close" type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                </button>
                            </div>
                        </div>
                        <div class="card-body">

                            <div className='row'>


                                <div class={"col-sm-" + 2}>
                                    <div class="form-group">
                                        <label for="exampleSelect"> select Class</label>
                                        <select class="form-control" id="class" value={this.state.class} name="class" onClick={this.selectRefresh} onChange={this.onchg}>

                                            <option >{"<-- Select Class -->"}</option>
                                            {this.state.classOption}
                                        </select>
                                    </div>
                                </div>

                                <div class={"col-sm-" + 2}>
                                    <div class="form-group">
                                        <label for="exampleSelect"> select Section</label>
                                        <select class="form-control" id="section" name="section" value={this.state.section} onClick={this.selectRefresh}  onChange={this.onchg}>
                                            <option >{"<-- Select Section -->"}</option>
                                            {this.state.sectionOption}
                                        </select>
                                    </div>
                                </div>

                                <div class={"col-sm-" + 2}>
                                    <div class="form-group">
                                        <label for="exampleSelect"> select Session</label>
                                        <select class="form-control" id="session" name="session" value={this.state.session} onClick={this.selectRefresh}  onChange={this.onchg}>
                                            <option >{"<-- Select Session -->"}</option>
                                            {this.state.sessionOption}
                                        </select>
                                    </div>
                                </div>

                                <div class={"col-sm-" + 2}>
                                    <div class="form-group">
                                        <label for="exampleSelect"> select Subject</label>
                                        <select class="form-control" id="subject" name="subject" value={this.state.subject} onClick={this.selectRefresh}  onChange={this.onchg}>
                                            <option >{"<-- Select Session -->"}</option>
                                            {this.state.subjectOption}
                                        </select>
                                    </div>
                                </div>

                                <div class={"col-sm-" + 2}>
                                    <div class="form-group">
                                        <label for="exampleSelect"> select Date</label>
                                        <input type="date" class="form-control" id="date" name="date" value={this.state.date} onChange={this.onchg}>

                                        </input>
                                    </div>
                                </div>



                                {this.state.submitEnable == 1
                                    ? <div class={"col-sm-" + 2}>
                                        <div class="form-group">
                                            <label for="exampleSelect"> &nbsp;&nbsp;</label>
                                            <a to={"/mUIatdS/" + this.state.class + "/" + this.state.section + "/" + this.state.session + "/" + this.state.date + "/" + this.state.subject} class="form-control btn btn-outline-info">View Details</a>
                                        </div>
                                    </div>
                                    : <></>}



                            </div>


                        </div>

                        <div class="card-footer">




                            <div class="row">
                                <div class="col-sm-12">



                                </div>
                            </div>



                        </div>

                    </div>

                </div>



            </div>
            <div>
                {/* <h1>Hey</h1>
    <img style={{width: "50px"}} src={logo} alt="Logo" /> */}

                <div className="card card-primary">

                    <div className="card-body" style={{ background: "#EFEFEF", height: "", padding: "0" }}>

                        <div className='row'>
                            <div className='col-12 text-center'>

                                <div >
                                    {this.state.stdInfo.map((user) => (
                                        <div className='row' style={{ padding: "20px", margin: "10px", background: "#fff", borderRadius: "5px" }}>
                                            <div className='col-2'>
                                                <img style={{ width: "50px" }} src={user.gender} alt="profile" />
                                            </div>
                                            <div className='col-8'>
                                                <h5 className='ml-3' style={{ textAlign: "left" }}>{user.name}</h5>
                                                <p className='ml-3' style={{ textAlign: "left" }}>Roll:{" " + user.roll}</p>
                                                <p className='ml-3' style={{ textAlign: "left" }}>ID:{" " + user.std_id}</p>
                                            </div>
                                            <div className='col-2'>

                                                <div className="custom-control custom-switch mt-3">
                                                    {user.atd_status == 1 ? <input checked onChange={this.onchgChk} type="checkbox" className="custom-control-input" id={user.sl} name={user.sl} /> : <input onChange={this.onchgChk} type="checkbox" className="custom-control-input" id={user.sl} name={user.sl} />}

                                                    <label className="custom-control-label" htmlFor={user.sl}></label>
                                                </div>


                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                        {this.state.submitEnable == 10
                            ? <div className='row' style={{ padding: "10px", margin: "2px", marginBottom: "20px" }}>
                                <div className='col-12'>
                                    <div className='mt-2'>
                                        <a style={{ background: "#1ABED4", color: "#fff", fontSize: "20px" }} type="submit" className="btn btn-block" href='admindashboard' >SUBMIT</a>
                                    </div>
                                </div>

                            </div>
                            : <></>}



                    </div>
                    {/* /.card-body */}
                </div>



            </div>
        </section>



    </div>


























        //  <div className='card mt-6'>
        //     <div className=" card-widget widget-user">
        //         <div className="widget-user-header text-white bg-secondary bg-gradient" style={{  backgroundSize: '100%', height:'120px' }}>
        //             <h3 style={{ color: 'black', textAlign: 'right', paddingRight:'50px' }} className="widget-user-username text-white">Nusrat Jahan Nisha</h3>
        //             <h5 style={{ color: 'black', textAlign: 'right', paddingRight:'50px' }} className="widget-user-desc text-right text-white">Designation : Vice-Principal Department : Faculty</h5>
        //         </div>
        //         <div className="widget-user-image">
        //             <img style={{}} className="img-circle mx-auto" src="" alt="User Avatar" />
        //          </div>

        //         </div>
                               
        //     </div>
    
    );
};

export default ClassRoutine;


// background: 'url("https://media.istockphoto.com/vectors/education-background-vector-id485117881?b=1&k=20&m=485117881&s=612x612&w=0&h=yShlvaRXf8FSWMDBB_yciLen4l6UlIEW5cM0W26PJFo=") center center no-repeat ',