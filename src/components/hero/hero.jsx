import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import heroImage from "../../assets/images/big.jpg";
import aboutImage from "../../assets/images/hotel.jpg";
import contactImage from "../../assets/images/contact.png";
import serviceImage from "../../assets/images/bed.jpg";

import "./hero.css";

const HeroPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('../dashboard/dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div>
      <Header />
      <main>
        <HeroSection handleClick={handleClick} />
        <AboutSection />
        <ServiceSection />
        <MapSection />
        <ContactSection handleSubmit={handleSubmit} />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = ({ handleClick }) => (
  <section className="hero">
    <div className="content">
      <h1>Residential and Non-Residential Allocation System</h1>
      <p>Book your rooms and events here</p>
      <button onClick={handleClick}>Get Started</button>
    </div>
    <div className="Hero_image">
      <img src={heroImage} alt="Residential and Non-Residential Allocation System" />
    </div>
  </section>
);

const AboutSection = () => (
  <section className="about">
    <div className="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
      </p>
    </div>
    <div className="image">
      <img src={aboutImage} alt="About our services" />
    </div>
  </section>
);

const ServiceSection = () => (
  <section className="service py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <ServiceCard key={index} />
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard = () => (
  <div className="col">
    <div className="card service-card">
      <img src={serviceImage} className="card-img-top" alt="Service" />
      <div className="card-body">
        <h5 className="card-title">Service</h5>
        <p className="card-text">Brief description of the service.</p>
      </div>
    </div>
  </div>
);

const MapSection = () => (
  <section className="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5283034471386!2d-2.003498184745297!3d5.298034296183941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdd6e0e44a4c71b%3A0x370f8ff00a9cf057!2sUniversity%20of%20Mines%20and%20Technology!5e0!3m2!1sen!2sgh!4v1624451234567!5m2!1sen!2sgh"
      title="University of Mines and Technology Location"
      frameBorder="0"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </section>
);

const ContactSection = ({ handleSubmit }) => (
  <section className="contact" id="contact">
    <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>
    <div className="container">
      <div className="content">
        <div className="image-box">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="field">
              <input type="text" name="name" placeholder="Name" required />
              <i className='fas fa-user'></i>
            </div>
            <div className="field">
              <input type="email" name="email" placeholder="Email" required />
              <i className='fas fa-envelope'></i>
            </div>
            <div className="field">
              <input type="tel" name="phone" placeholder="Phone" />
              <i className='fas fa-phone-alt'></i>
            </div>
            <div className="message">
              <textarea placeholder="Message" name="message" required></textarea>
              <i className="fas fa-comment-dots"></i>
            </div>
          </div>
          <div className="button-area">
            <button type="submit">
              Submit <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default HeroPage;