import React, { useEffect } from 'react';
import '../css/views/Bio.css';
import ContactForm from '../components/ContactForm';

const storyParagraphs = [
  `Je suis Gentil Le NoiR Maliyamungu, développeur full stack, passionné de produit, d'ingénierie logicielle et de solutions numériques capables d'avoir un impact concret. Mon parcours s'est construit autour d'une idée simple: la technologie n'a de valeur que lorsqu'elle devient lisible, utile et suffisamment bien exécutée pour résoudre un vrai problème.`,
  `Né en République Démocratique du Congo et aujourd'hui en évolution entre la RDC et Kigali, j'ai développé très tôt une forte curiosité pour les systèmes, les interfaces, l'électronique et la programmation. Cette curiosité ne s'est jamais arrêtée. Elle a progressivement pris la forme d'une discipline de travail, d'une culture du détail et d'une volonté claire de construire des produits sérieux, propres et professionnels.`,
  `Je poursuis actuellement une formation en Software Engineering à UNILAK, à Kigali. Cette étape académique renforce ce que j'applique déjà sur le terrain: réfléchir en termes d'architecture, de logique, de qualité d'exécution et de progression continue. J'aime apprendre vite, mais j'aime surtout transformer ce que j'apprends en résultats tangibles.`,
  `Mon profil se situe à l'intersection du développement web, de la logique métier, du design d'interface et de la vision produit. Je peux intervenir sur l'expérience utilisateur, l'intégration frontend, la structuration backend, la cohérence visuelle d'une plateforme et la manière dont un projet est perçu par ses utilisateurs. Pour moi, coder ne consiste pas seulement à faire fonctionner une page; il faut aussi transmettre de la confiance, de la clarté et une impression de qualité.`,
  `Avec le temps, j'ai travaillé sur des projets variés qui m'ont poussé à m'adapter, à corriger, à itérer et à livrer malgré les contraintes. Cette capacité d'adaptation fait partie de ma méthode. J'aime comprendre le besoin réel derrière une demande, proposer une structure plus solide, puis construire une solution qui reste crédible techniquement et agréable à utiliser.`,
  `Je m'intéresse aussi à l'électronique et aux systèmes embarqués, ce qui enrichit ma manière de penser les produits. Cette double sensibilité, logiciel et matériel, me pousse à raisonner en systèmes complets plutôt qu'en éléments isolés. Elle renforce ma capacité à concevoir des solutions cohérentes, pragmatiques et ouvertes à l'innovation.`,
  `Aujourd'hui, je développe également Quevvy Platform, un écosystème produit qui porte une vision plus large autour des solutions numériques modernes. Son premier produit, SiteX Quevvy, s'inscrit dans cette ambition: aider à construire une présence en ligne plus sérieuse, plus nette et plus professionnelle. Ce type de projet résume bien ma direction actuelle: créer, améliorer, structurer et faire monter les produits en qualité.`,
  `Au-delà des outils et des langages, je tiens à la manière de travailler. J'accorde de l'importance à la collaboration, à l'intégrité, à la progression et à la persévérance. J'apprécie les environnements où l'on cherche non seulement à livrer vite, mais aussi à construire correctement. Je reste donc ouvert aux collaborations, aux missions freelance, aux opportunités d'équipe, aux échanges professionnels et aux projets qui demandent de la précision autant que de l'ambition.`,
];

const timeline = [
  { phase: 'Départ', title: 'Curiosité technique très jeune', text: 'Découverte progressive de l’informatique, de l’électronique et de la logique de programmation.' },
  { phase: 'Base scolaire', title: 'Construction des fondations', text: 'Formation générale, goût pour l’apprentissage autonome et intérêt constant pour les outils numériques.' },
  { phase: 'Orientation', title: 'Électronique et systèmes', text: 'Approfondissement du raisonnement technique, de l’expérimentation et du lien entre matériel et logiciel.' },
  { phase: 'Actuel', title: 'Software Engineering à UNILAK', text: 'Consolidation de la vision full stack, produit et ingénierie logicielle dans un cadre académique et pratique.' },
];

