import React from 'react';
import HeaderImg from '../imgs/header1.jpg';
import Navbar from '../Header/Navbar';
import Typed from './Typed';
import './main.css';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <div>
                <Navbar/>
                <div className='container1'>
                    <img src={HeaderImg} alt="image1" />

                    {/* -------------------------social media icons-------------------------  */}
                    <div className='social-icons'>
                        <a href='/'><i class="fa-brands fa-facebook fa-2xl" style={{ color: '#4d62a9' }}></i></a>
                        <a href='/'><i class="fa-brands fa-instagram fa-2xl" style={{ color: '#4d62a9' }}></i></a>
                        <a href='/'><i class="fa-brands fa-twitter fa-2xl" style={{ color: '#4d62a9' }}></i></a>
                        <a href='/'><i class="fa-brands fa-linkedin fa-2xl" style={{ color: '#4d62a9' }}></i></a>
                        <a href='/'><i class="fa-brands fa-github fa-2xl" style={{ color: '#4d62a9' }}></i></a>
                    </div>

                    {/* -------------------------text and headings--------------------------- */}
                    <div className='centered'>
                        <h2>Hi!</h2>
                        <h1>I am Shubham<br />Dhama</h1>
                        <Typed/>
                        <Link to="/portfolio"><button>Visit My Work</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}


