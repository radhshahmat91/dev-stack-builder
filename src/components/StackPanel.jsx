import React from 'react'
export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  return <aside className="stack-panel">
    <div className="stack-heading"><div><h2>Your Stack</h2><p>{stack.length} Technology{stack.length === 1 ? '' : 'ies'} Selected</p></div></div>
    {stack.length === 0 ? <div className="empty-stack"><div className="empty-icon">＋</div><p>Your stack is empty</p><span>Add technologies to start building your stack.</span></div> : <div className="stack-list">
      {stack.map(item => <div className="stack-item" key={item.id}><img src={item.icon} alt=""/><div><strong>{item.name}</strong><small>{item.category}</small></div><button aria-label={`Remove ${item.name}`} onClick={() => onRemove(item.id)}>×</button></div>)}
    </div>}
    <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
  </aside>
}
