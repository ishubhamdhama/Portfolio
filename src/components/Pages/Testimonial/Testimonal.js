import React from 'react';
import Navbar from '../../Header/Navbar';
import './Testimonial.css';

export default function Testimonial() {
  return (
    <>
      <Navbar />
      <div className='testimonial'>
      <div className="testi">
        <p>What Think Client About Me ?</p>
        <h2>Testimonial</h2>
      </div>
      <div className="testi-rev">
        <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" style={{ width: '150px' }} />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">Maria Kate</h5>
                  <p className='profession'>Photographer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                    doloremque.
                  </p>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="far fa-star fa-lg"></i></li>
              </ul>
            </div>
            <div className="carousel-item">
              <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{ width: '150px' }} />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">John Doe</h5>
                  <p className='profession'>Web Developer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis temporibus autem nobis asperiores fugiat earum consectetur aliquid tempora voluptas, id harum? Voluptates, earum? Inventore!
                  </p>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star-half-alt fa-lg"></i></li>
              </ul>
            </div>
            <div className="carousel-item">
              <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{ width: '150px' }} />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p className='profession'>UX Designer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                    doloremque.
                  </p>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
                <li><i className="fas fa-star fa-lg"></i></li>
              </ul>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='footer'>
            <hr />
            <div className='footer-content'>
                <div className='para'>
                <p>Copyright 2023 &copy; DevCRUD</p>
                </div>
                <div className='social-handle'>
                    <a href="/"><i className="fa-brands fa-facebook fa-xl"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram fa-xl" style={{color:' #ea591a'}}></i></a>
                    <a href="/"><i className="fa-brands fa-google-plus-g fa-xl" style={{color:" #d44d40"}}></i></a>
                    <a href="/"><i className="fa-brands fa-pinterest fa-xl" style={{color: '#b7081b'}}></i></a>
                    <a href="/"><i className="fa-brands fa-twitter fa-xl" style={{color: '#1da1f2'}}></i></a>
                </div>
            </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
