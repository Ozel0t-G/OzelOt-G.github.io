import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { site } from '../data/site.js';

const focusAreas = [
  {
    title: 'Security Operations',
    description: 'Monitoring, triage, and investigation. Turning signals into confidence through process and clarity.',
  },
  {
    title: 'Incident Response',
    description: 'Preparation, containment, and recovery. Improving outcomes when things go wrong.',
  },
  {
    title: 'Detection Engineering',
    description: 'Building useful detections, reducing noise, and continuously adapting to change.',
  },
  {
    title: 'Governance',
    description: 'Security governance, risk management, and aligning security with business goals.',
  },
];

const timeline = [
  {
    period: '2025 – Present',
    title: 'Senior Security Consulting & Executive Advisory',
    description:
      'Providing security advisory, incident response, cyber risk guidance, and governance support for enterprise environments. Translating operational security findings into clear priorities, executive reporting, and practical improvement roadmaps.',
  },
  {
    period: '2024 – 2025',
    title: 'KRITIS Security Operations & SOC Development',
    description:
      'Security operations for regulated critical infrastructure environments. Worked across SIEM, EDR, detection tuning, vulnerability assessments, incident response planning, analyst onboarding, and awareness programmes.',
  },
  {
    period: '2018 – 2024',
    title: 'Military Security & IT Background',
    description:
      'Built a strong foundation in operational security, classified environments, security audits, threat assessments, policy work, and training. Developed discipline, resilience, and a mission-first security mindset.',
  },
  {
    period: 'Ongoing',
    title: 'Learning, Building & Sharing',
    description:
      'Continuously improving through hands-on security work, technical writing, tool experimentation, and sharing practical knowledge that helps others make better security decisions.',
  },
];

const principles = [
  {
    title: 'Practical first',
    description: 'Focus on real-world problems and approaches that work in practice, not just in theory.',
  },
  {
    title: 'Clear decisions',
    description: 'Good security is about making better decisions with the information you have.',
  },
  {
    title: 'Useful detection',
    description: 'Build detections that are actionable, measurable, and easy to maintain.',
  },
  {
    title: 'Bridge the gap',
    description: 'Translate technical risk into business context and support better alignment.',
  },
];

function About() {
  return (
    <section className="page-shell">
      <div className="container">
        <header className="page-header about-header">
          <div>
            <h1>About Ozel0t</h1>
            <p>A personal space for cybersecurity notes, articles, and selected work.</p>
            <p>
              I created Ozel0t to document what I learn, build, and explore in cybersecurity. This
              site is where I share practical notes and thoughtful perspective from real-world
              experience.
            </p>
            <Link className="text-link" to="/articles">
              Read my articles <span aria-hidden="true">→</span>
            </Link>
          </div>
          <img
            className="about-polaroid"
            src={`${import.meta.env.BASE_URL}images/about-ozelot-polaroid.png`}
            alt="Pixel art Ozel0t character holding a Norway travel book under northern lights"
          />
        </header>

        <section className="page-section page-section-inner">
          <SectionHeading title="What I focus on" />
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section-inner">
          <SectionHeading title="Background" />
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section-inner">
          <SectionHeading title="How I work" />
          <div className="principle-grid">
            {principles.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section-inner contact-strip">
          <SectionHeading title="Get in touch">I’m always open to connecting and sharing ideas.</SectionHeading>
          <div className="link-row">
            <a className="text-link" href={site.links.linkedin}>LinkedIn</a>
            <a className="text-link" href={site.links.github}>GitHub</a>
            <a className="text-link" href={site.links.email}>Email</a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
