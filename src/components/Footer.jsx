import React from 'react'
export default function Footer() {
  return <footer className="footer"><div className="footer-main">
    <div className="footer-brand"><img src="/assets/logo-text.png" alt="Dev Stack"/><p>Curated tools, technologies, and resources for developers building modern software.</p><div className="socials"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
    <FooterLinks title="Product" links={['Home','Technologies','Projects']} />
    <FooterLinks title="Company" links={['About','Contact','Careers']} />
    <FooterLinks title="Legal" links={['Privacy Policy','Terms of Service']} />
  </div><div className="footer-bottom"><span>© 2026 Dev Stack. All rights reserved.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div></div></footer>
}
function FooterLinks({title,links}) { return <div className="footer-links"><h4>{title}</h4>{links.map(l=><a key={l} href="#">{l}</a>)}</div> }
