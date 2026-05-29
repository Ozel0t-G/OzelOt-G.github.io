import { NavLink } from 'react-router-dom';
import { site } from '../data/site.js';

const navItems = [
  { label: 'Notes', path: '/notes' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
];

function Header() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <div className="brand-lockup">
          <NavLink className="brand" to="/" aria-label="Ozel0t home">
            {site.name}
          </NavLink>
          <span className="brand-tagline">Cybersecurity notes, field work and selected writing.</span>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
