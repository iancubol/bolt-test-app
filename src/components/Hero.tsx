import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="soundwaves-container">
        <svg className="soundwave soundwave-left" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path className="wave wave-1" d="M 0 250 Q 125 150 250 250 T 500 250" />
          <path className="wave wave-2" d="M 0 250 Q 125 180 250 250 T 500 250" />
          <path className="wave wave-3" d="M 0 250 Q 125 200 250 250 T 500 250" />
          <path className="wave wave-4" d="M 0 250 Q 125 220 250 250 T 500 250" />
        </svg>
        <svg className="soundwave soundwave-right" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path className="wave wave-1" d="M 0 250 Q 125 150 250 250 T 500 250" />
          <path className="wave wave-2" d="M 0 250 Q 125 180 250 250 T 500 250" />
          <path className="wave wave-3" d="M 0 250 Q 125 200 250 250 T 500 250" />
          <path className="wave wave-4" d="M 0 250 Q 125 220 250 250 T 500 250" />
        </svg>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Discover<br />Music Events
        </h1>
        <button className="hero-button">Join the movement</button>
      </div>
    </section>
  );
}
