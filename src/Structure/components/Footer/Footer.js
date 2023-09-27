import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div>
    <div class="footer-top">
  <div style={{padding: '60px 0px'}} class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h3  style={{ padding: '14px 0px' , color: '#37517e' , fontSize: '28px', lineHeight: '1px', fontWeight: '600px'}}>Company Name.</h3>
        <p style={{ textDecoration: 'none', color: '#777777', lineHeight: '24px', fontSize: '14px', padding: '10px 0px' }}>1301 s Scott street, ARLINGTON,Virginia 22204,USA <br/>
        <strong >Phone:</strong> +1 5589 55488 55 <br/> 
        <strong>Email:</strong> info@example.com<br></br>
        </p>
       
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4 style={{padding: '14px 0px', color: '#37517e',  fontSize: '20px', lineHeight: '1px', fontWeight: '600px', paddingLeft: '30px'}}>Useful Links</h4>
        <ul>
          <li style={{padding: '10px 0px', listStyle: 'none' ,}}> <a style={{ textDecoration: 'none', color: '#777777' }} href="#">Home</a></li>
          <li style={{padding: '10px 0px', listStyle: 'none'}} ><a style={{ textDecoration: 'none', color: '#777777' }} href="#">About us</a></li>
          <li style={{padding: '10px 0px', listStyle: 'none'}}><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: 'none', color: '#777777' }} href="#">Services</a></li>
          <li style={{padding: '10px 0px', listStyle: 'none'}}><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: 'none', color: '#777777' }} href="#">Terms of service</a></li>
          <li style={{padding: '10px 0px', listStyle: 'none'}}><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: 'none', color: '#777777' }} href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4 style={{padding: '14px 0px', color: '#37517e',  fontSize: '20px', lineHeight: '1px', fontWeight: '600px', paddingLeft: '30px'}}>Our Services</h4>
        <ul>
          <li style={{padding: '10px 0px', listStyle: 'none'}}><i class="bx bx-chevron-right py-4"></i> <a style={{ textDecoration: 'none', color: '#777777', }} href="#">Web Design</a></li>
          <li style={{padding: '10px 0px', listStyle: 'none'}}><i class="bx bx-chevron-right py-4"></i> <a style={{ textDecoration: 'none', color: '#777777', paddingBottom: '12px' }} href="#">Web Development</a></li>
          <li style={{padding: '10px 0px', listStyle: 'none'}}><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: 'none', color: '#777777' }} href="#">Product Management</a></li>
          <li style={{padding: '10px 0px', listStyle: 'none'}}><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: 'none', color: '#777777' }} href="#">Marketing</a></li>
          <li style={{padding: '10px 0px', listStyle: 'none'}}><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: 'none', color: '#777777' }} href="#">Graphic Design</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4  style={{padding: '14px 0px', color: '#37517e',  fontSize: '20px', lineHeight: '1px', fontWeight: '600px'}}>Our Social Networks</h4>
        <p style={{padding: '10px 0px'}}>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
        <div class="social-links mt-3">
          <a href="#" class="twitter mx-2"><i style={{fontSize: '25px'}} class="fa-brands fa-twitter"></i></a>
          <a href="#" class="facebook mx-2"><i style={{fontSize: '25px'}} class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="instagram mx-2"><i style={{fontSize: '25px'}} class="fa-brands fa-instagram"></i></a>
          <a href="#" class="google-plus mx-2"><i style={{fontSize: '25px'}} class="fa-brands fa-google"></i></a>
          <a href="#" class="linkedin mx-2"><i style={{fontSize: '25px'}} class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div class=" footer-bottom clearfix">
  <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#37517e', fontSize: '14px', padding: '20px 0px', color: 'white' }} class="copyright">
    Copyright Section
  </div>

</div>
</div>
  )
}

export default Footer