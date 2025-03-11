import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>ABOUT LUXE</h1>
        <p>The art of style, accessible to everyone</p>
      </section>
      
      <section className="about-story">
        <div className="about-story-content">
          <h2>Our Story</h2>
          <p>
            LUXE was founded in 2010 by a team of fashion enthusiasts united by a common goal: 
            to make high fashion accessible to everyone. We started as a small boutique in the center of Moscow, 
            and today we are present in 15 cities across Russia and have an extensive online store.
          </p>
          <p>
            Over the years, we have developed a special approach to selecting collections: we collaborate 
            with both well-known global brands and young designers whose works 
            stand out for their originality and high quality.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="LUXE store interior" 
          />
        </div>
      </section>
      
      <section className="about-mission">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Fashion design process" 
          />
        </div>
        <div className="about-mission-content">
          <h2>Our Mission</h2>
          <p>
            We believe that fashion is not just about how you look, but how you feel. 
            Our mission is to help every client find their unique style that emphasizes 
            their individuality and brings confidence.
          </p>
          <p>
            We adhere to the principles of ethical fashion and care for the environment, 
            which is why we are gradually increasing the share of eco-friendly materials in our collections and 
            support brands that share our values.
          </p>
        </div>
      </section>
      
      <section className="about-team">
        <h2>Our Team</h2>
        <p className="team-intro">
          Behind every piece of clothing in our store is a team of professionals 
          who are passionate about what they do. From buyers selecting the best collections worldwide 
          to consultants helping you find the perfect look.
        </p>
        
        <div className="team-grid">
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
              alt="Team member" 
            />
            <h3>Anna Petrova</h3>
            <p>Founder and Creative Director</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Team member" 
            />
            <h3>Mikhail Sokolov</h3>
            <p>Head Buyer</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" 
              alt="Team member" 
            />
            <h3>Ekaterina Ivanova</h3>
            <p>Style Consultant</p>
          </div>
        </div>
      </section>
      
      <section className="about-cta">
        <h2>Become Part of Our Story</h2>
        <p>
          We invite you to the world of LUXE – a world of style, quality, and uniqueness. 
          Visit our stores or shop online.
        </p>
        <div className="cta-buttons">
          <Link to="/catalog" className="cta-button primary">VIEW COLLECTIONS</Link>
          <Link to="/contact" className="cta-button secondary">CONTACT US</Link>
        </div>
      </section>
    </div>
  );
};

export default About; 
