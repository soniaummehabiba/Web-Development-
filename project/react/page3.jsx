export default function App() {
  return (
    <div className="container">
      <h1>⚡ Marketing Hub™</h1>
      <p className="subtitle">
        Everything you need to capture leads and turn them into customers.
        <Link to="/page-4"> Calculate your price ↓</Link>
      </p>

      <div className="pricing-wrapper">

        <div className="card">
          <h3>Starter</h3>
          <p className="starts">Starts at</p>
          <h2>$45<span>/mo</span></h2>
          <p className="billing">billed at $540/yr</p>
          <button className="cta">Buy now</button>
        </div>

        <div className="card highlight">
          <h3>Professional</h3>
          <p className="starts">Starts at</p>
          <h2>$800<span>/mo</span></h2>
          <p className="billing">billed at $9,600/yr</p>
          <button className="cta">Talk to Sales</button>
        </div>

        <div className="card">
          <h3>Enterprise</h3>
          <p className="starts">Starts at</p>
          <h2>$3,200<span>/mo</span></h2>
          <p className="billing">billed at $38,400/yr</p>
          <button className="cta">Talk to Sales</button>
        </div>

      </div>
    </div>
  );
}
