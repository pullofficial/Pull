"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [visibility, setVisibility] = useState("hidden");
  const [location, setLocation] = useState("city");
  const [updates, setUpdates] = useState(true);
  const [online, setOnline] = useState(false);

  function resetPreview() {
    setVisibility("hidden");
    setLocation("city");
    setUpdates(true);
    setOnline(false);
  }

  const toggleStyle = (active: boolean) => ({
    minWidth: 76,
    border: "1px solid #e8cbd5",
    borderRadius: 999,
    padding: "9px 14px",
    background: active ? "#641b3b" : "#fff",
    color: active ? "#fff" : "#641b3b",
    fontWeight: 800,
    cursor: "pointer"
  });

  return (
    <main className="container" style={{ maxWidth: 760, padding: "34px 0 72px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <a href="/dashboard">← Member space</a>
        <a href="/safety">Safety centre</a>
      </header>
      <section className="feature" style={{ marginTop: 20, padding: "clamp(18px, 4vw, 30px)" }}>
        <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>PRIVACY SETTINGS · PREVIEW</span>
        <h1 className="serif" style={{ fontSize: "clamp(34px, 7vw, 44px)", color: "#641b3b", marginBottom: 8 }}>Your privacy, your choice.</h1>
        <p className="muted" style={{ lineHeight: 1.7 }}>Try the planned privacy controls. Every choice is temporary and resets when you leave this page; nothing is saved to an account.</p>

        <div style={{ display: "grid", gap: 24, marginTop: 28 }}>
          <section>
            <h2 style={{ fontSize: 18, color: "#641b3b" }}>Profile visibility</h2>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>Choose whether your profile would be eligible to appear in discovery.</p>
            <div role="group" aria-label="Profile visibility" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button type="button" aria-pressed={visibility === "hidden"} onClick={() => setVisibility("hidden")} style={toggleStyle(visibility === "hidden")}>Hidden</button>
              <button type="button" aria-pressed={visibility === "discoverable"} onClick={() => setVisibility("discoverable")} style={toggleStyle(visibility === "discoverable")}>Discoverable</button>
            </div>
            <p className="muted" aria-live="polite" style={{ fontSize: 12 }}>{visibility === "hidden" ? "Preview: your profile is hidden from discovery." : "Preview: your profile could be eligible for discovery only after independent age verification and safety checks."}</p>
          </section>

          <section>
            <label htmlFor="location-detail" style={{ display: "block", fontWeight: 800, color: "#641b3b" }}>Location detail</label>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>A live service should never display your home address or precise GPS coordinates.</p>
            <select id="location-detail" className="field" value={location} onChange={(event) => setLocation(event.target.value)}>
              <option value="country">Country only</option>
              <option value="city">City and country</option>
              <option value="none">Do not show location</option>
            </select>
          </section>

          <section style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
              <div><strong>Product updates</strong><p className="muted" style={{ fontSize: 13, margin: "5px 0 0" }}>Optional product and feature notices.</p></div>
              <button type="button" role="switch" aria-checked={updates} aria-label="Product updates" onClick={() => setUpdates((value) => !value)} style={toggleStyle(updates)}>{updates ? "On" : "Off"}</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
              <div><strong>Show online status</strong><p className="muted" style={{ fontSize: 13, margin: "5px 0 0" }}>Keep your activity status private by default.</p></div>
              <button type="button" role="switch" aria-checked={online} aria-label="Show online status" onClick={() => setOnline((value) => !value)} style={toggleStyle(online)}>{online ? "On" : "Off"}</button>
            </div>
          </section>

          <section className="hero-bg" aria-live="polite" style={{ padding: 18, borderRadius: 18 }}>
            <strong style={{ color: "#641b3b" }}>Your current preview</strong>
            <p style={{ fontSize: 13, color: "#68525d", lineHeight: 1.8, marginBottom: 0 }}>Visibility: {visibility} · Location: {location === "none" ? "hidden" : location} · Product updates: {updates ? "on" : "off"} · Online status: {online ? "on" : "off"}</p>
          </section>

          <button type="button" className="btn btn-dark" onClick={resetPreview}>Reset preview settings</button>
          <p className="muted" style={{ fontSize: 12, marginBottom: 0 }}>These controls do not change a real account. Saving preferences, account deletion, data export and consent management are not implemented yet.</p>
        </div>
      </section>
    </main>
  );
}
