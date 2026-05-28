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
        <NavLink className="brand" to="/" aria-label="Ozel0t home">
          {site.name}
        </NavLink>
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
