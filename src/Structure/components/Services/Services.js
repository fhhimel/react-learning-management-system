import React from 'react'
import './Services.css'
import web from '../../images/servicelogo/web.jpg';
import design from '../../images/servicelogo/design.jpg';
import digital from '../../images/servicelogo/digital.jpg';
import iot from '../../images/servicelogo/iot.jpg';
import data from '../../images/servicelogo/data.jpg';
import machine from '../../images/servicelogo/machine.jpg';


const Services = () => {
  return (
    
    <section id='section' class="container mt-3">
          <p style={{display: 'flex', justifyContent: 'center', fontSize: '32px', fontWeight:'bold', textTransform: 'uppercase', marginBottom: '20px', color: '#778899' }} className="contactus">Our Services</p>
    <div class="row pt-4 mt-30">
        <div  class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a style={{border: '1px solid orange'}} class="card" href="#">
                <div style={{width: '90px', height: '90px', marginTop: '25px'}} class="box-shadow bg-white rounded-circle mx-auto text-center">
                  {/* <i class="fa fa-address-book fa-3x head-icon"></i> */}
                  <img src={design} alt=""/>
                </div>
                <div class="card-body text-center">
                   <h3 class="card-title pt-1">Front-End Development</h3>
                   <p class="card-text text-sm">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                   </p>
                   <span class="text-sm text-uppercase font-weight-bold">Learn More <i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a style={{border: '1px solid orange'}} class="card" href="#">
                <div style={{width: '90px', height: '90px', marginTop: '25px'}} class="box-shadow bg-white rounded-circle mx-auto text-center">
                <img src={web} alt=""/>
                </div>
                <div class="card-body text-center">
                   <h3 class="card-title pt-1">Software and Web Development</h3>
                   <p class="card-text text-sm">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                   </p>
                   <span class="text-sm text-uppercase font-weight-bold">Learn More <i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a style={{border: '1px solid orange'}} class="card" href="#">
                <div style={{width: '90px', height: '90px', marginTop: '25px'}} class="box-shadow bg-white rounded-circle mx-auto text-center">
                  <img src={digital} alt=""/>
                </div>
                <div class="card-body text-center">
                   <h3 class="card-title pt-1">Digital Marketing</h3>
                   <p class="card-text text-sm">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                   </p>
                   <span class="text-sm text-uppercase font-weight-bold">Learn More <i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a style={{border: '1px solid orange'}} class="card" href="#">
                <div style={{width: '90px', height: '90px', marginTop: '25px'}} class="box-shadow bg-white rounded-circle mx-auto text-center">
                <img src={iot} alt=""/>
                </div>
                <div class="card-body text-center">
                   <h3 class="card-title pt-1">IoT</h3>
                   <p class="card-text text-sm">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                   </p>
                   <span class="text-sm text-uppercase font-weight-bold">Learn More <i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a style={{border: '1px solid orange'}} class="card" href="#">
                <div style={{width: '90px', height: '90px', marginTop: '25px'}} class="box-shadow bg-white rounded-circle mx-auto text-center">
                <img src={data} alt=""/>
                </div>
                <div class="card-body text-center">
                   <h3 class="card-title pt-1">Data Science</h3>
                   <p class="card-text text-sm">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                   </p>
                   <span class="text-sm text-uppercase font-weight-bold">Learn More <i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a style={{border: '1px solid orange'}} class="card" href="#">
                <div style={{width: '90px', height: '90px', marginTop: '25px'}} class="box-shadow bg-white rounded-circle mx-auto text-center">
                  <img src={machine} alt=""/>
                </div>
                <div class="card-body text-center">
                   <h3 class="card-title pt-1">Machine Learning</h3>
                   <p class="card-text text-sm">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                   </p>
                   <span class="text-sm text-uppercase font-weight-bold">Learn More <i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        {/* <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-user-circle-o fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Web &amp; UI Design</h3>
                    <p class="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-address-book fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Front-End Development</h3>
                    <p class="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-car fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Back-End Development</h3>
                    <p class="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-camera fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Usability Testing</h3>
                    <p class="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-image fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">SEO Optimization</h3>
                    <p class="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div> */}
    </div>
</section>
  )
}

export default Services