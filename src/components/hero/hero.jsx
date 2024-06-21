/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import heroImage from "../../assets/images/big.jpg";
import aboutImage from "../../assets/images/hotel.jpg";
import contactImage from "../../assets/images/contact.png";
import "./hero.css";
import Footer from "../common/footer";
import serviceImage from "../../assets/images/bed.jpg"
import Header from "../common/header";
// import Dashboard from "../dashboard/dashboard";

const HeroPage = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="content">
          <h1>Residential and Non-Residential Allocation System</h1>
          <p>Book your rooms and events here</p>
          <button onClick={
            () => {
              window.location.href = "../dashboard/dashboard";
            }
          } >Get Started</button>
        </div>
        <div className="Hero_image">
          <img src={heroImage} alt="Hero_Image" />
        </div>
      </section>
      <section className="about">
        <div className="content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          </p>
        </div>
        <div className="image">
          <img src={aboutImage} alt="Hero_Image" />
        </div>
      </section>

      <section className="service py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card service-card">
                <img
                  src={serviceImage}
                  className="card-img-top"
                  alt="Image1"
                />
                <div className="card-body">
                  <h5 className="card-title">Service 1</h5>
                  <p className="card-text">Brief description of Service 1.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card service-card">
                <img
                  src="path/to/image2.jpg"
                  className="card-img-top"
                  alt="Image2"
                />
                <div className="card-body">
                  <h5 className="card-title">Service 2</h5>
                  <p className="card-text">Brief description of Service 2.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card service-card">
                <img
                  src="path/to/image2.jpg"
                  className="card-img-top"
                  alt="Image3"
                />
                <div className="card-body">
                  <h5 className="card-title">Service 2</h5>
                  <p className="card-text">Brief description of Service 2.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card service-card">
                <img
                  src="path/to/image2.jpg"
                  className="card-img-top"
                  alt="Image4"
                />
                <div className="card-body">
                  <h5 className="card-title">Service 2</h5>
                  <p className="card-text">Brief description of Service 2.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card service-card">
                <img
                  src="path/to/image2.jpg"
                  className="card-img-top"
                  alt="Image5"
                />
                <div className="card-body">
                  <h5 className="card-title">Service 2</h5>
                  <p className="card-text">Brief description of Service 2.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <iframe
          src="https://www.google.com/maps/place/University+of+Mines+and+Technology/@5.2980343,-2.0034982,17.86z/data=!4m6!3m5!1s0xfdd6e0e44a4c71b:0x370f8ff00a9cf057!8m2!3d5.2984262!4d-2.0012774!16s%2Fm%2F02pygf_?authuser=0&entry=ttu"
          frameborder="0"
        ></iframe>
      </section>
      <section class="contact" id="contact">

  <h2 class="heading"><i class="fas fa-headset"></i> Get in <span>Touch</span></h2>

  <div class="container">
    <div class="content">
      <div class="image-box">
        <img draggable="false" src={contactImage} alt=""/>
      </div>
    <form id="contact-form">

      <div class="form-group">
        <div class="field">
          <input type="text" name="name" placeholder="Name" required />
          <i class='fas fa-user'></i>
        </div>
        <div class="field">
          <input type="text" name="email" placeholder="Email" required />
          <i class='fas fa-envelope'></i>
        </div>
        <div class="field">
          <input type="text" name="phone" placeholder="Phone" />
          <i class='fas fa-phone-alt'></i>
        </div>
        <div class="message">
        <textarea placeholder="Message" name="message" required></textarea>
        <i class="fas fa-comment-dots"></i>
        </div>
        </div>
      <div class="button-area">
        <button type="submit">
          Submit <i class="fa fa-paper-plane"></i></button>
      </div>
    </form>
  </div>
  </div>
</section>

<Footer />
    </div>
  );
};

export default HeroPage;
