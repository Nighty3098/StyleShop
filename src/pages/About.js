import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>О LUXE</h1>
        <p>Искусство стиля, доступное каждому</p>
      </section>
      
      <section className="about-story">
        <div className="about-story-content">
          <h2>Наша История</h2>
          <p>
            LUXE был основан в 2010 году командой энтузиастов моды, объединенных общей целью: 
            сделать высокую моду доступной для всех. Мы начинали как небольшой бутик в центре Москвы, 
            а сегодня представлены в 15 городах России и имеем обширный онлайн-магазин.
          </p>
          <p>
            За эти годы мы сформировали особый подход к выбору коллекций: мы сотрудничаем 
            как с известными мировыми брендами, так и с молодыми дизайнерами, чьи работы 
            отличаются оригинальностью и высоким качеством.
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
          <h2>Наша Миссия</h2>
          <p>
            Мы верим, что мода – это не только о том, как вы выглядите, но и о том, как вы себя чувствуете. 
            Наша миссия – помочь каждому клиенту найти свой уникальный стиль, который подчеркнет 
            индивидуальность и принесет уверенность.
          </p>
          <p>
            Мы придерживаемся принципов этичной моды и заботимся об окружающей среде, 
            поэтому постепенно увеличиваем долю экологичных материалов в наших коллекциях и 
            поддерживаем бренды, разделяющие наши ценности.
          </p>
        </div>
      </section>
      
      <section className="about-team">
        <h2>Наша Команда</h2>
        <p className="team-intro">
          За каждым предметом одежды в нашем магазине стоит команда профессионалов, 
          влюбленных в свое дело. От байеров, отбирающих лучшие коллекции со всего мира, 
          до консультантов, помогающих вам найти идеальный образ.
        </p>
        
        <div className="team-grid">
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
              alt="Team member" 
            />
            <h3>Анна Петрова</h3>
            <p>Основатель и креативный директор</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Team member" 
            />
            <h3>Михаил Соколов</h3>
            <p>Главный байер</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" 
              alt="Team member" 
            />
            <h3>Екатерина Иванова</h3>
            <p>Стилист-консультант</p>
          </div>
        </div>
      </section>
      
      <section className="about-cta">
        <h2>Станьте Частью Нашей Истории</h2>
        <p>
          Мы приглашаем вас в мир LUXE – мир стиля, качества и уникальности. 
          Посетите наши магазины или совершите покупку онлайн.
        </p>
        <div className="cta-buttons">
          <Link to="/catalog" className="cta-button primary">СМОТРЕТЬ КОЛЛЕКЦИИ</Link>
          <Link to="/contact" className="cta-button secondary">СВЯЗАТЬСЯ С НАМИ</Link>
        </div>
      </section>
    </div>
  );
};

export default About; 
