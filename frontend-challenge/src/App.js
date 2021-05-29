/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import "./App.css";
import GetData from "./GetData";
import $ from 'jquery'

function Home() {
  return (
    <>
    <section className="main-home" id="home">
      <div className="home-page-photo"></div> 
      <div className="home__header-content">
        <div id="main-home-carousel" className="owl-carousel">
          <div>
            <h1 className="intro-title">Sesam.io frontend challenge</h1>
            <p className="intro-text"> <br/> </p>
            <a className="btn btn-custom" href="#people">List of People</a>

          </div>

          <div>
            <h1 className="intro-title">About Me</h1>
            <p className="intro-text"><br/></p>
            <a className="btn btn-custom" href="#footer">Let's go</a>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#home">Sesam.io</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#home">Home</a></li>
            <li><a href="#people">People</a></li>
            <li><a href="#footer">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

function Msg() {
  return (
    <>
    <section className="twitter_tweet parallax" id="twitter_tweet" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div id="testi-carousel" className="owl-carousel owl-spaced">
              <div>
                <i className="fa"></i>
                <h5>
                  We are data professionals!
                </h5>
                <p>- Sesam.io</p>
              </div>
              <div>
                <i className="fa"></i>
                <h5>
                  Cloud is the future of the web!
                </h5>
                <p>- Sesam.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

function Footer() {
  return (
    <>
    <footer id="footer">    
      <div className="footer-widgets-wrap">
        <div className="container text-center">    
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="footer-content">
                <h4>KEEP IN TOUCH WITH THE DEVELOPER</h4>
                <div className="footer-socials">
                  <a href="https://www.facebook.com/ifarshgar"><i className="fa fa-facebook"></i></a>
                  <a href="https://www.instagram.com/ifarshgar/"><i className="fa fa-instagram"></i></a>
                  <a href="https://twitter.com/ifarshgar"><i className="fa fa-twitter"></i></a>
                  <a href="https://github.com/ifarshgar"><i className="fa fa-github"></i></a>
                </div>
              </div> 
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="footer-content">
                <h4>ADDRESS</h4>
                <p>Sørkedalsveien 8,0369 Oslo info@sesam.io<br/></p>
                <p>+47 21404150<br/>
                <a href="#">www.sesam.io</a><br/>
                info@sesam.io</p>
              </div> 
            </div> 
          </div> 
        </div>
      </div>
      <div className="footer-bottom text-center"> 
        <p>©2021 Sesam.io <br/><a href="http://ifarshgar.ir">Dev: Abdolrahman Farshgar</a></p>
      </div>
    </footer>
    
    <a href="#" className="back-to-top"> <i className="fa fa-chevron-up"> </i> </a>
    </>
  )
}

function App() {
  // SmoothScroll
  const smoothScroll = document.createElement("script");    
  smoothScroll.async = true;    
  smoothScroll.src = "./js/SmoothScroll.js";

  $(".loader").delay(300).fadeOut();
  $(".animationload").delay(600).fadeOut("slow");
  
  return (
    <Fragment>
      <Navbar />
      <Home />
      <GetData />
      <Msg />
      <Footer />
    </Fragment>
  );
}

export default App;
