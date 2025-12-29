import React, { useEffect, useRef, useState } from 'react';
import '../css/views/Portfolio.css';

const skillsData = [
  { name: "Informatique", level: "95%" },
  { name: "Programmation Web", level: "90%" },
  { name: "Traitement Photos et Vidéos", level: "50%" },
  { name: "Web Design", level: "70%" },
  { name: "Electronique + Electricité", level: "80%" },
  { name: "Programmation App et autres++", level: "70%" },
  { name: "HTML + CSS", level: "95%" },
  { name: "JavaScript", level: "80%" },
  { name: "FrameWorks", level: "70%" }
];

const portfolioData = [
  {
    img: "/img/Numeric-Paper-white.png",
    title: "Numeric-Paper || En Vente ou en Partenariat",
    desc: "Système de Création des Cartes, Invitations, Billets virtuels pour les evenements, anniversaires, mariages, conférences, etc. \n Je suis à la recherche de partenaire ou d'acheteur",
    link: "https://numeric-paper-partnership.vercel.app/"
  },
  {
    img: "/img/netApear.png",
    title: "Site-Builder",
    desc: "Site web createur des mini sites et pages web responsives et professionnels",
    link: "https://site-builder.site"
  },
  {
    img: "/img/khaleen-schools.png",
    title: "Khaleen Schools",
    desc: "Une Technologie d'automatisation des taches des écoles des calculs automatiques, numerisation de documents et tout,...",
    link: "https://schools.khaleen.com"
  },
  {
    img: '/img/Khaleen.png',
    title: 'Khaleen',
    desc: 'Ensemble des technologies web pour resoudres des problemes techniques et ensembler les projets de Gentil en un seul endroit',
    link: "https://khaleen.com"
  },
  {
    img: "/img/virtualgoods-e-commerce.jpg",
    title: "VirtualGoods",
    desc: "Site web de vente de biens virtuels, avec paiement sécurisé et gestion des transactions.",
    link: "https://virtualgoods.khaleen.com"
  },
  {
    img: "/img/novellemarket.png",
    title: "NovelleMarket",
    desc: "Site web de vente e-commerce de biens non virtuels, multiples vendeurs et multiples acheteurs",
    link: "https://novellemarket.khaleen.com"
  },

];

const Portfolio = () => {
  const [animatedSkills, setAnimatedSkills] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedSkills(true);
            
            // Animation des barres de compétences
            const bars = document.querySelectorAll<HTMLElement>('.skill-level');
            bars.forEach((bar, index) => {
              setTimeout(() => {
                const width = bar.dataset.level || '0%';
                bar.style.width = width;
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <h1 className="portfolio-title">Portfolio de Gentil</h1>

      <h2 className="skills-title">Les Compétences de Gentil</h2>
      
      <section className="skills-section">
        {skillsData.map((skill, idx) => (
          <div className="one-skill" key={idx}>
            <div className="skill-title">
              <span>{skill.name}</span>
              <span className="skill-percentage" translate='no'>{skill.level}</span>
            </div>
            <div className="skillbar">
              <div 
                className="skill-level" 
                data-level={skill.level}
                style={{ width: animatedSkills ? skill.level : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      <div className="animated-separator"></div>

      <section>
        <h2 className="portfolio-title-main">Le Portfolio de Gentil</h2>
        <div className="cards-portfolio">
          {portfolioData.map((item, idx) => (
            <div className="one-portfolio" key={idx}>
              <img src={item.img} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {
                  item.link ? (
                    <p className='link-item'><a href={item.link} target="_blank" rel="noopener noreferrer">Lien : <span>{item.link}</span></a></p>
                  ) : (
                    <p></p>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
};

export default Portfolio;