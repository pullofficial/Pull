export default function LoginPage() {
  return (
    <main className="container" style={{ maxWidth: 560, padding: "clamp(36px, 9vw, 76px) 0" }}>
      <a href="/" aria-label="Back to Pull home">← Back to pull</a>
      <section className="feature" style={{ marginTop: 24, padding: "clamp(22px, 5vw, 36px)" }}>
        <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>MEMBER SIGN-IN · COMING LATER</span>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 8vw, 46px)", color: "#641b3b", margin: "14px 0 8px" }}>Welcome back.</h1>
        <p className="muted" style={{ lineHeight: 1.75 }}>Secure sign-in is being prepared. Login is not active, and this page will not ask you for a password or collect account details.</p>

        <div className="hero-bg" style={{ borderRadius: 18, padding: 18, marginTop: 22 }}>
          <strong style={{ color: "#641b3b" }}>What needs to be ready first</strong>
          <ul style={{ color: "#68525d", lineHeight: 1.9, paddingLeft: 20, marginBottom: 0 }}>
            <li>Secure account authentication and recovery.</li>
            <li>Independent age assurance before member access.</li>
            <li>Protected sessions and server-side access checks.</li>
          </ul>
        </div>

        <a className="btn btn-primary" href="/join" style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>Explore early access</a>
        <a href="/safety" style={{ display: "block", textAlign: "center", marginTop: 18 }}>Read the safety centre</a>
      </section>
      <p className="muted" style={{ fontSize: 12, textAlign: "center", marginTop: 18 }}>Adults 18+ only. Do not enter passwords or identity documents on this preview page.</p>
    </main>
  );
}
