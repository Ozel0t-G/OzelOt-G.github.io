import ArticleList from '../components/ArticleList.jsx';
import { getPosts } from '../utils/posts.js';

function Articles() {
  return (
    <section className="page-shell">
      <div className="container">
        <header className="page-header">
          <h1>Articles</h1>
          <p>
            Notes and thoughts on security operations, incident response, detection engineering,
            and governance.
          </p>
        </header>
        <ArticleList posts={getPosts()} />
      </div>
    </section>
  );
}

export default Articles;
