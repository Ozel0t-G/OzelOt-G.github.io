import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page-shell">
      <div className="container narrow-block">
        <header className="page-header">
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist or has moved.</p>
          <Link className="text-link" to="/">
            Return home <span aria-hidden="true">→</span>
          </Link>
        </header>
      </div>
    </section>
  );
}

export default NotFound;