const expertise = [
  { title: 'Développement frontend', text: 'React, TypeScript, interfaces modernes, hiérarchie visuelle, expérience utilisateur et performance perçue.' },
  { title: 'Backend & logique métier', text: 'Laravel, Node.js, bases de données, structuration de fonctionnalités et intégration de services.' },
  { title: 'Vision produit', text: 'Compréhension du besoin, cohérence globale, lisibilité fonctionnelle et montée en qualité d’un projet.' },
  { title: 'Électronique & IoT', text: 'Arduino, microcontrôleurs, expérimentations embarquées et raisonnement orienté systèmes.' },
];

const values = [
  { title: 'Clarté', text: 'J’aime les produits compréhensibles, les interfaces lisibles et les décisions techniques assumées.' },
  { title: 'Progression', text: 'Je considère chaque projet comme une occasion d’augmenter le niveau de qualité, de méthode et d’exécution.' },
  { title: 'Intégrité', text: 'Je préfère une parole nette, un code propre et une collaboration honnête à des promesses floues.' },
  { title: 'Persévérance', text: 'Je reste engagé même lorsque le problème devient complexe, tant qu’il existe une voie sérieuse pour avancer.' },
];

const projects = [
  {
    name: 'Quevvy Platform',
    desc: 'Écosystème produit en cours de structuration, avec une ambition SaaS et une recherche d’investisseurs.',
    href: 'https://partner.quevvy.com',
  },
  {
    name: 'SiteX Quevvy',
    desc: 'Premier produit de Quevvy, orienté création de sites modernes et présence digitale professionnelle.',
    href: 'https://sitex.quevvy.com',
  },
  {
    name: 'Khaleen Schools',
    desc: 'Projet orienté automatisation et gestion scolaire, avec une logique métier concrète et utile.',
    href: 'https://schools.khaleen.com',
  },
];

