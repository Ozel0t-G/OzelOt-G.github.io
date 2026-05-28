import NoteList from '../components/NoteList.jsx';
import { getPosts } from '../utils/posts.js';

function Notes() {
  return (
    <section className="page-shell">
      <div className="container">
        <header className="page-header">
          <h1>Notes</h1>
          <p>
            Notes and thoughts on security operations, incident response, detection engineering,
            and governance.
          </p>
        </header>
        <NoteList posts={getPosts()} />
      </div>
    </section>
  );
}

export default Notes;
