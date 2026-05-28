import { Link } from 'react-router-dom';
import TopicPills from './TopicPills.jsx';

function ArticleList({ posts, compact = false }) {
  return (
    <div className={compact ? 'article-list article-list-compact' : 'article-list'}>
      {posts.map((post) => (
        <article className="article-row" key={post.slug}>
          <div>
            <h3>
              <Link to={`/articles/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.description}</p>
          </div>
          <div className="article-meta">
            <time dateTime={post.date}>{post.formattedDate}</time>
            {!compact && <span>{post.readingTime}</span>}
          </div>
          <TopicPills topics={compact ? post.tags.slice(0, 1) : post.tags} />
        </article>
      ))}
    </div>
  );
}

export default ArticleList;
