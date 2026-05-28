import { Link } from 'react-router-dom';
import TopicPills from './TopicPills.jsx';

function NoteList({ posts, compact = false }) {
  return (
    <div className={compact ? 'note-list note-list-compact' : 'note-list'}>
      {posts.map((post) => (
        <article className="note-row" key={post.slug}>
          <div>
            <h3>
              <Link to={`/notes/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.description}</p>
          </div>
          <div className="note-meta">
            <time dateTime={post.date}>{post.formattedDate}</time>
            {!compact && <span>{post.readingTime}</span>}
          </div>
          <TopicPills topics={compact ? post.tags.slice(0, 1) : post.tags} />
        </article>
      ))}
    </div>
  );
}

export default NoteList;
