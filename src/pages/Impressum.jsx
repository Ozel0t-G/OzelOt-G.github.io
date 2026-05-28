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

          <section className="terms-block" aria-labelledby="terms-title">
            <h2 id="terms-title">Terms and Conditions</h2>

            <h3>1 Introduction</h3>
            <p>
              Welcome to https://ozel0t-g.github.io/. By accessing our website, you agree to these
              terms and conditions. Please read them carefully.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Impressum;
