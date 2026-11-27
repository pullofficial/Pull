"use client";

import { useState } from "react";

const reportReasons = [
  "Fake profile or impersonation",
  "Harassment or unwanted contact",
  "Scam or request for money",
  "Threats, coercion or blackmail",
  "Suspected underage user",
  "Non-consensual or inappropriate content",
  "Other safety concern"
];

export default function SafetyPage() {
  const [reported, setReported] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [reason, setReason] = useState(reportReasons[0]);
  const [details, setDetails] = useState("");
  const [target, setTarget] = useState("");

  function resetReport() {
    setReported(false);
    setReason(reportReasons[0]);
    setDetails("");
    setTarget("");
  }

  return (
    <main className="container" style={{ maxWidth: 820, padding: "34px 0 72px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <a href="/dashboard">← Member space</a>
        <a href="/guidelines">Community guidelines</a>
      </header>

      <section style={{ margin: "24px 0" }}>
        <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>SAFETY CENTRE · INTERACTIVE PREVIEW</span>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 7vw, 46px)", color: "#641b3b", marginBottom: 8 }}>Your safety matters.</h1>
        <p className="muted" style={{ lineHeight: 1.8 }}>Pull is being designed for consenting adults aged 18 and over. This page demonstrates possible reporting and blocking flows. Nothing submitted here reaches a moderation team or changes an account.</p>
      </section>

      <section className="feature" style={{ marginBottom: 20 }}>
        <h2 style={{ color: "#641b3b", marginTop: 0 }}>Report a concern</h2>
        <p className="muted" style={{ lineHeight: 1.7 }}>In the live service, reports must be securely submitted for review by trained moderators. This form is only a local demonstration.</p>
        {reported ? (
          <div className="hero-bg" style={{ padding: 18, borderRadius: 16 }} role="status">
            <strong style={{ color: "#641b3b" }}>Demo report preview</strong>
            <dl style={{ display: "grid", gridTemplateColumns: "minmax(110px,auto) 1fr", gap: "8px 12px", color: "#68525d", overflowWrap: "anywhere" }}>
              <dt>Reference</dt><dd style={{ margin: 0 }}>{target.trim() || "Not provided"}</dd>
              <dt>Reason</dt><dd style={{ margin: 0 }}>{reason}</dd>
              <dt>Details</dt><dd style={{ margin: 0, whiteSpace: "pre-wrap" }}>{details.trim() || "Not provided"}</dd>
            </dl>
            <p style={{ color: "#68525d", lineHeight: 1.6 }}>This preview exists only in temporary page state. It was not sent, stored or reviewed. Do not enter real people's sensitive information here.</p>
            <button className="btn btn-dark" type="button" onClick={resetReport}>Clear demo report</button>
          </div>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); setReported(true); }} style={{ display: "grid", gap: 14 }}>
            <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Profile or content reference (optional)
              <input className="field" value={target} onChange={(event) => setTarget(event.target.value)} maxLength={80} placeholder="Example reference only" />
            </label>
            <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Why are you reporting?
              <select className="field" value={reason} onChange={(event) => setReason(event.target.value)}>{reportReasons.map((item) => <option key={item}>{item}</option>)}</select>
            </label>
            <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Additional details (optional)
              <textarea className="field" rows={4} maxLength={1000} value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Use fictional example details only. Do not include passwords or sensitive personal information." />
              <span className="muted" style={{ fontSize: 12 }}>{details.length}/1000 characters</span>
            </label>
            <button className="btn btn-primary" type="submit">Preview report</button>
          </form>
        )}
        <p className="muted" style={{ fontSize: 12, marginBottom: 0 }}>This is not a real reporting channel and is not monitored. For immediate danger, contact local emergency services.</p>
      </section>

      <section className="feature" style={{ marginBottom: 20 }}>
        <h2 style={{ color: "#641b3b", marginTop: 0 }}>Block unwanted contact</h2>
        <p className="muted" style={{ lineHeight: 1.7 }}>In the live product, blocking should prevent contact and hide the relevant profiles from each other, without notifying the blocked person.</p>
        <button className="btn btn-dark" type="button" aria-pressed={blocked} onClick={() => setBlocked((value) => !value)}>{blocked ? "Undo demo block" : "Preview blocking"}</button>
        <p className="muted" role="status" style={{ fontSize: 13, marginBottom: 0 }}>{blocked ? "Demo state: a fictional sample profile is marked blocked on this page only." : "No sample profile is blocked in this preview."}</p>
      </section>

      <section className="feature">
        <h2 style={{ color: "#641b3b", marginTop: 0 }}>Our safety commitments</h2>
        <ul style={{ lineHeight: 2, paddingLeft: 22 }}>
          <li>Adult-only access with robust age assurance before member access.</li>
          <li>Clear consent and boundary expectations.</li>
          <li>Working block and report tools before public launch.</li>
          <li>Moderation processes for scams, harassment, coercion and abuse.</li>
          <li>Privacy-conscious location display; no public precise location.</li>
        </ul>
        <h3 style={{ color: "#641b3b" }}>Meet safely</h3>
        <p className="muted" style={{ lineHeight: 1.8 }}>Keep conversations on-platform until you feel comfortable, never send money to someone you have not met, tell someone you trust before meeting, and choose a public place for a first meeting. Trust your instincts and leave any situation that feels unsafe.</p>
      </section>
      <p className="muted" style={{ fontSize: 12, marginTop: 20 }}>Reporting, blocking, age verification and moderation are not live. Production requires secure server-side storage, moderator access controls, escalation procedures and tested enforcement before members are accepted.</p>
    </main>
  );
}
