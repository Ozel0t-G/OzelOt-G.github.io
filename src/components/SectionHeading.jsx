function SectionHeading({ title, children }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export default SectionHeading;
