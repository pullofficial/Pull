export default function Loading() {
  return (
    <main className="container" aria-live="polite" aria-busy="true" style={{ minHeight: '55vh', display: 'grid', placeItems: 'center', padding: '48px 0' }}>
      <div style={{ textAlign: 'center' }}>
        <div aria-hidden="true" style={{ fontSize: 36 }}>💗</div>
        <p style={{ color: '#641b3b', fontWeight: 800 }}>Loading Pull…</p>
        <p className="muted">Please wait a moment.</p>
      </div>
    </main>
  );
}
