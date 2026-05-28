import { site } from '../data/site.js';

function Impressum() {
  return (
    <section className="page-shell">
      <div className="container narrow-block">
        <header className="page-header">
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 DDG</p>
        </header>

        <div className="legal-content">
          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            Jan Gennat
            <br />
            Ozel0t
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail:{' '}
            <a className="text-link" href={site.links.email}>
              ozel0t.website@use.startmail.com
            </a>
          </p>

          <h2>Hinweis</h2>
          <p>
            Diese Website ist ein persönliches Projekt mit Notizen und ausgewählten Arbeiten im
            Bereich Cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Impressum;
