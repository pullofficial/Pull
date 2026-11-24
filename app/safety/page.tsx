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

  function submitPreview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReported(true);
  }

  return <main className="container" style={{ maxWidth: 820, padding: "42px 0 72px" }}>
    <a href="/">← Back to pull</a>
    <section style={{ margin: "24px 0" }}>
      <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>SAFETY CENTRE · INTERACTIVE PREVIEW</span>
      <h1 className="serif" style={{ fontSize: 46, color: "#641b3b", marginBottom: 8 }}>Your safety matters.</h1>
      <p className="muted" style={{ lineHeight: 1.8 }}>pull is being designed for consenting adults aged 18 and over. This page demonstrates how reporting and blocking could look. Nothing submitted here reaches a moderation team or changes an account.</p>
    </section>

    <section className="feature" style={{ marginBottom: 20 }}>
      <h2 style={{ color: "#641b3b", marginTop: 0 }}>Report a concern</h2>
      <p className="muted" style={{ lineHeight: 1.7 }}>Use a report to flag behaviour or content that may breach community rules. In a live service, reports should be reviewed by trained moderators.</p>
      {reported ? <div className="hero-bg" style={{ padding: 18, borderRadius: 16 }} role="status">
        <strong style={{ color: "#641b3b" }}>Preview report recorded on this page</strong>
        <p style={{ color: "#68525d", marginBottom: 8 }}>Reason: {reason}</p>
        <p style={{ color: "#68525d", marginTop: 0 }}>This is temporary browser state only. No report was sent or stored.</p>
        <button className="btn btn-dark" type="button" onClick={() => setReported(false)}>Create another demo report</button>
      </div> : <form onSubmit={submitPreview} style={{ display: "grid", gap: 14 }}>
        <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Profile or content reference (optional)
          <input className="field" value={target} onChange={e => setTarget(e.target.value)} maxLength={80} placeholder="Demo username or description" />
        </label>
        <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Why are you reporting?
          <select className="field" value={reason} onChange={e => setReason(e.target.value)}>{reportReasons.map(item => <option key={item}>{item}</option>)}</select>
        </label>
        <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Additional details (optional)
          <textarea className="field" rows={4} maxLength={1000} value={details} onChange={e => setDetails(e.target.value)} placeholder="Describe what happened. Avoid sharing passwords or unnecessary personal information." />
        </label>
        <button className="btn btn-primary" type="submit">Preview report</button>
      </form>}
      <p className="muted" style={{ fontSize: 12, marginBottom: 0 }}>Do not use this preview to report a real person or an emergency. It is not monitored.</p>
    </section>

    <section className="feature" style={{ marginBottom: 20 }}>
      <h2 style={{ color: "#641b3b", marginTop: 0 }}>Block unwanted contact</h2>
      <p className="muted" style={{ lineHeight: 1.7 }}>In the live product, blocking should prevent contact and hide the relevant profiles from each other, without notifying the blocked person.</p>
      <button className="btn btn-dark" type="button" onClick={() => setBlocked(v => !v)}>{blocked ? "Undo demo block" : "Preview blocking"}</button>
      <p className="muted" role="status" style={{ fontSize: 13, marginBottom: 0 }}>{blocked ? "Demo state: this sample profile is marked blocked on this page only." : "No profile is currently blocked in this preview."}</p>
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
    <p className="muted" style={{ fontSize: 12, marginTop: 20 }}>Reporting, blocking, age verification and moderation are not live. A production system needs secure server-side storage, moderator access controls, escalation procedures and tested enforcement before members are accepted.</p>
  </main>;
}
