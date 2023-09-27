import React from 'react'
import './NewsLetter.css';

const NewsLetter = () => {
  return (
        <div id='footer'>
    <div class="footer-newsletter">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h4>Join Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form action="" method="post">
            <input type="email" name="email"/><input type="submit" value="Subscribe"/>
          </form>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default NewsLetter