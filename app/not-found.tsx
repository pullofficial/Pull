export default function NotFound() {
  return (
    <main className="container" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', padding: '48px 0' }}>
      <section className="feature" style={{ width: 'min(100%, 560px)', textAlign: 'center', padding: 36 }}>
        <div aria-hidden="true" style={{ fontSize: 48 }}>💗</div>
        <p style={{ color: '#f43f70', fontWeight: 900, letterSpacing: 2, marginBottom: 8 }}>PULL · 404</p>
        <h1 className="serif" style={{ color: '#641b3b', fontSize: 42, margin: '8px 0 12px' }}>This page wandered off.</h1>
        <p className="muted" style={{ lineHeight: 1.7 }}>The link may be out of date, or this page may not exist. You can head back to Pull and keep exploring.</p>
        <a className="btn btn-primary" href="/" style={{ marginTop: 18 }}>Back to home</a>
      </section>
    </main>
  );
}
