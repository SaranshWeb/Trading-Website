import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-3'>
                    Invest in everything
                </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <a 
                    href='http://localhost:3000' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='p-2 btn btn-primary fs-10' 
                    style={{ display: 'inline-block', width: "20%", margin: "0 auto" }}
                >
                    Signup now
                </a>                
            </div>
        </div>
    );
}

export default Hero;
