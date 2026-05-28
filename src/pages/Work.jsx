import WorkList from '../components/WorkList.jsx';
import { workItems } from '../data/work.js';

function Work() {
  return (
    <section className="page-shell">
      <div className="container">
        <header className="page-header">
          <h1>Selected Work</h1>
          <p>A small collection of public notes, playbooks, and security-focused work.</p>
        </header>
        <WorkList items={workItems} />
      </div>
    </section>
  );
}

export default Work;
