import React from 'react';
import Footers from '../../layouts/Footers';
import Navbars from '../../layouts/Navbars';

const HomePage = () => {

  return (
    <>
      <div>
        <Navbars />
      </div>
      <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./images/pic6.jpg" class="d-block w-100" alt="..."  style={{height:550}}/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Events</h5>
                  <p>All different events perform on different venue.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src="./images/pic8.jpg" class="d-block w-100" alt="..." style={{height:550}}/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Singing Night</h5>
                  <p>Enjoy the beat.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src="./images/pic9.jpg" class="d-block w-100" alt="..." style={{height:550}}/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Family Time</h5>
                  <p>Family is like a fudge.</p>
                </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footers />
    </>
  )
}

export default HomePage;