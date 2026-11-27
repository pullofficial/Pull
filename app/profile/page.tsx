"use client";

import { useState } from "react";

const countries = ["Nigeria", "United States", "United Kingdom", "Canada", "Germany", "France", "Portugal", "Spain", "Netherlands", "Australia", "South Africa"];
const choices = ["Travel", "Music", "Food", "Fitness", "Movies", "Art", "Reading", "Photography", "Sports", "Nature"];

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [bio, setBio] = useState("");
  const [intent, setIntent] = useState("Casual dating");
  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(choice: string) {
    setInterests((current) => current.includes(choice)
      ? current.filter((item) => item !== choice)
      : current.length < 5 ? [...current, choice] : current);
  }

  return (
    <main className="container" style={{ maxWidth: 760, padding: "34px 0 70px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <a href="/dashboard">← Member space</a>
        <a href="/safety">Safety guide</a>
      </header>
      <section className="feature" style={{ marginTop: 20, padding: "clamp(18px, 4vw, 30px)" }}>
        <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>PROFILE BUILDER · PREVIEW</span>
        <h1 className="serif" style={{ fontSize: "clamp(34px, 7vw, 44px)", color: "#641b3b", marginBottom: 8 }}>Create your introduction.</h1>
        <p className="muted" style={{ lineHeight: 1.7 }}>Try the profile editor and see a live preview. Your details stay in this page's temporary browser state and are not saved or sent anywhere.</p>

        <div style={{ display: "grid", gap: 17, marginTop: 24 }}>
          <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Display name
            <input className="field" value={name} onChange={(event) => setName(event.target.value)} maxLength={40} placeholder="What should people call you?" autoComplete="nickname" />
            <span className="muted" style={{ fontSize: 12 }}>{name.length}/40 characters</span>
          </label>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 12 }}>
            <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>City (optional)
              <input className="field" value={city} onChange={(event) => setCity(event.target.value)} maxLength={60} placeholder="City or leave blank" autoComplete="address-level2" />
            </label>
            <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Country
              <select className="field" value={country} onChange={(event) => setCountry(event.target.value)}>{countries.map((value) => <option key={value}>{value}</option>)}</select>
            </label>
          </div>
          <p className="muted" style={{ fontSize: 12, margin: "-8px 0 0" }}>For privacy, a live service should show only broad location—not your address or precise GPS position.</p>

          <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>A little about you
            <textarea className="field" rows={4} maxLength={300} value={bio} onChange={(event) => setBio(event.target.value)} placeholder="Share a little about your personality and interests." />
            <span className="muted" style={{ fontSize: 12 }}>{bio.length}/300 characters</span>
          </label>

          <label style={{ display: "grid", gap: 7, fontWeight: 700 }}>Your intention
            <select className="field" value={intent} onChange={(event) => setIntent(event.target.value)}>
              <option>Casual dating</option><option>Meet new people</option><option>Meaningful connection</option>
            </select>
          </label>

          <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
            <legend style={{ fontWeight: 700 }}>Choose up to 5 interests</legend>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
              {choices.map((choice) => {
                const selected = interests.includes(choice);
                return <button key={choice} type="button" aria-pressed={selected} onClick={() => toggleInterest(choice)} className="pill" style={{ cursor: "pointer", borderColor: selected ? "#f43f70" : "#f4c8d5", background: selected ? "#ffe6ed" : "#fff8fa" }}>{selected ? "✓ " : ""}{choice}</button>;
              })}
            </div>
            <p className="muted" aria-live="polite" style={{ fontSize: 12 }}>{interests.length}/5 selected</p>
          </fieldset>

          <section className="feature" aria-label="Live profile preview" style={{ background: "#fff8fa" }}>
            <strong style={{ color: "#641b3b" }}>Live preview · sample only</strong>
            <h2 className="serif" style={{ color: "#641b3b", marginBottom: 5 }}>{name.trim() || "Your name"}{city.trim() ? " · " + city.trim() : ""}</h2>
            <p className="muted">{country} · {intent}</p>
            <p style={{ lineHeight: 1.7, overflowWrap: "anywhere" }}>{bio.trim() || "Your introduction will appear here."}</p>
            <p className="muted" style={{ fontSize: 13 }}>{interests.join(" · ") || "Your interests will appear here."}</p>
          </section>

          <p className="muted" style={{ fontSize: 12 }}>Profile saving is disabled until secure accounts, privacy controls and independent adult age assurance are implemented and tested.</p>
          <button className="btn btn-primary" disabled aria-disabled="true" style={{ opacity: .55 }}>Save profile — coming later</button>
        </div>
      </section>
    </main>
  );
}
