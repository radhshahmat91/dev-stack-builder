import React from 'react'
export default function TechnologyCard({ technology, added, onAdd }) {
  return <article className="tech-card">
    <div className="card-top"><div className="tech-icon"><img src={technology.icon} alt="" onError={e => {e.currentTarget.style.display='none'}} /></div><span className={`badge badge-${technology.category.toLowerCase()}`}>{technology.badge}</span></div>
    <h3>{technology.name}</h3>
    <p>{technology.description}</p>
    <div className="meta"><span className="category-chip">{technology.category}</span><span>{technology.difficulty}</span><span className="rating"><b>★</b> {technology.rating}</span></div>
    <button className={added ? 'add-btn added' : 'add-btn'} disabled={added} onClick={() => onAdd(technology)}>{added ? '✓ Added to Stack' : 'Add to Stack'}</button>
  </article>
}
