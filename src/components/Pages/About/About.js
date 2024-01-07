import React from 'react';
import Navbar from '../../Header/Navbar';
import './About.css';
import Avtar2 from '../../imgs/man with laptop.jpg';
import AnimatedCounter from './AnimatedCounter';
import DownloadFile from 'C:/Users/Shubham/OneDrive/Desktop/ReactProjects/portfolio/Frontend/src/components/Shubham Dhama (1).pdf';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='main-box'>
        <div className='hello-data'>
          <h1 className='hello'>Hello!</h1>
          <p className='self'>I'm a creative ​multitalented Full Stack Developer</p>
        </div>
        <div className='child-box'>
          {/* -----------------for Details------------------ */}

          <div className='box1'>
            <h6>NAME</h6>
            <p>Shubham Dhama</p>

            <h6>BIRTHDAY</h6>
            <p>02.01.2001</p>

            <h6>ROLE</h6>
            <p>Full Stack Developer</p>

            <h6>EMAIL</h6>
            <p>sdhama380@gmail.com</p>

            <h6>PHONE</h6>
            <p>(+91) 7017978857</p>

            <h6>LOCATION</h6>
            <p>Delhi,India</p>

            <h6>INTEREST</h6>
            <p>Books,Games,Music</p>

            <h6>Social</h6>
            <p>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook fa-lg" style={{ color: '#ffffff' }}></i></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-lg" style={{ color: '#ffffff' }}></i></a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter fa-lg" style={{ color: '#ffffff' }}></i></a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-lg" style={{ color: '#ffffff' }}></i></a>
            </p>

            <h4>Image from Unsplash</h4>
          </div>

          {/* ----------------for images and all------------ */}
          <div className='box2'>

            <img src={Avtar2} alt="" />
            <div className="animations">
              <div className='row'>
                <div className='small-box1'>
                  <p>AWARDS WON</p>
                  <AnimatedCounter initialValue={0} finalValue={20} className="custom-counter" />
                </div>

                <div className='small-box2'>
                  <p>EXPERIENCE</p>
                  <AnimatedCounter initialValue={0} finalValue={15} className="custom-counter" />
                </div>
              </div>
              <div className='row'>
                <div className='small-box3'>
                  <p>CLIENTS</p>
                  <AnimatedCounter initialValue={0} finalValue={255} className="custom-counter" />
                </div>

                <div className='small-box4'>
                  <p>PROJECTS</p>
                  <AnimatedCounter initialValue={0} finalValue={150} className="custom-counter" />
                </div>
              </div>
            </div>
            <div className="buttn">
              <button className='download-btn'><a href={DownloadFile} download="CV Downloaded"  style={{ color: "#ffffff",textDecoration:"none" }}>DOWNLOAD CV </a><i className="fa-sharp fa-solid fa-download"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;