const Bio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bio-page">
      <section className="bio-hero">
        <div className="bio-orb bio-orb-one" />
        <div className="bio-orb bio-orb-two" />

        <div className="container bio-hero-shell">
          <div className="bio-hero-copy">
            <span className="bio-kicker">Biographie • Parcours • Vision</span>
            <h1 className="bio-hero-title">
              Une trajectoire construite autour du code,
              <span className="gradient-text"> du produit et de l’exigence.</span>
            </h1>
            <p className="bio-hero-description">
              Cette page raconte qui je suis, comment je travaille, ce que je construis et
              la direction dans laquelle j’avance comme développeur.
            </p>
          </div>

          <div className="bio-hero-aside">
            <div className="hero-panel reveal-on-scroll">
              <div className="hero-panel-row">
                <span>Nom</span>
                <strong translate="no">Gentil Le NoiR Maliyamungu</strong>
              </div>
              <div className="hero-panel-row">
                <span>Formation</span>
                <strong>Software Engineering • UNILAK</strong>
              </div>
              <div className="hero-panel-row">
                <span>Positionnement</span>
                <strong>Développeur full stack & vision produit</strong>
              </div>
              <div className="hero-panel-row">
                <span>Écosystème actuel</span>
                <strong translate="no">Quevvy Platform / SiteX Quevvy</strong>
              </div>
            </div>

            <div className="hero-stats reveal-on-scroll">
              <div className="hero-stat-card">
                <strong>2007</strong>
                <span>année de naissance</span>
              </div>
              <div className="hero-stat-card">
                <strong>full stack</strong>
                <span>frontend, backend, produit</span>
              </div>
              <div className="hero-stat-card">
                <strong>RDC / Kigali</strong>
                <span>ancrage et mobilité</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bio-content-section">
        <div className="container">
          <div className="bio-actions reveal-on-scroll">
            <a href="/images" className="bio-action-card">
              <span className="action-icon">IMG</span>
              <div className="action-text">
                <h3>Galerie</h3>
                <p>Explorer mes images et quelques moments de parcours.</p>
              </div>
              <span className="action-arrow">-&gt;</span>
            </a>
            <a href="/doc/cv.fr.pdf" target="_blank" rel="noreferrer" className="bio-action-card">
              <span className="action-icon">CV FR</span>
              <div className="action-text">
                <h3>CV français</h3>
                <p>Consulter la version PDF en français.</p>
              </div>
              <span className="action-arrow">-&gt;</span>
            </a>
            <a href="/doc/cv.en.pdf" target="_blank" rel="noreferrer" className="bio-action-card">
              <span className="action-icon">CV EN</span>
              <div className="action-text">
                <h3>Resume English</h3>
                <p>Ouvrir la version anglaise de mon CV.</p>
              </div>
              <span className="action-arrow">-&gt;</span>
            </a>
          </div>

          <div className="bio-reading-shell">
            <div className="reading-header reveal-on-scroll">
              <span className="section-kicker">Lecture</span>
              <h2>Une biographie plus complète, plus claire et plus fidèle à mon évolution.</h2>
            </div>

            <div className="bio-longform">
              {storyParagraphs.map((paragraph, index) => (
                <div className="bio-paragraph reveal-on-scroll" key={index}>
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>

            <div className="bio-quote reveal-on-scroll">
              <blockquote>
                <p>Je veux construire des produits qui inspirent confiance avant même qu&apos;on les explique.</p>
                <cite>Gentil Le NoiR</cite>
              </blockquote>
            </div>

            <div className="bio-timeline reveal-on-scroll">
              <div className="section-block-head">
                <span className="section-kicker">Parcours</span>
                <h3>Les étapes qui structurent ma progression.</h3>
              </div>
              <div className="timeline-grid">
                {timeline.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <span className="timeline-phase">{item.phase}</span>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="bio-skills-highlight reveal-on-scroll">
              <div className="section-block-head">
                <span className="section-kicker">Expertise</span>
                <h3>Les axes sur lesquels j’apporte le plus de valeur.</h3>
              </div>
              <div className="expertise-grid">
                {expertise.map((item) => (
                  <article className="expertise-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="projects-showcase reveal-on-scroll">
              <div className="section-block-head">
                <span className="section-kicker">Produits</span>
                <h3>Quelques projets qui reflètent ma direction actuelle.</h3>
              </div>
              <div className="projects-grid">
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card"
                  >
                    <span className="project-name">{project.name}</span>
                    <span className="project-desc">{project.desc}</span>
                    <span className="project-link">-&gt;</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="values-section reveal-on-scroll">
              <div className="section-block-head">
                <span className="section-kicker">Valeurs</span>
                <h3>La manière dont j’aime travailler et progresser.</h3>
              </div>
              <div className="values-grid">
                {values.map((value) => (
                  <article className="value-item" key={value.title}>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="bio-conclusion reveal-on-scroll">
              <p>
                En résumé, je me définis comme un développeur en construction ambitieuse, déjà
                orienté exécution, qualité et cohérence produit. J’avance avec sérieux, curiosité,
                capacité d’adaptation et volonté de faire monter chaque projet d’un niveau. Si une
                équipe, une entreprise ou un partenaire cherche quelqu’un de motivé, impliqué et
                réellement attentif à la qualité du rendu final, alors nous aurons probablement une
                bonne conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bio-contact-section">
        <div className="container">
          <div className="bio-contact-shell reveal-on-scroll">
            <div className="bio-contact-header">
              <span className="section-kicker">Prendre contact</span>
              <h2>Si cette biographie te parle, on peut aller plus loin.</h2>
              <p>
                Mission, collaboration, stage, produit ou simple échange professionnel: tu peux
                m&apos;écrire ici et préparer un message clair en quelques secondes.
              </p>
            </div>

            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bio;
