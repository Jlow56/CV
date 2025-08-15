"use client";
import { useEffect } from "react";
import AnimateOnLoad from "@/components/AnimateOnLoad";
import { toggleTheme, downloadPDF, easterHegg, loadGitHubStats } from "@/lib/utils";
import Image from 'next/image';

import type { FC } from "react";

const Home: FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.experience-item, .project-card, .skill-category');
    elements.forEach((element, index) => {
      (element as HTMLElement).style.opacity = '0';
      (element as HTMLElement).style.transform = 'translateY(20px)';
      setTimeout(() => {
        (element as HTMLElement).style.transition = 'all 0.6s ease';
        (element as HTMLElement).style.opacity = '1';
        (element as HTMLElement).style.transform = 'translateY(0)';
      }, index * 100);
    });

    easterHegg();
    loadGitHubStats();
  }, []);

  return (
    <>
      <AnimateOnLoad />
      <div className="container">
        <main className="cv-card">
          <header className="header">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Basculer le thème">🌙</button>
            <h1 className="typing-effect">Jean-Louis Jean</h1>
            <p>Développeur Web et Mobile Full Stack</p>
            <div className="availability">
                <span className="status-badge">Disponible fin juillet 2025</span>
            </div>
          </header>

          <div className="main-content">
            <aside className="sidebar">
              <section className="section">
                <h2>Contact</h2>
                <address>
                  <div className="contact-item">
                      <div className="contact-icon" aria-hidden="true">📞</div>
                      <span>06.28.79.28.30</span>
                  </div>
                  <div className="contact-item">
                      <div className="contact-icon" aria-hidden="true">📧</div>
                      <a href="mailto:jean-louis.jean@outlook.com" className="contact-link">jean-louis.jean@outlook.com</a>
                  </div>
                  <div className="contact-item">
                      <div className="contact-icon" aria-hidden="true">🚗</div>
                      <span>Permis B</span>
                  </div>
                  <div className="contact-item">
                      <div className="contact-icon" aria-hidden="true"><Image src="/img/linkedin.png" alt="logo linkedin" width={30} height={30}/></div>
                      <a href="https://www.linkedin.com/in/jean-louis-jean-bienvenu/" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                  <div className="contact-item">
                      <div className="contact-icon" aria-hidden="true"><Image src="/img/github-theme-light.png" alt="logo linkedin" width={40} height={40}/></div>
                      <a href="https://github.com/Jlow56?tab=repositories" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </address>
              </section>

              <section className="section">
                <h2>Compétences Techniques</h2>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h3>Front-End</h3>
                    <ul>
                      <li className="skill-tag">HTML</li>
                      <li className="skill-tag">CSS</li>
                      <li className="skill-tag">JavaScript</li>
                      <li className="skill-tag">React</li>
                      <li className="skill-tag">Bootstrap</li>
                      <li className="skill-tag">Figma</li>
                      <li className="skill-tag">Responsive</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Back-End</h3>
                    <ul>
                      <li className="skill-tag">Node.js</li>
                      <li className="skill-tag">PHP</li>
                      <li className="skill-tag">MongoDB</li>
                      <li className="skill-tag">Docker</li>
                      <li className="skill-tag">AWS</li>
                      <li className="skill-tag">API</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="section">
                <h2>Soft Skills</h2>
                <ul className="soft-skills">
                  <li className="soft-skill">Analyse</li>
                  <li className="soft-skill">Autonomie</li>
                  <li className="soft-skill">Équipe</li>
                  <li className="soft-skill">Créativité</li>
                  <li className="soft-skill">Curieux</li>
                  <li className="soft-skill">Convivial</li>
                </ul>
              </section>

              <section className="section">
                <h2>Langues</h2>
                <ul>
                  <li className="contact-item">
                    <div className="contact-icon" aria-hidden="true">🇫🇷</div>
                    <span>Français (Natif)</span>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon" aria-hidden="true">🇬🇧</div>
                    <span>Anglais</span>
                  </li>
                </ul>
              </section>

              <section className="section">
                <h2>Centres d&#39;intérêt</h2>
                <ul>
                  <li className="contact-item">
                    <div className="contact-icon" aria-hidden="true">👨‍👩‍👧‍👦</div>
                    <span>Famille</span>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon" aria-hidden="true">🏋️</div>
                    <span>CrossFit</span>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon" aria-hidden="true">🥊</div>
                    <span>Boxe</span>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon" aria-hidden="true">👨‍🍳</div>
                    <span>Cuisine</span>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon" aria-hidden="true">✈️</div>
                    <span>Voyages</span>
                  </li>
                </ul>
              </section>
            </aside>

            <div className="main-section">
              <section className="section">
                <h2>Projet Professionnel</h2>
                <p>
                  Développeur Web et Mobile Full Stack en reconversion professionnelle, je recherche un <strong>contrat de professionnalisation</strong> pour la rentrée 2025-2026.
                  Motivé par l&#39;apprentissage et le travail en équipe, je souhaite mettre mes compétences techniques au service de votre entreprise.
                </p>
              </section>

              <section className="section">
                <h2>Formation</h2>
                <article className="experience-item">
                  <h3>Développeur Web - OpenclassRooms</h3>
                  <div className="company">Créez et maintenir des sites web dynamiques</div>
                  <time className="date" dateTime="2025-01-10/2025-07-09">10/01/2025 - 09/07/2025</time>
                  <div className="location">Distanciel</div>
                  <ul>
                    <li>Créer API et bases de données</li>
                    <li>Optimiser les performances</li>
                    <li>Gérer un projet web responsive</li>
                  </ul>
                </article>
                    
                <article className="experience-item">
                  <h3>Développeur Web et Mobile - 3WACADEMY</h3>
                  <div className="company">Titre professionnel de niveau 5</div>
                  <time className="date" dateTime="2023-10-16/2024-07-12">16/10/2023 - 12/07/2024</time>
                  <div className="location">Distanciel + 2 jours/mois présentiel</div>
                  <ul>
                    <li>Développement front-end interactif et responsive</li>
                    <li>Développement back-end sécurisé et performant</li>
                    <li>Architecture et optimisation</li>
                  </ul>
                </article>

                <article className="experience-item">
                  <h3>Bac Technologique Hôtelier</h3>
                  <div className="company">Lycée Yvon Bourges, Dinard</div>
                  <time className="date" dateTime="2008/2011">2008 - 2011</time>
                </article>
              </section>

              <section className="section">
                <h2>Expérience Professionnelle</h2>
                <article className="experience-item">
                  <h3>Stage Développeur Web - ASPROBIR</h3>
                  <div className="company">Création de site associatif</div>
                  <time className="date" dateTime="2024-04-08/2024-06-13">08/04/2024 - 13/06/2024</time>
                  <div className="location">Distanciel</div>
                  <p>Développement complet du site web pour l&#39;association dans le cadre de la formation 3WACADEMY</p>
                </article>

                <article className="experience-item">
                  <h3>Stage Développeur - wwwup.fr</h3>
                  <div className="company">Optimisation web</div>
                  <time className="date" dateTime="2023-07-01/2023-07-17">01/07/2023 - 17/07/2023</time>
                  <div className="location">Distanciel</div>
                  <ul>
                    <li>Optimisation SEO</li>
                    <li>Amélioration des performances</li>
                    <li>Optimisation vitesse d&#39;affichage</li>
                  </ul>
                </article>
                
                <article className="experience-item">
                  <h3>Assistant de Prévention et de Sécurité</h3>
                  <div className="company">Collège Eugénie Tell Éboué</div>
                  <time className="date" dateTime="2019/2021">2019 - 2021</time>
                  <div className="location">Guyane</div>
                  <ul>
                    <li>Formation et prévention auprès d&#39;élèves</li>
                    <li>Gestion de crise et protocoles</li>
                  </ul>
                </article>
              </section>

              

              <button className="download-btn" onClick={downloadPDF} aria-label="Télécharger le CV au format PDF">
                📄 Télécharger le CV PDF
              </button>
            </div>
          </div>

          <section className="section projects">
                <h2>Projets Réalisés</h2>
                <div className="projects-grid">
                  <article className="project-card">
                    <h3>🔧 Mon vieux grimoire</h3>
                    <p>Création de la partie backend pour une librairie avec Node.js et MongoDB</p>
                  </article>
                  <article className="project-card">
                    <h3>🏠 Kasa</h3>
                    <p>Site web pour une agence immobilière développé avec React</p>
                  </article>
                  <article className="project-card">
                    <h3>📷 Nina Carducci</h3>
                    <p>Débogage, optimisation SEO d&#39;un site de photographe</p>
                  </article>
                  <article className="project-card">
                    <h3>🎨 Sophie Bluel</h3>
                    <p>Dynamisation d&#39;une page web en JavaScript vanilla</p>
                  </article>
                  <article className="project-card">
                    <h3>📸 Robbie Lens</h3>
                    <p>Site vitrine responsive pour un photographe</p>
                  </article>
                </div>
              </section>

          <section className="portfolio-section">
            <h2>Portfolio</h2>
            <p>Découvrez tous mes projets et réalisations</p>
            <a href="https://jlo-portfolio-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                🌐 Visiter mon Portfolio
            </a>
          </section>
        </main>
      </div>
    </>
  );
};
export default Home;