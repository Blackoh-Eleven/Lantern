import Logo from "../components/logo.jsx";
import "../pages/landingpage.css";

function Landing({onOpenMarket}) {
  return (
    <main className="landing">

      <header className="landing-header">
        <Logo />
      </header>

      <section className="hero">

        <div className="hero-content">
          <p className="eyebrow">MARKET INTELLIGENCE</p>

          <h1>
            Illuminate the
            <span> Market.</span>
          </h1>

          <p className="hero-text">
            Lantern Insight transforms market data into clear,
            meaningful insight — helping you see beyond the noise.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={onOpenMarket}>
              Open Market View
            </button>

            <button className="secondary-btn">
              View insight
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="lantern-glow"></div>

          <div className="market-orbit">
            <span>BTC</span>
            <span>ETH</span>
            <span>SOL</span>
            <span>NDX</span>
          </div>

          <div className="hero-lantern">
            <img src="/lantern.svg" alt="" />
          </div>
        </div>

      </section>

    </main>
  );
}

export default Landing;