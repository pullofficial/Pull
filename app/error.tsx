'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Keep diagnostics in the browser console; never expose internal details to members.
    console.error('Pull page error', error);
  }, [error]);

  return (
    <main className="container" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', padding: '48px 0' }}>
      <section className="feature" role="alert" style={{ width: 'min(100%, 560px)', textAlign: 'center', padding: 36 }}>
        <div aria-hidden="true" style={{ fontSize: 44 }}>💗</div>
        <p style={{ color: '#f43f70', fontWeight: 900, letterSpacing: 2 }}>PULL</p>
        <h1 className="serif" style={{ color: '#641b3b', fontSize: 36, margin: '8px 0 12px' }}>Something went wrong.</h1>
        <p className="muted" style={{ lineHeight: 1.7 }}>This page could not load properly. Try again, or return to the home page.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
          <button className="btn btn-primary" onClick={() => reset()}>Try again</button>
          <a className="btn btn-dark" href="/">Home</a>
        </div>
      </section>
    </main>
  );
}
