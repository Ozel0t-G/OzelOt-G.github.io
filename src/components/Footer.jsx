import { site } from '../data/site.js';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    label: 'LinkedIn',
    href: site.links.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.96H3.6V20h3.34V8.96ZM5.27 4a1.94 1.94 0 1 0 0 3.88A1.94 1.94 0 0 0 5.27 4Zm14.9 9.96c0-3.08-1.64-5.25-4.32-5.25a3.72 3.72 0 0 0-3.36 1.84V8.96H9.28V20h3.34v-5.46c0-1.44.27-2.83 2.05-2.83 1.75 0 1.77 1.64 1.77 2.92V20h3.33l.4-6.04Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: site.links.github,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.9-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.15 2.15 0 0 1 .64-1.34c-2.22-.25-4.55-1.11-4.55-4.94a3.86 3.86 0 0 1 1.03-2.68 3.59 3.59 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.45 9.45 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64a3.85 3.85 0 0 1 1.02 2.68c0 3.84-2.34 4.68-4.56 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: site.links.email,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 5.5h15A2.5 2.5 0 0 1 22 8v8a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16V8a2.5 2.5 0 0 1 2.5-2.5Zm.28 2L12 12.62l7.22-5.12H4.78Zm15.22 2.1-7.42 5.26a1 1 0 0 1-1.16 0L4 9.6V16a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V9.6Z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; 2026 {site.name}</p>
        <div className="footer-actions">
          <Link className="footer-legal-link" to="/impressum">
            Impressum
          </Link>
          <div className="footer-links" aria-label="Footer links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
