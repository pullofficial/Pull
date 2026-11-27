const controls = [
  { title: "Sign-in and recovery", status: "Not connected", detail: "Secure sign-in, multi-factor options and account recovery need a trusted authentication service." },
  { title: "Age assurance", status: "Not connected", detail: "A trusted provider must confirm adult eligibility server-side before member features become available." },
  { title: "Download your data", status: "Not available", detail: "A verified export process must let members access their personal information in a portable format." },
  { title: "Delete your account", status: "Not available", detail: "A deletion workflow must remove or appropriately anonymise account data and define backup expiry and legal retention exceptions." },
  { title: "Privacy requests", status: "Not available", detail: "A secure request process must support access, correction, deletion and other rights applicable in each member's location." }
];

export default function AccountPage() {
  return (
    <main className="container" style={{ maxWidth: 820, padding: "34px 0 72px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <a href="/dashboard">← Member space</a>
        <a href="/settings">Privacy settings</a>
      </header>
      <section style={{ margin: "24px 0" }}>
        <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>ACCOUNT CENTRE · PREVIEW</span>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 7vw, 46px)", color: "#641b3b", marginBottom: 8 }}>Your account. Your data.</h1>
        <p className="muted" style={{ lineHeight: 1.8 }}>This page explains the account and privacy controls Pull intends to provide. No account is connected here, and no personal data can be exported or deleted from this preview.</p>
      </section>

      <section aria-label="Account control availability" style={{ display: "grid", gap: 14 }}>
        {controls.map((item) => (
          <article className="feature" key={item.title} style={{ padding: "clamp(18px, 4vw, 24px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <h2 style={{ color: "#641b3b", fontSize: 19, margin: 0 }}>{item.title}</h2>
              <span className="pill" style={{ fontSize: 12 }} aria-label={item.status}>{item.status}</span>
            </div>
            <p className="muted" style={{ lineHeight: 1.7, marginBottom: 0 }}>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="hero-bg" style={{ borderRadius: 20, padding: 22, marginTop: 22 }}>
        <h2 style={{ color: "#641b3b", marginTop: 0 }}>A promise before launch</h2>
        <p style={{ color: "#68525d", lineHeight: 1.8, marginBottom: 0 }}>Pull must not ask members to trust controls that do not work. Account access, age checks, privacy requests, data deletion and security protections must be implemented and tested before real registration opens.</p>
      </section>
      <nav aria-label="Related information" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 22 }}>
        <a href="/privacy">Privacy notice</a>
        <a href="/terms">Terms</a>
        <a href="/guidelines">Community guidelines</a>
        <a href="/safety">Safety centre</a>
      </nav>
      <p className="muted" style={{ fontSize: 12, marginTop: 18 }}>This is product information only, not a legal guarantee or an active privacy-request channel. For urgent safety concerns, contact the appropriate local emergency service.</p>
    </main>
  );
}
