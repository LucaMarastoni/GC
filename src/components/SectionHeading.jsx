function SectionHeading({ eyebrow, title, text, align = "start" }) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default SectionHeading;
