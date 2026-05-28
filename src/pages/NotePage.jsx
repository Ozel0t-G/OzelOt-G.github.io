import ReactMarkdown from 'react-markdown';
import { Link, Navigate, useParams } from 'react-router-dom';
import TopicPills from '../components/TopicPills.jsx';
import { getPostBySlug, getPosts } from '../utils/posts.js';

function stripMarkdownTitle(content) {
  return content.replace(/^# .+\n+/, '');
}

function NotePage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/not-found" replace />;
  }

  const related = getPosts().filter((item) => item.slug !== post.slug).slice(0, 3);
  const description =
    post.slug === 'false-positives-business-problem'
      ? `${post.description} Here’s why false positives are more than an inconvenience.`
      : post.description;

  return (
    <article className="note-page">
      <div className="note-container">
        <Link className="back-link text-link" to="/notes">
          <span aria-hidden="true">←</span> Back to notes
        </Link>
        <TopicPills topics={post.tags.slice(0, 1)} />
        <h1>{post.title}</h1>
        <div className="note-detail-meta">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span>{post.readingTime}</span>
        </div>
        <p className="note-description">{description}</p>
        <hr />
        <div className="markdown-body">
          <ReactMarkdown>{stripMarkdownTitle(post.content)}</ReactMarkdown>
        </div>
        <div className="note-bottom-tags">
          <TopicPills topics={post.tags} />
        </div>
        <section className="more-reading" aria-labelledby="more-reading-title">
          <h2 id="more-reading-title">More reading</h2>
          <div className="more-reading-grid">
            {related.map((item) => (
              <Link to={`/notes/${item.slug}`} key={item.slug}>
                <span>{item.formattedDate}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export default NotePage;
