const tiles = [
  { icon: '💞', title: 'Discover people', desc: 'Explore sample profiles and connection intentions.', href: '/discover', cta: 'Explore discovery' },
  { icon: '✨', title: 'Build your profile', desc: 'Preview how your introduction could look to other members.', href: '/profile', cta: 'Preview profile' },
  { icon: '💗', title: 'Matches', desc: 'See how mutual connections may appear once matching is active.', href: '/matches', cta: 'View match preview' },
  { icon: '🛡️', title: 'Safety centre', desc: 'Read the planned safety principles and how to get help.', href: '/safety', cta: 'Read safety guide' },
  { icon: '⚙️', title: 'Privacy settings', desc: 'Preview visibility and privacy preferences. Changes are not saved.', href: '/settings', cta: 'Preview settings' },
  { icon: '🔐', title: 'Account & data', desc: 'Review planned sign-in, age assurance, data access and deletion controls.', href: '/account', cta: 'View account centre' }
];

export default function DashboardPage() {
  return (
    <main className="container" style={{ padding: '30px 0 70px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <a href="/" aria-label="Pull home" style={{ fontSize: 27, fontWeight: 900, color: '#641b3b' }}>pull<span style={{ color: '#f43f70' }}>👙</span></a>
        <nav aria-label="Main navigation" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', fontWeight: 700, fontSize: 14 }}>
          <a href="/discover">Discover</a><a href="/matches">Matches</a><a href="/profile">Profile</a><a href="/settings">Settings</a><a href="/safety">Safety</a>
        </nav>
      </header>

      <section className="hero-bg" style={{ borderRadius: 28, padding: 'clamp(24px, 5vw, 42px)', margin: '26px 0' }}>
        <span className="pill" style={{ color: '#a12b53', fontWeight: 800 }}>MEMBER SPACE · PREVIEW</span>
        <h1 className="serif" style={{ fontSize: 'clamp(36px, 7vw, 60px)', color: '#4a1830', margin: '18px 0 8px' }}>Welcome to pull.</h1>
        <p style={{ maxWidth: 650, lineHeight: 1.7, color: '#68525d' }}>Your connection space is taking shape. Explore the previews and see how Pull is being designed for adults to meet with safety and respect.</p>
        <p style={{ fontWeight: 900, letterSpacing: 2, color: '#641b3b' }}>HOOKUP • CONNECT • FUN</p>
        <a className="btn btn-dark" href="/join" style={{ marginTop: 8 }}>Get early-access updates</a>
      </section>

      <section aria-labelledby="space-heading">
        <h2 id="space-heading" className="serif" style={{ color: '#641b3b', fontSize: 28, marginBottom: 18 }}>Your connection space</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 18 }}>
          {tiles.map((tile) => (
            <article key={tile.title} className="feature">
              <div aria-hidden="true" style={{ fontSize: 34 }}>{tile.icon}</div>
              <h3 style={{ color: '#641b3b', fontSize: 21 }}>{tile.title}</h3>
              <p className="muted" style={{ lineHeight: 1.7 }}>{tile.desc}</p>
              <a className="btn btn-primary" href={tile.href} style={{ marginTop: 8 }}>{tile.cta} →</a>
            </article>
          ))}
        </div>
      </section>

      <aside className="feature" aria-label="Preview limitations" style={{ marginTop: 22 }}>
        <strong style={{ color: '#a12b53' }}>Preview only — not a live member account</strong>
        <p className="muted" style={{ lineHeight: 1.7, marginBottom: 0 }}>No accounts, likes, matches, chats or profile information are saved or connected. Secure authentication, independent age assurance, moderation and privacy controls must be implemented and tested before launch.</p>
      </aside>

      <footer style={{ marginTop: 28, display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 13 }}>
        <a href="/guidelines">Community guidelines</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/safety">Safety</a><a href="/account">Account centre</a>
      </footer>
    </main>
  );
}
