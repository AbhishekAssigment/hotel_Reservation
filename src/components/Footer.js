import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer_area">
        <div className="footer_row">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-30">
                <div className="footer_logo">
                  <NavLink className="footer_logo" to="/"><span>Ocean heaven <span className="foot_logo">Hotel</span></span></NavLink>
                </div>
                <div className="footer_social">
                  <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-facebook"></i></NavLink></li>
                  <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-twitter"></i></NavLink></li>
                  <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-google"></i></NavLink></li>
                </div>
                <div className="footer_para">
                  <p>Copyright ©|All Rights Reserved</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5">
              <div className="single-footer-caption mb-30">
                <div className="footer_title">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><NavLink to="/"><b>About Ocean heaven hotel</b></NavLink></li>
                    <li><NavLink to="/"><b>Our Best Rooms</b></NavLink></li>
                    <li><NavLink to=""><b>Our Photo Gallery</b></NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
              <div className="single-footer-caption mb-30">
                <div className="footer_title">
                  <h4>Reservations</h4>
                  <ul>
                    <li><b>Tel:</b> +91 1234567890</li>
                    <li><b>Email:</b> Sherathon@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4  col-sm-5">
              <div className="single-footer-caption mb-30">
                <div className="footer_title">
                  <h4>Our Location</h4>
                  <ul>
                    <li>4B/8, VijayNagar, Bangalore, India</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
