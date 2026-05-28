function TopicPills({ topics }) {
  return (
    <div className="pill-list" aria-label="Topics">
      {topics.map((topic) => (
        <span className="pill" key={topic}>
          {topic}
        </span>
      ))}
    </div>
  );
}

export default TopicPills;
