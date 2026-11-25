const steps = [
  { number: '01', title: 'Create your account', detail: 'Choose a display name and use a secure sign-in method.' },
  { number: '02', title: 'Confirm your age', detail: 'Complete an approved age-assurance check before accessing member features.' },
  { number: '03', title: 'Build your profile', detail: 'Share only what you are comfortable making visible to other verified adults.' }
];

export default function Join() {
  return (
    <main className="container" style={{ maxWidth: 760, padding: '44px 0 72px' }}>
      <a href="/" aria-label="Back to Pull home">← Back to pull</a>
      <section className="feature" style={{ marginTop: 22, padding: 'clamp(22px, 5vw, 42px)' }}>
        <span style={{ fontWeight: 900, color: '#f43f70', letterSpacing: 1 }}>PULL · EARLY ACCESS</span>
        <h1 className="serif" style={{ fontSize: 'clamp(34px, 7vw, 48px)', color: '#641b3b', margin: '12px 0' }}>Your next connection starts with safety.</h1>
        <p className="muted" style={{ lineHeight: 1.75, maxWidth: 590 }}>We are preparing Pull for adults who want to meet, connect and have fun with respect at the centre. Registration is not open yet.</p>
        <div aria-label="Planned registration steps" style={{ display: 'grid', gap: 14, marginTop: 28 }}>
          {steps.map((step) => (
            <div key={step.number} style={{ display: 'grid', gridTemplateColumns: '46px 1fr', gap: 14, alignItems: 'start', padding: 16, border: '1px solid #f3dce4', borderRadius: 18, background: '#fff' }}>
              <span aria-hidden="true" style={{ color: '#f43f70', fontWeight: 900, fontSize: 18 }}>{step.number}</span>
              <div><h2 style={{ color: '#641b3b', fontSize: 17, margin: '0 0 5px' }}>{step.title}</h2><p className="muted" style={{ margin: 0, lineHeight: 1.6 }}>{step.detail}</p></div>
            </div>
          ))}
        </div>
        <div role="status" style={{ marginTop: 24, padding: 18, borderRadius: 16, background: '#fff1f5', border: '1px solid #f4c8d5' }}>
          <strong style={{ color: '#641b3b' }}>Registration is not available yet.</strong>
          <p style={{ margin: '7px 0 0', lineHeight: 1.65, color: '#786b72' }}>No account can be created and no personal information is collected here. A date-of-birth checkbox alone will not be treated as age verification.</p>
        </div>
        <p className="muted" style={{ fontSize: 12, marginTop: 20 }}>Adults 18+ only. Access will depend on completed age assurance, safety checks and applicable local requirements.</p>
      </section>
    </main>
  );
}
