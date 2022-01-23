import React, { Component } from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1> <span>Vootu </span> is Efficency First.</h1>
            <p>Vootu is the Solution to Eliminate Electricity Waste.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started &gt;</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer 
                <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}


export default HeroSection 