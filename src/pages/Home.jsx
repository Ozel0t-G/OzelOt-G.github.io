import { Link } from 'react-router-dom';
import ArticleList from '../components/ArticleList.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import TopicPills from '../components/TopicPills.jsx';
import WorkList from '../components/WorkList.jsx';
import { site } from '../data/site.js';
import { topics } from '../data/topics.js';
import { workItems } from '../data/work.js';
import { getPosts } from '../utils/posts.js';

function Home() {
  const posts = getPosts();

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <h1>{site.headline}</h1>
          <p className="hero-subtitle">{site.subtitle}</p>
          <p className="hero-intro">{site.intro}</p>
          <div className="link-row">
            <Link className="text-link" to="/articles">
              Read articles <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" to="/work">
              View selected work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading title="Latest Articles" />
          <ArticleList posts={posts.slice(0, 3)} compact />
          <Link className="section-link text-link" to="/articles">
            Browse all articles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading title="Topics" />
          <TopicPills topics={topics} />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading title="Selected Work" />
          <WorkList items={workItems} />
        </div>
      </section>

      <section className="page-section background-preview">
        <div className="container narrow-block">
          <SectionHeading title="Background" />
          <p>
            I have several years of experience in cybersecurity with a focus on security operations,
            incident response, detection engineering, and security governance. I enjoy turning
            complex problems into clear processes, building effective detections, and helping teams
            make better risk-based decisions.
          </p>
          <Link className="text-link" to="/about">
            More about my background <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
