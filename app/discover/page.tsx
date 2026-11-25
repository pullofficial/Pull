"use client";

import { useMemo, useState } from "react";

type Profile = { id: number; name: string; age: number; city: string; country: string; intent: string; interests: string[]; color: string; bio: string };
const demoProfiles: Profile[] = [
  { id: 1, name: "Amara", age: 27, city: "London", country: "United Kingdom", intent: "Casual dating", interests: ["Travel", "Live music", "Food"], color: "linear-gradient(145deg,#f6a8bd,#8b365e)", bio: "Here for good energy, honest conversations and spontaneous plans." },
  { id: 2, name: "Daniel", age: 30, city: "Toronto", country: "Canada", intent: "Meet new people", interests: ["Fitness", "Movies", "Coffee"], color: "linear-gradient(145deg,#f2c3a6,#9b536b)", bio: "Easygoing, curious and always looking for a new place to explore." },
  { id: 3, name: "Zara", age: 25, city: "Lagos", country: "Nigeria", intent: "Casual dating", interests: ["Art", "Afrobeats", "Brunch"], color: "linear-gradient(145deg,#f4b4c5,#70334f)", bio: "Big on laughter, music and people who say what they mean." },
  { id: 4, name: "Alex", age: 29, city: "New York", country: "United States", intent: "Meaningful connection", interests: ["Books", "Cooking", "Hiking"], color: "linear-gradient(145deg,#e9b7c7,#60304a)", bio: "Looking to meet someone kind, thoughtful and adventurous." },
  { id: 5, name: "Sofia", age: 28, city: "Lisbon", country: "Portugal", intent: "Meet new people", interests: ["Beach days", "Photography", "Dancing"], color: "linear-gradient(145deg,#f4c1a5,#994b66)", bio: "Collecting passport stamps, playlists and lovely memories." },
  { id: 6, name: "Noah", age: 31, city: "Berlin", country: "Germany", intent: "Casual dating", interests: ["Design", "Cycling", "Coffee"], color: "linear-gradient(145deg,#e7a9bd,#62324d)", bio: "Creative, active and happiest discovering a new city." }
];

export default function DiscoverPage() {
  const [country, setCountry] = useState("All countries");
  const [intent, setIntent] = useState("Any intention");
  const [liked, setLiked] = useState<number[]>([]);
  const profiles = useMemo(
    () => demoProfiles.filter((profile) => (country === "All countries" || profile.country === country) && (intent === "Any intention" || profile.intent === intent)),
    [country, intent]
  );

  return (
    <main className="container" style={{ padding: "30px 0 70px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 30 }}>
        <a href="/" aria-label="Pull home" style={{ fontSize: 27, fontWeight: 900, color: "#641b3b" }}>pull<span style={{ color: "#f43f70" }}>👙</span></a>
        <nav aria-label="Main navigation" style={{ display: "flex", gap: 16, flexWrap: "wrap", fontWeight: 700, fontSize: 14 }}><a href="/dashboard">Member space</a><a href="/profile">Profile</a><a href="/safety">Safety</a><a href="/login">Log in</a></nav>
      </header>

      <section style={{ marginBottom: 24 }}>
        <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>DISCOVER · DEMO PREVIEW</span>
        <h1 className="serif" style={{ fontSize: "clamp(34px, 7vw, 48px)", color: "#4a1830", margin: "16px 0 8px" }}>Find your kind of connection.</h1>
        <p className="muted" style={{ lineHeight: 1.7 }}>Explore fictional sample profiles from around the world. These are examples only; real member discovery is not active.</p>
      </section>

      <section className="feature" aria-label="Filter demo profiles" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "end", marginBottom: 22 }}>
        <label style={{ display: "grid", gap: 7, fontWeight: 700, fontSize: 13 }}>Country
          <select className="field" value={country} onChange={(event) => setCountry(event.target.value)}>
            <option>All countries</option>{Array.from(new Set(demoProfiles.map((profile) => profile.country))).sort().map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
        <label style={{ display: "grid", gap: 7, fontWeight: 700, fontSize: 13 }}>Looking for
          <select className="field" value={intent} onChange={(event) => setIntent(event.target.value)}>
            <option>Any intention</option><option>Casual dating</option><option>Meet new people</option><option>Meaningful connection</option>
          </select>
        </label>
        <span className="muted" aria-live="polite" style={{ fontSize: 13, marginLeft: "auto" }}>{profiles.length} sample {profiles.length === 1 ? "profile" : "profiles"}</span>
      </section>

      {profiles.length > 0 ? (
        <section aria-label="Sample profiles" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 18 }}>
          {profiles.map((profile) => (
            <article key={profile.id} className="feature" style={{ padding: 14 }}>
              <div style={{ minHeight: 190, borderRadius: 18, background: profile.color, display: "flex", alignItems: "end", padding: 18, color: "white" }}>
                <div><div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>FICTIONAL DEMO PROFILE</div><h2 className="serif" style={{ fontSize: 32, margin: "5px 0" }}>{profile.name}, {profile.age}</h2><div>{profile.city}, {profile.country}</div></div>
              </div>
              <div style={{ padding: "14px 4px 3px" }}>
                <span className="pill" style={{ fontSize: 12 }}>{profile.intent}</span>
                <p style={{ lineHeight: 1.6, color: "#68525d", fontSize: 14 }}>{profile.bio}</p>
                <div aria-label="Interests" style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{profile.interests.map((interest) => <span key={interest} className="pill" style={{ fontSize: 11, padding: "6px 9px" }}>{interest}</span>)}</div>
                <button type="button" aria-pressed={liked.includes(profile.id)} onClick={() => setLiked((current) => current.includes(profile.id) ? current.filter((id) => id !== profile.id) : [...current, profile.id])} className="btn btn-primary" style={{ width: "100%", marginTop: 16 }}>{liked.includes(profile.id) ? "♥ Liked (demo)" : "♡ Like (demo)"}</button>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="feature" role="status" style={{ textAlign: "center", padding: 30 }}>
          <h2 className="serif" style={{ color: "#641b3b" }}>No sample profiles match those filters.</h2>
          <p className="muted">Try a different country or intention to see more examples.</p>
          <button type="button" className="btn btn-dark" onClick={() => { setCountry("All countries"); setIntent("Any intention"); }}>Clear filters</button>
        </div>
      )}

      <p className="muted" style={{ fontSize: 12, marginTop: 24 }}>Likes exist only in temporary page state and disappear when you leave. No accounts, messages, matches or real people are connected.</p>
    </main>
  );
}
