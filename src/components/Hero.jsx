import React from 'react'
export default function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <h1>Build Your Ideal<br/><span>Development Stack</span></h1>
      <p>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
      <div className="hero-actions"><a href="#technologies" className="primary-btn">Explore Technologies</a><a href="#about" className="secondary-btn">Learn More</a></div>
    </div>
    <div className="hero-art"><img src="/assets/banner-stack.png" alt="Illustration of a layered development technology stack" /></div>
  </section>
}
