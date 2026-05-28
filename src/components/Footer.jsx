import { site } from '../data/site.js';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; 2024 {site.name}</p>
        <div className="footer-links" aria-label="Footer links">
          <a href={site.links.linkedin}>LinkedIn</a>
          <a href={site.links.github}>GitHub</a>
          <a href={site.links.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
