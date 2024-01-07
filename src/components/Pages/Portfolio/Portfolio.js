import React from 'react';
import './Portfolio.css';
import Navbar from '../../Header/Navbar';
import movieimage from '../../imgs/Screenshot 2024-01-07 130716.png';

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className='portfolio__main'>
        <div className="portfolio-content">
          <h1 className='text-center'>My Work</h1>
        </div>
        <hr />
        <div className='movie__app'>
          <div className='movie__img' data-aos="flip-up" >
            <a href="https://movieflip.netlify.app/"><img src={movieimage} alt="" /></a>
          </div>
          <div className='movie__content'>
            <h2 className='text-center'>Movie Finder App</h2>
            <div>
              <ul data-aos="fade-right">
                <li>Implemented a user-friendly search feature allowing users to find movies by title</li>
                <li> Integrated APIs such as TMDB or OMDB to access a vast collection of movies, ensuring up-to-date information including ratings, reviews, and synopses.</li>
                <li>Designed a clean and minimalist UI for effortless navigation, presenting movie details, trailers, and user ratings in an appealing manner.</li>
                <li>Implemented error handling mechanisms to provide users with informative messages in case of search failures or unavailable data.</li>
                <li>Maintained clean and well-documented code, following best practices in code organization and structure for ease of maintenance and future development.</li>
              </ul>
            </div>
          </div>
        </div>
        <hr/>
        <div className='portfolio__footer'>
          <div className='footer-content2'>
            <div className='para2'>
              <p>Copyright 2023 &copy; DevCRUD</p>
            </div>
            <div className='social-handle2'>
              <a href="/"><i className="fa-brands fa-facebook fa-xl"></i></a>
              <a href="/"><i className="fa-brands fa-instagram fa-xl" style={{ color: ' #ea591a' }}></i></a>
              <a href="/"><i className="fa-brands fa-google-plus-g fa-xl" style={{ color: " #d44d40" }}></i></a>
              <a href="/"><i className="fa-brands fa-pinterest fa-xl" style={{ color: '#b7081b' }}></i></a>
              <a href="/"><i className="fa-brands fa-twitter fa-xl" style={{ color: '#1da1f2' }}></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
