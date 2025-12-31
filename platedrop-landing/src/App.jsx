import React from "react";

const IOS_APP_URL = "https://apps.apple.com/us/app/platedrop/id6749280954";

export default function App() {
  return (
    <>
      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="page">
        {/* NAV */}
        <header className="navbar">
          <div className="container nav-inner">
            <div className="logo">PlateDrop</div>

            <nav className="nav-links">
              <a href="#how">How It Works</a>
              <a href="#eaters">For Eaters</a>
              <a href="#cooks">For Cooks</a>
            </nav>

            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Download App
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>Your campus private kitchen.</h1>
              <p>
                PlateDrop connects student cooks with hungry peers—authentic,
                affordable homemade meals, right on campus.
              </p>

              <a
                href={IOS_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn primary large"
              >
                Download the App
              </a>

              <div className="subtext">
                Available on App Store & Google Play
              </div>
            </div>

            <div className="hero-image">
              <img src="/images/hero-1.jpg" alt="Student cooking" />
              <div className="hero-badge">
                <span className="dot" />
                Real food by real students
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="how">
          <div className="container">
            <h2>How It Works</h2>

            <div className="steps">
              <div className="step">
                <div className="icon">🔎</div>
                <h3>Discover</h3>
                <p>Browse homemade meals from student cooks near you.</p>
              </div>

              <div className="step">
                <div className="icon">🛒</div>
                <h3>Order</h3>
                <p>Reserve and pay securely in the app.</p>
              </div>

              <div className="step">
                <div className="icon">🎒</div>
                <h3>Pick Up</h3>
                <p>Coordinate pickup on campus and enjoy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="container">
            <div id="eaters" className="feature-row">
              <div className="feature-text">
                <h3>Tired of the dining hall? Get a real meal.</h3>
                <ul>
                  <li>Authentic flavors from student kitchens</li>
                  <li>Affordable, healthier than takeout</li>
                  <li>Support fellow students</li>
                </ul>

                <a
                  href={IOS_APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  Download iOS App
                </a>
              </div>

              <div className="feature-image">
                <img src="/images/food-1.jpg" alt="Homemade food" />
              </div>
            </div>

            <div id="cooks" className="feature-row reverse">
              <div className="feature-text">
                <h3>Share your passion, earn an income.</h3>
                <ul>
                  <li>Set your menu, price, and schedule</li>
                  <li>Simple order & payout management</li>
                  <li>AI-powered recipe inspiration</li>
                </ul>

                <a
                  href={IOS_APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  Start Cooking
                </a>
              </div>

              <div className="feature-image">
                <img src="/images/cook-1.jpg" alt="Student chef" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <div className="cta-box">
              <h2>Ready to join Penn's food community?</h2>

              <div className="cta-actions">
                <a
                  href={IOS_APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn white"
                >
                  Download iOS App
                </a>
                <a className="btn white disabled">Android Coming Soon</a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            © 2025 PlateDrop. Built by students, for students.
          </div>
        </footer>
      </div>

      {/* CSS */}
      <style>{`
        /* ===== HARD RESET (防止任何左偏) ===== */
        html, body {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        #root {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #FFFDFB;
          color: #333;
        }

        /* ===== LAYOUT ===== */
        .page {
          width: 100%;
        }

        .container {
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 24px;
        }

        section {
          padding: 80px 0;
        }

        h1 { font-size: 48px; margin: 0; }
        h2 { font-size: 36px; text-align: center; margin-bottom: 56px; }
        h3 { font-size: 24px; margin-bottom: 12px; }

        p {
          line-height: 1.7;
          color: #666;
        }

        /* ===== BUTTONS ===== */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        .btn.primary {
          background: #F27941;
          color: white;
        }

        .btn.large {
          padding: 15px 30px;
          font-size: 18px;
        }

        .btn.white {
          background: white;
          color: #F27941;
        }

        .btn.disabled {
          opacity: 0.6;
          pointer-events: none;
        }

        /* ===== NAV ===== */
        .navbar {
          position: sticky;
          top: 0;
          background: rgba(255,253,251,0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          z-index: 10;
        }

        .nav-inner {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #F27941;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          font-weight: 600;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
        }

        /* ===== HERO ===== */
        .hero-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .hero-text {
          max-width: 520px;
        }

        .hero-image {
          position: relative;
          max-width: 560px;
          width: 100%;
        }

        .hero-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
        }

        .hero-badge {
          position: absolute;
          left: 16px;
          bottom: 16px;
          background: white;
          padding: 10px 14px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #F27941;
        }

        .subtext {
          margin-top: 12px;
          font-weight: 600;
          color: #555;
        }

        /* ===== STEPS ===== */
        .steps {
          display: flex;
          gap: 28px;
          text-align: center;
        }

        .step {
          flex: 1;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        /* ===== FEATURES ===== */
        .feature-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 80px;
        }

        .feature-row.reverse {
          flex-direction: row-reverse;
        }

        .feature-text {
          max-width: 500px;
        }

        .feature-text ul {
          padding-left: 0;
          list-style: none;
        }

        .feature-text li {
          margin-bottom: 12px;
          padding-left: 22px;
          position: relative;
        }

        .feature-text li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: #F27941;
        }

        .feature-image img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 20px;
        }

        /* ===== CTA ===== */
        .cta-box {
          background: #F27941;
          border-radius: 24px;
          padding: 64px 40px;
          text-align: center;
          color: white;
        }

        .cta-actions {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* ===== FOOTER ===== */
        .footer {
          background: #f8f8f8;
          padding: 40px 0;
          text-align: center;
          font-size: 14px;
          color: #555;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hero-inner,
          .feature-row,
          .feature-row.reverse {
            flex-direction: column;
          }
          .hero-image img { height: 300px; }
          .steps { flex-direction: column; }
        }
      `}</style>
    </>
  );
}