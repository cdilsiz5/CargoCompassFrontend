import React from 'react'
import heroShape from '../Assets/hero-shape.png'
import heroBanner from '../Assets/hero-banner.jpg'
import { Navbar } from '../Navbar/Navbar'
export const Hero = () => {
  return (
    <section className="hero" aria-label="home" id="home"
    style={{
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundImage: `url(${heroBanner})`  
    }}>
    <div className="container">
      <div className="hero-content">
        <h2 className="h1 hero-title">
        <span className="span">Lojistik</span> Dijitalde Başlar
              Dijitalde Biter
        </h2>
        <p className="hero-text">
              There are many variations of passages of worem Ipsum available, but the majority
        </p>
        <a href="#services"  className="btn-outline">View Services</a> 
        <img 
          src={heroShape}
          width="116" 
          height="116" 
          loading="lazy"
          className="hero-shape shape-1"
          alt="Hero Shape"
        />
        <img 
          src={heroShape} 
          width="116" 
          height="116" 
          loading="lazy"
          className="hero-shape shape-2"
          alt="Hero Shape"
        />
      </div>
    </div>
    <Navbar></Navbar>
  </section>
  
  )
}
