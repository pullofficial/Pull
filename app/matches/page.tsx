export default function MatchesPage() {
  return (
    <main className="container" style={{ maxWidth: 820, padding: "34px 0 72px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <a href="/dashboard">← Member space</a>
        <a href="/discover">Explore discovery</a>
      </header>

      <section className="feature" style={{ marginTop: 22, padding: "clamp(20px, 5vw, 34px)" }}>
        <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>MATCHES · PREVIEW ONLY</span>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 8vw, 48px)", color: "#641b3b", lineHeight: 1.12, marginBottom: 10 }}>Mutual connections.</h1>
        <p className="muted" style={{ lineHeight: 1.8 }}>A match should happen only when two real, eligible members express mutual interest. Matching is not active in this preview.</p>

        <div className="hero-bg" style={{ borderRadius: 20, padding: "clamp(20px, 5vw, 30px)", marginTop: 22, textAlign: "center" }}>
          <div aria-hidden="true" style={{ fontSize: 42 }}>💗</div>
          <h2 className="serif" style={{ color: "#641b3b", fontSize: 28, margin: "10px 0" }}>Your connections will appear here</h2>
          <p style={{ color: "#68525d", lineHeight: 1.75, maxWidth: 520, margin: "0 auto 20px" }}>There are no real matches to show yet. This page does not create likes, reveal member profiles or send messages.</p>
          <a className="btn btn-primary" href="/discover">Preview discovery</a>
        </div>
      </section>

      <section aria-labelledby="match-readiness" style={{ marginTop: 28 }}>
        <h2 id="match-readiness" style={{ color: "#641b3b", fontSize: 21 }}>Before matching can open</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 12 }}>
          {[
            ["Adult-only access", "Trusted age assurance must be completed before member access."],
            ["Real mutual consent", "Both members must choose to connect; no automatic matching."],
            ["Safety controls", "Blocking, reporting and moderation must be operational."],
            ["Private conversations", "Secure messaging and abuse-prevention controls must be tested."]
          ].map(([title, detail]) => (
            <article className="feature" key={title} style={{ padding: 18 }}>
              <h3 style={{ color: "#641b3b", fontSize: 16, marginTop: 0 }}>{title}</h3>
              <p className="muted" style={{ lineHeight: 1.65, marginBottom: 0 }}>{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <p className="muted" style={{ fontSize: 12, marginTop: 22 }}>Preview only. No matching, member data or messaging is live.</p>
    </main>
  );
}
