function WorkList({ items }) {
  return (
    <div className="work-grid">
      {items.map((item) => (
        <article className="work-item" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a className="text-link" href={item.link}>
            {item.linkLabel} <span aria-hidden="true">→</span>
          </a>
        </article>
      ))}
    </div>
  );
}

export default WorkList;
