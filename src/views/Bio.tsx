import React, { useEffect, useState } from 'react';
import '../css/views/Bio.css';
import ContactForm from '../components/ContactForm.tsx';

const Bio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`bio-section ${isVisible ? 'visible' : ''}`}>
      <div style={{ textAlign: 'center' }}>
        <h1 className="bio-title">Biographie de  <span translate='no'>Gentil Le NoiR</span></h1>
        
        <p className="link">
          <a href="/images">
            📸 VOIR SES IMAGES
          </a>
        </p>
        
        <div className="cv-section">
          <a href="/cv" target="_blank" rel="noopener noreferrer">
            📄 Lire le CV
          </a>
          <a href="/doc/gentil_le_noir_c_v.pdf" download>
            ⬇️ Télécharger le CV
          </a>
        </div>
      </div>
      
<div className="bio-content">
  <p>
    Je suis <strong translate='no'>Gentil Le Noir Maliyamungu Balegamire</strong>, un <strong>développeur web</strong>, <strong>programmeur</strong> et <strong>électronicien</strong> passionné par la technologie et l’innovation. Mon objectif est de concevoir des solutions numériques et matérielles intelligentes qui transforment les idées en projets concrets et impactants.
  </p>

  <p>
    Ce site est le reflet de mon expertise, de mes réalisations et de mes valeurs. Il témoigne de mon engagement à créer des solutions modernes et performantes, tout en partageant mes connaissances avec la communauté et en collaborant avec d’autres professionnels.
  </p>

  <p>
    Né à <strong>Goma</strong>, en <strong>République Démocratique du Congo</strong>, j’ai grandi dans un environnement où la curiosité et l’expérimentation technologique étaient encouragées dès le plus jeune âge. Très tôt, j’ai exploré l’informatique, l’électronique et la programmation, ce qui a façonné ma passion pour le développement de projets innovants.
  </p>

  <p>
    Mon parcours scolaire m’a permis de consolider cette passion : j’ai étudié à l’école primaire <em>Matumaini</em>, puis au secondaire à l’Institut <em>Maranatha</em> et au <em>Complexe Scolaire Adventiste Bethel</em>, où j’ai obtenu mon diplôme en <strong>électronique industrielle</strong>.
  </p>

  <p>
    Professionnellement, j’ai commencé comme stagiaire sur des projets web, développant rapidement des compétences solides en front-end, back-end et gestion de bases de données. Cette expérience m’a permis de livrer des projets fonctionnels et esthétiques, intégrant à la fois performance et expérience utilisateur.
  </p>

  <p>
    Parallèlement, j’ai approfondi mes connaissances en électronique et systèmes embarqués avec des plateformes comme <em>Arduino</em> et <em>Raspberry Pi</em>, ce qui me permet de créer des solutions hybrides où le logiciel et le matériel travaillent de concert. 
  </p>

  <p>
    J’ai également dirigé et contribué à plusieurs projets personnels et professionnels majeurs, notamment : <strong>BlocPlan</strong>, <strong>Khaleen Schools</strong>, <strong>Khaleen</strong>, et <strong>NetApear</strong>, démontrant ma capacité à mener des projets web complexes de bout en bout.
  </p>

  <p>
    Mon approche repose sur l’innovation continue, la curiosité et l’apprentissage permanent. Je suis toujours à l’affût des nouvelles technologies pour offrir des solutions à la fois créatives, fiables et adaptées aux besoins réels des utilisateurs.
  </p>

  <p>
    Mes valeurs fondamentales incluent la <strong>collaboration</strong>, l’<strong>intégrité</strong> et la <strong>persévérance</strong>. Je considère chaque défi comme une opportunité de grandir, et chaque échec comme une étape vers l’excellence. Je crois aussi que le partage du savoir et l’accès à l’éducation technologique sont essentiels pour un développement personnel et collectif.
  </p>

  <p>
    Une de mes inspirations majeures est Nelson Mandela : <em>"Cela semble toujours impossible jusqu'à ce que ce soit fait."</em> Cette citation guide ma manière de concevoir, développer et livrer des projets ambitieux.
  </p>

  <p>
    En résumé, je suis un <strong>développeur</strong>, <strong>programmeur</strong>, <strong>informaticien</strong> et <strong>électronicien</strong> passionné, capable de transformer des idées en solutions concrètes et de collaborer pour créer un impact réel. Je suis toujours ouvert aux nouvelles collaborations, projets ou échanges de connaissances.
  </p>
</div>
      
      <ContactForm />
    </section>
  );
};

export default Bio;