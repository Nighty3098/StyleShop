import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About LUXE</h1>
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
        <h2>Our Mission</h2>
        <p>
          At LUXE, we believe that fashion is a form of self-expression. Our mission is to provide 
          our customers with the finest clothing and accessories that allow them to express their individuality 
          and style. We are committed to sustainability and ethical practices in all aspects of our business.
        </p>
      </section>
      
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Team member" 
            />
            <h3>Ivan Ivanov</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Team member" 
            />
            <h3>Anna Petrova</h3>
            <p>Creative Director</p>
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
          <a href="/catalog" className="cta-button primary">View Collections</a>
          <a href="/contact" className="cta-button secondary">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default About; 
