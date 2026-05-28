const terms = [
  {
    title: '1 Introduction',
    text: 'Welcome to https://ozel0t-g.github.io/. By accessing our website, you agree to these terms and conditions. Please read them carefully.',
  },
  {
    title: '2 Intellectual Property Rights',
    text: 'The content published on https://ozel0t-g.github.io/, including texts, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Jan Gennat or its suppliers and protected by copyright and intellectual property laws.',
  },
  {
    title: '3 Use License',
    text: 'Permission is granted to temporarily download one copy of the materials on https://ozel0t-g.github.io/ website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not modify or copy the materials; use the materials for any commercial purpose or public display; attempt to decompile or reverse engineer any software contained on the website; remove copyright or proprietary notations; transfer the materials to another person or mirror the materials on any other server. This license shall automatically terminate if you violate any restrictions and may be terminated by https://ozel0t-g.github.io/ at any time. Upon termination, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
  },
  {
    title: '4 Disclaimer',
    text: 'The materials on https://ozel0t-g.github.io/ website are provided on an as-is basis. https://ozel0t-g.github.io/ makes no warranties, expressed or implied, and disclaims all other warranties including merchantability, fitness for a particular purpose, or non-infringement.',
  },
  {
    title: '5 Limitations',
    text: 'In no event shall https://ozel0t-g.github.io/ or its suppliers be liable for any damages, including loss of data or profit or business interruption, arising out of the use or inability to use the materials on this website.',
  },
  {
    title: '6 Accuracy of Materials',
    text: 'The materials appearing on https://ozel0t-g.github.io/ website could include technical, typographical, or photographic errors. The website does not warrant that any materials are accurate, complete, or current and may make changes at any time without notice.',
  },
  {
    title: '7 Links',
    text: 'https://ozel0t-g.github.io/ has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by https://ozel0t-g.github.io/. Use of any such linked website is at the user’s own risk.',
  },
  {
    title: '8 Modifications',
    text: 'https://ozel0t-g.github.io/ may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then-current version of these terms of service.',
  },
  {
    title: '9 Governing Law',
    text: 'These terms and conditions are governed by and construed in accordance with the laws of Norway and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
  },
];

function Impressum() {
  return (
    <section className="page-shell">
      <div className="container narrow-block">
        <header className="page-header">
          <h1>Impressum</h1>
        </header>

        <div className="legal-content">
          <section className="terms-block" aria-label="Terms and Conditions">
            {terms.map((item) => (
              <section key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </section>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}

export default Impressum;
