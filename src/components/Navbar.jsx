import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Home','#home'],['Technologies','#technologies'],['Projects','#projects'],['About','#about'],['Contact','#contact']]
  return <header className="navbar">
    <div className="nav-inner">
      <button className="mobile-menu" aria-label="Open navigation" onClick={() => setOpen(!open)}><img src="/assets/hamburger.png" alt="" /></button>
      <a href="#home" className="brand"><img src="/assets/logo-text.png" alt="Dev Stack" /></a>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className={label === 'Home' ? 'active' : ''}>{label}</a>)}
      </nav>
      <div className="auth-actions"><a href="#signin" className="sign-in">Sign In</a><a href="#signup" className="sign-up">Sign Up</a></div>
    </div>
  </header>
}
